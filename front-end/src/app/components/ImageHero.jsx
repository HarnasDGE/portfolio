import Image from "next/image";
import { motion } from "framer-motion";

export const ImageHero = () => {
  return (
    <div className="relative h-[398px] w-[326px] px-10 mx-auto z-10">
      <Image
        src="/images/damianOriginalBlur.png"
        layout="fill"
        className="object-cover rounded shadow z-10"
        alt="Damian photo"
      />
      <motion.div
        initial={{ rotateZ: "-8deg" }}
        animate={{ rotateZ: "8deg" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute -z-10 top-0 left-0 w-full h-full bg-primary rotate-[8deg]"
      />
    </div>
  );
};
