"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { pages } from "../data/pages";
import { useTranslations } from "next-intl";
import { projects } from "../data/projects";

const animationVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0", opacity: 1 },
  exit: { y: "100%", opacity: 0 },
};

export const MenuBottom = ({ className }) => {
  const pathname = usePathname();
  const { locale } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  const t = useTranslations("menuLeft");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)"); // poniżej lg
    const handleResize = () => setIsVisible(mediaQuery.matches);

    handleResize(); // Initial check
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={animationVariants}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex gap-5 justify-between px-5 py-3 sticky bottom-0 bg-light dark:bg-dark border-t-2 border-navbar dark:border-dnavbar z-[999] shadow ${className}`}
    >
      {pages.map((page) => {
        const href = `/${locale}${page.src}`;
        const isActive =
          pathname === href || (page.src === "/" && pathname === `/${locale}`);

        return (
          <li key={page.key}>
            <Link
              href={href}
              className={`text-black dark:text-light flex justify-between items-center h-full block cursor-pointer py-2 px-3 mb-2 rounded-xl transition-all ${
                isActive ? "bg-primary text-light" : ""
              }`}
            >
              <div className="flex gap-3 items-center">
                <page.icon
                  className={`${isActive ? "text-light" : ""}`}
                  size={20}
                  weight="bold"
                />
                <p
                  className={`${isActive ? "text-light" : ""} hidden sm:block`}
                >
                  {t(`${page.key}`)}
                </p>
              </div>
              {page.key === "portfolio" ? (
                <div className="text-light py-[2px] ml-3 px-2 bg-secondary rounded-lg hidden sm:block">
                  {projects.length}
                </div>
              ) : (
                ""
              )}
            </Link>
          </li>
        );
      })}
    </motion.ul>
  );
};
