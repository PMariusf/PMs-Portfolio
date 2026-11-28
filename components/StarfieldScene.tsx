"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/**
 * Bakgrunn for forsiden: et stjernerom med ekte dybde.
 * - Tre lag med stjerner som står stille på ulik dybde og blinker med et skimt av rødt/blått
 * - Myke tåkeskyer i violett og cyan langt bak
 * - Bølgende nordlys som glir sakte over himmelen
 * - Kameraet følger musen, så lagene forskyves mot hverandre (parallakse)
 * Respekterer prefers-reduced-motion (da står alt stille).
 */

const DEPTH = 140; // hvor langt bak stjernene går
const NEAR_Z = 6; // der stjernene "passerer" kameraet og starter bakerst igjen

const starVertex = /* glsl */ `
  uniform float uTime;
  uniform float uSpeed;
  uniform float uPixelRatio;
  attribute float aSize;
  attribute float aPhase;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec3 p = position;
    // Driv stjernene mot kameraet og send dem bakerst når de passerer
    p.z = mod(p.z + uTime * uSpeed + ${DEPTH.toFixed(1)}, ${(DEPTH + NEAR_Z).toFixed(1)}) - ${DEPTH.toFixed(1)};

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    float dist = -mv.z;
    // Fast skjermstørrelse: alle stjerner er like små, uansett dybde
    gl_PointSize = aSize * uPixelRatio;

    // Fade inn langt borte og ut helt nærme, så ingen stjerner "popper"
    float farFade = 0.55 + 0.45 * smoothstep(${DEPTH.toFixed(1)}, ${(DEPTH * 0.6).toFixed(1)}, dist);
    float nearFade = smoothstep(0.5, 6.0, dist);
    // Blinking: to bølger med ulik fart gir et urolig, naturlig glimt
    float tw = sin(uTime * (0.9 + aPhase * 1.8) + aPhase * 40.0) * 0.6
             + sin(uTime * (2.3 + aPhase * 2.7) + aPhase * 17.0) * 0.4;
    float twinkle = 0.55 + 0.45 * tw;

    // Skimt av rødt/blått mens stjernen blinker (som når ekte stjerner "glitrer")
    float shift = sin(uTime * (0.7 + aPhase * 1.3) + aPhase * 91.0);
    vec3 red = vec3(1.0, 0.55, 0.5);
    vec3 blue = vec3(0.55, 0.7, 1.0);
    vec3 tint = shift > 0.0 ? blue : red;
    float amount = smoothstep(0.55, 1.0, abs(shift)) * 0.7;

    vColor = mix(aColor, tint, amount);
    vAlpha = farFade * nearFade * twinkle;
  }
`;

const starFragment = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    // Liten, myk prikk
    float core = smoothstep(0.5, 0.3, d);
    float glow = 0.0;
    float a = (core + glow) * vAlpha;
    if (a < 0.003) discard;
    gl_FragColor = vec4(vColor, a);
  }
`;

// Liten seedet tilfeldighetsgenerator, så stjernene ligger likt hver gang (og render er "ren")
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type StarLayerProps = {
  count: number;
  spread: number;
  size: [number, number];
  speed: number;
  seed: number;
  animate: boolean;
};

function StarLayer({ count, spread, size, speed, seed, animate }: StarLayerProps) {
  const material = useRef<THREE.ShaderMaterial>(null);
  const { gl } = useThree();

  const geometry = useMemo(() => {
    const rand = mulberry32(seed);
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);
    const colors = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#ffffff"),
      new THREE.Color("#e2e8f0"),
      new THREE.Color("#c7d2fe"), // svak indigo
      new THREE.Color("#a5f3fc"), // svak cyan
      new THREE.Color("#ddd6fe"), // svak violett
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (rand() - 0.5) * spread * 2;
      positions[i * 3 + 1] = (rand() - 0.5) * spread * 1.3;
      positions[i * 3 + 2] = -12 - rand() * (DEPTH - 12); // ingen stjerner helt inntil kameraet
      sizes[i] = size[0] + Math.pow(rand(), 3) * (size[1] - size[0]);
      phases[i] = rand();
      const c = palette[rand() < 0.8 ? 0 : 1 + Math.floor(rand() * (palette.length - 1))];
      colors.set([c.r, c.g, c.b], i * 3);
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    g.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
    g.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));
    return g;
  }, [count, spread, size, seed]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSpeed: { value: animate ? speed : 0 },
      uPixelRatio: { value: Math.min(gl.getPixelRatio(), 2) },
    }),
    [animate, speed, gl],
  );

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame((_, delta) => {
    if (animate && material.current) material.current.uniforms.uTime.value += Math.min(delta, 0.1);
  });

  return (
    <points geometry={geometry} frustumCulled={false}>
      <shaderMaterial
        ref={material}
        vertexShader={starVertex}
        fragmentShader={starFragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function useNebulaTexture() {
  return useMemo(() => {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext("2d")!;
    const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.35, "rgba(255,255,255,0.35)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }, []);
}

const nebulae = [
  { position: [-38, 16, -110], scale: [95, 60], color: "#7c3aed", opacity: 0.16, spin: 0.012 },
  { position: [42, -14, -120], scale: [110, 70], color: "#06b6d4", opacity: 0.12, spin: -0.01 },
  { position: [6, 26, -135], scale: [120, 55], color: "#4f46e5", opacity: 0.1, spin: 0.008 },
  { position: [-14, -30, -95], scale: [70, 45], color: "#a855f7", opacity: 0.08, spin: -0.014 },
] as const;

function Nebulae({ animate }: { animate: boolean }) {
  const texture = useNebulaTexture();
  const group = useRef<THREE.Group>(null);

  useEffect(() => () => texture.dispose(), [texture]);

  useFrame((state) => {
    if (!animate || !group.current) return;
    const t = state.clock.elapsedTime;
    group.current.children.forEach((child, i) => {
      child.rotation.z = t * nebulae[i].spin;
      child.position.y = nebulae[i].position[1] + Math.sin(t * 0.05 + i) * 3;
    });
  });

  return (
    <group ref={group}>
      {nebulae.map((n, i) => (
        <mesh key={i} position={n.position as unknown as [number, number, number]}>
          <planeGeometry args={[n.scale[0], n.scale[1]]} />
          <meshBasicMaterial
            map={texture}
            color={n.color}
            transparent
            opacity={n.opacity}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

const auroraVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const auroraFragment = /* glsl */ `
  uniform float uTime;
  uniform float uOffset;
  uniform float uHeight;
  uniform float uIntensity;
  uniform vec3 uLow;
  uniform vec3 uHigh;
  varying vec2 vUv;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
    return v;
  }

  void main() {
    float t = uTime * 0.12 + uOffset;
    float x = vUv.x;

    // Bølgende underkant av "gardinen"
    float base = uHeight
      + 0.09 * sin(x * 5.0 + t * 1.3)
      + 0.05 * sin(x * 11.0 - t * 0.9 + uOffset)
      + 0.08 * (fbm(vec2(x * 3.0 + t * 0.4, t * 0.2)) - 0.5);

    float y = vUv.y - base;
    // Skarp underkant, lang myk hale oppover
    float curtain = smoothstep(-0.015, 0.02, y) * exp(-max(y, 0.0) * 4.2);

    // Loddrette stråler som glir sidelengs
    float rays = fbm(vec2(x * 38.0 + t * 1.5, vUv.y * 1.2 - t * 0.3));
    rays = 0.35 + 0.9 * pow(rays, 1.6);

    // Pulser i styrke langs båndet
    float pulse = 0.55 + 0.45 * fbm(vec2(x * 2.2 - t * 0.6, t * 0.35));

    // Myk fade mot kantene av planet
    float edge = smoothstep(0.0, 0.18, x) * smoothstep(1.0, 0.82, x) * smoothstep(1.0, 0.75, vUv.y);

    float a = curtain * rays * pulse * edge * uIntensity;
    vec3 col = mix(uLow, uHigh, smoothstep(0.0, 0.35, y));
    gl_FragColor = vec4(col, a);
  }
`;

const auroraBands = [
  { position: [0, 14, -95], rotation: -0.06, size: [300, 110], offset: 0, height: 0.5, intensity: 0.45, low: "#34d399", high: "#7c3aed" },
  { position: [-20, 12, -120], rotation: 0.05, size: [320, 120], offset: 7.3, height: 0.56, intensity: 0.26, low: "#22d3ee", high: "#6366f1" },
] as const;

function Aurora({ animate }: { animate: boolean }) {
  const materials = useRef<(THREE.ShaderMaterial | null)[]>([]);
  const uniformSets = useMemo(
    () =>
      auroraBands.map((b) => ({
        uTime: { value: 0 },
        uOffset: { value: b.offset },
        uHeight: { value: b.height },
        uIntensity: { value: b.intensity },
        uLow: { value: new THREE.Color(b.low) },
        uHigh: { value: new THREE.Color(b.high) },
      })),
    [],
  );

  useFrame((_, delta) => {
    if (!animate) return;
    materials.current.forEach((m) => {
      if (m) m.uniforms.uTime.value += Math.min(delta, 0.1);
    });
  });

  return (
    <group>
      {auroraBands.map((b, i) => (
        <mesh key={i} position={b.position as unknown as [number, number, number]} rotation={[0, 0, b.rotation]}>
          <planeGeometry args={[b.size[0], b.size[1]]} />
          <shaderMaterial
            ref={(m) => {
              materials.current[i] = m;
            }}
            vertexShader={auroraVertex}
            fragmentShader={auroraFragment}
            uniforms={uniformSets[i]}
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

function CameraRig({ pointer, animate }: { pointer: React.RefObject<{ x: number; y: number }>; animate: boolean }) {
  const target = useMemo(() => new THREE.Vector3(0, 0, -60), []);

  useFrame((state, delta) => {
    if (!animate) return;
    const cam = state.camera;
    const p = pointer.current ?? { x: 0, y: 0 };
    // Parallakse fra musen: nære stjerner flytter seg mer enn fjerne
    const tx = p.x * 6;
    const ty = p.y * 3.5;
    const k = 1 - Math.exp(-delta * 1.6);
    cam.position.x += (tx - cam.position.x) * k;
    cam.position.y += (ty - cam.position.y) * k;
    cam.lookAt(target);
  });

  return null;
}

export default function StarfieldScene() {
  const [ready, setReady] = useState(false);
  const [settings] = useState(() => {
    const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = typeof window !== "undefined" && window.innerWidth < 768;
    return { animate: !reduced, scale: small ? 0.45 : 1 };
  });
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const { animate, scale } = settings;

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 transition-opacity duration-[1600ms] ease-out ${ready ? "opacity-100" : "opacity-0"}`}
    >
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 8], fov: 60, near: 0.1, far: 400 }}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        frameloop={animate ? "always" : "demand"}
        onCreated={() => setReady(true)}
        style={{ pointerEvents: "none" }}
      >
        <Nebulae animate={animate} />
        <Aurora animate={animate} />
        {/* Fjerne, små og mange */}
        <StarLayer count={Math.round(325 * scale)} spread={120} size={[2.0, 2.4]} speed={0} seed={11} animate={animate} />
        {/* Midtlag */}
        <StarLayer count={Math.round(112 * scale)} spread={80} size={[2.0, 2.4]} speed={0} seed={23} animate={animate} />
        {/* Noen få store, nære stjerner */}
        <StarLayer count={Math.round(18 * scale)} spread={50} size={[2.0, 2.4]} speed={0} seed={37} animate={animate} />
        <CameraRig pointer={pointer} animate={animate} />
      </Canvas>
    </div>
  );
}
