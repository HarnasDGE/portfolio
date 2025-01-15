"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { bounce, buttonHoverAnimation } from "../animations/animations";

export const Button = ({
  href,
  color = "primary",
  isIcon = false,
  onClick,
  isHoverRotate = false,
  children,
}) => {
  const colors = {
    primary: "bg-primary text-light",
    black: "bg-black text-light",
    gray: "bg-muted text-light",
    link: "text-dark dark:text-light", // <-- Nie dodajemy wypełnienia tła, tylko kolor tekstu
  };

  // <-- Jeśli 'color' to 'link', usuwamy padding i zaokrąglenie, reszta zostaje
  const type =
    color === "link" ? "" : isIcon ? "p-2 shadow" : "px-8 py-4 h-fit shadow";

  const baseClasses = `
    ${colors[color]}
    flex gap-2 w-fit justify-center items-center
    ${type}
    font-semibold  whitespace-nowrap rounded-full
  `;

  if (href) {
    return (
      <Link href={href}>
        <motion.a
          initial={bounce.initial}
          animate={bounce.animate}
          transition={bounce.transition}
          whileHover={buttonHoverAnimation(isHoverRotate)}
          className={baseClasses}
        >
          {children}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      initial={bounce.initial}
      animate={bounce.animate}
      transition={bounce.transition}
      whileHover={buttonHoverAnimation(isHoverRotate)}
      onClick={onClick}
      className={baseClasses}
    >
      {children}
    </motion.button>
  );
};
