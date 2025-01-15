"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";

const animationVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: "0", opacity: 1 },
  exit: { y: "-100%", opacity: 0 },
};

export const OptionsTop = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)"); // poniżej lg
    const updateVisibility = () => setIsVisible(mediaQuery.matches);

    updateVisibility(); // Initial check
    mediaQuery.addEventListener("change", updateVisibility);

    return () => mediaQuery.removeEventListener("change", updateVisibility);
  }, []);

  if (!isVisible) return null;

  const motionProps = {
    initial: "hidden",
    animate: "visible",
    exit: "exit",
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <motion.div
      {...motionProps}
      variants={animationVariants}
      className={`sticky top-0 left-0 w-full p-2 flex justify-end items-center gap-4 border-b-2 bg-light dark:bg-dark border-navbar dark:border-dnavbar shadow z-[9999] ${className}`}
    >
      <ColorModeSwitcher />
      <LanguageSwitcher />
    </motion.div>
  );
};
