import Image, { type StaticImageData } from "next/image";

export function PhoneFrame({ src, alt }: { src: StaticImageData; alt: string }) {
  return (
    <div className="relative isolate grid justify-items-center before:absolute before:top-[12%] before:z-[-1] before:aspect-square before:w-[88%] before:rounded-full before:bg-blush before:content-['']">
      <div className="relative w-[min(100%,300px)] justify-self-center rounded-[40px] bg-ink p-[10px] shadow-card">
        <Image src={src} alt={alt} sizes="300px" className="block h-auto w-full rounded-[30px]" />
      </div>
    </div>
  );
}
