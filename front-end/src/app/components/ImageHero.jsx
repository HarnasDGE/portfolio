import Image from "next/image";

export const ImageHero = () => {
  return (
    <div className="relative h-[398px] w-[326px] px-10 mx-auto z-10">
      <Image
        src="/images/damianOriginalBlur.png"
        layout="fill"
        className="object-cover rounded shadow z-10"
        alt="Damian photo"
      />
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-primary rotate-[8deg]" />
    </div>
  );
};
