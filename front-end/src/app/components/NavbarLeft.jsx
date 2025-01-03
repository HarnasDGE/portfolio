"use client"; // icons
import Image from "next/image";
import { SocialMedia } from "./SocialMedia";
import { Divider } from "./Divider";
import { Menu } from "./Menu";
import { Button } from "./Button";
import { PaperPlaneTilt } from "phosphor-react";
import { useTranslations } from "next-intl";
import { ProfileImage } from "./ProfileImage";

export const NavbarLeft = ({ className }) => {
  const t = useTranslations("navbarLeft");
  return (
    <nav
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
      <Button>
        <PaperPlaneTilt size={20} weight="bold" />
        {t(`hireMe`)}
      </Button>
    </nav>
  );
};
