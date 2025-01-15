"use client"; // icons
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SocialMedia } from "./SocialMedia";
import { Divider } from "./Divider";
import { Menu } from "./Menu";
import { Button } from "./Button";
import { PaperPlaneTilt } from "phosphor-react";
import { useTranslations } from "next-intl";
import { ProfileImage } from "./ProfileImage";
import { useParams } from "next/navigation";

export const NavbarLeft = ({ className }) => {
  const t = useTranslations("navbarLeft");
  const [isVisible, setIsVisible] = useState(false);
  const { locale } = useParams();
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)"); // lg breakpoint in Tailwind
    const handleResize = () => setIsVisible(mediaQuery.matches);

    handleResize(); // Initial check
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ x: "-100vh", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          exit={{ x: "-100vh", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`sticky top-0 h-full w-fit bg-navbar min-h-[100svh] py-10 flex flex-col items-center text-center dark:bg-dnavbar transition-all ${className}`}
        >
          <div className="flex-grow w-full px-6 mx-auto">
            <ProfileImage />
            <h1 className="text-2xl font-bold ">Damian Gębala</h1>
            <p>Junior Front-End Developer</p>
            <SocialMedia />
            <Divider />
            <Menu />
          </div>
          <Button href={`/${locale}/contact`}>
            <PaperPlaneTilt size={20} weight="bold" />
            {t("hireMe")}
          </Button>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
