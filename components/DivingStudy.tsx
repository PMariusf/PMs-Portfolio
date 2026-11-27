import Image from "next/image";

export default function DivingStudy({ norwegian }: { norwegian: boolean }) {
  return (
    <figure className="absolute inset-0 grid grid-cols-[1fr_auto] grid-rows-[1fr_auto] bg-[#082438] px-5 pt-5">
      <div className="relative mx-auto h-full aspect-[9/16] max-w-full overflow-hidden">
        <Image src="/projects/stupeklubb.png" alt="Bergen Stupeklubb" fill sizes="180px" className="object-cover object-top" />
      </div>
      <div aria-hidden="true" className="flex flex-col justify-between border-l border-white/40 py-1 font-mono text-xs text-white/85">
        {["10", "7", "5", "3", "1"].map((height) => (
          <span key={height} className="flex items-center gap-2"><span className="w-3 border-t border-current" />{height} m</span>
        ))}
      </div>
      <figcaption className="col-span-2 py-3 text-xs text-white/80">
        {norwegian ? "Designskisse · Fra stupetårn til dybdemåler" : "Design study · From diving tower to depth gauge"}
      </figcaption>
    </figure>
  );
}
