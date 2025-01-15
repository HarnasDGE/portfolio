"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";

const animationVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { x: "0", opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

export const OptionsLeft = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)"); // powyżej lg
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
      className={`sticky top-0 h-full flex flex-col gap-4 p-2 ${className}`}
    >
      <ColorModeSwitcher />
      <LanguageSwitcher />
    </motion.div>
  );
};
