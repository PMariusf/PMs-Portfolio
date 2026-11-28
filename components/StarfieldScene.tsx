"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/**
 * Bakgrunn for forsiden: et stjernerom med ekte dybde.
 * - Tre lag med stjerner som driver sakte mot kameraet og blinker svakt
 * - Myke tåkeskyer i violett og cyan langt bak
 * - Kameraet følger musen litt (parallakse)
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
    gl_PointSize = aSize * uPixelRatio * (220.0 / max(dist, 1.0));

    // Fade inn langt borte og ut helt nærme, så ingen stjerner "popper"
    float farFade = smoothstep(${DEPTH.toFixed(1)}, ${(DEPTH * 0.7).toFixed(1)}, dist);
    float nearFade = smoothstep(0.5, 6.0, dist);
    float twinkle = 0.72 + 0.28 * sin(uTime * (0.6 + aPhase * 1.4) + aPhase * 6.2831);

    vColor = aColor;
    vAlpha = farFade * nearFade * twinkle;
  }
`;

const starFragment = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    // Skarp kjerne + myk glød
    float core = smoothstep(0.18, 0.0, d);
    float glow = smoothstep(0.5, 0.0, d) * 0.35;
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
      positions[i * 3 + 2] = -rand() * DEPTH;
      sizes[i] = size[0] + Math.pow(rand(), 3) * (size[1] - size[0]);
      phases[i] = rand();
      const c = palette[rand() < 0.6 ? 0 : 1 + Math.floor(rand() * (palette.length - 1))];
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

function CameraRig({ pointer, animate }: { pointer: React.RefObject<{ x: number; y: number }>; animate: boolean }) {
  const target = useMemo(() => new THREE.Vector3(0, 0, -60), []);

  useFrame((state, delta) => {
    const cam = state.camera;
    const p = pointer.current ?? { x: 0, y: 0 };
    const t = state.clock.elapsedTime;
    // Langsom "pust" + parallakse fra musen
    const tx = p.x * 3.2 + (animate ? Math.sin(t * 0.07) * 1.2 : 0);
    const ty = p.y * 2.0 + (animate ? Math.cos(t * 0.05) * 0.8 : 0);
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
        {/* Fjerne, små og mange */}
        <StarLayer count={Math.round(2600 * scale)} spread={120} size={[0.6, 1.8]} speed={1.2} seed={11} animate={animate} />
        {/* Midtlag */}
        <StarLayer count={Math.round(900 * scale)} spread={80} size={[1.2, 3]} speed={2.4} seed={23} animate={animate} />
        {/* Noen få store, nære stjerner */}
        <StarLayer count={Math.round(140 * scale)} spread={50} size={[2.6, 5.5]} speed={3.6} seed={37} animate={animate} />
        <CameraRig pointer={pointer} animate={animate} />
      </Canvas>
    </div>
  );
}
