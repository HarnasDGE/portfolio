import Image from "next/image";

export const ProfileImage = () => {
  return (
    <div className=" bg-primary h-[78px] w-[78px] my-3 rounded-full overflow-hidden shadow-lg mx-auto">
      <div className="w-[64px] h-full  relative mx-auto">
        <Image
          src="/images/damianOriginalBlur.png"
          alt="Damian Gębala"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  );
};
