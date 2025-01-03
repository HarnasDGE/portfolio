"use client";
import { NewspaperClipping } from "phosphor-react";
import { Button } from "./Button";
import Link from "next/link";
import { useTranslations } from "use-intl";
import Image from "next/image";
import { WidthWrapper } from "./WidthWrapper";

export const WhatIDo = () => {
  const technologies = [
    {
      title: "HTML5",
      key: "semantic_tags",
      icon: "/logos/html.png",
    },
    {
      title: "CSS3",
      key: "responsive_layouts",
      icon: "/logos/css.png",
    },
    {
      title: "JavaScript (Vanilla)",
      key: "dynamic_interfaces",
      icon: "/logos/js.png",
    },
    {
      title: "React",
      key: "component_apps",
      icon: "/logos/react.png",
    },
    {
      title: "Next.js",
      key: "seo_apps",
      icon: "/logos/nextjs.png",
    },
    {
      title: "npm",
      key: "package_management",
      icon: "/logos/npm.png",
    },
    {
      title: "Git",
      key: "version_control",
      icon: "/logos/git.png",
    },
    {
      title: "ES6+",
      key: "modern_syntax",
      icon: "/logos/es6.png",
    },
  ];
  const t = useTranslations("whatIDo");

  return (
    <article className="px-20 py-16 border-b-2 border-navbar dark:border-dnavbar">
      <WidthWrapper>
        <h2 className="border-l-8 border-primary pl-3">{t("title")}</h2>
        <div className="xl:flex xl:gap-5">
          <p className="py-3">
            {t("description")}{" "}
            <Link href="/portfolio">{t("portfolioLink")}</Link> i{" "}
            <Link href="/resume">{t("cvLink")}</Link>.
          </p>
          <div>
            <Button>
              <NewspaperClipping size="24" weight="bold" /> {t("cvButton")}
            </Button>
          </div>
        </div>
      </WidthWrapper>

      <WidthWrapper className="pt-10 flex flex-wrap  gap-5">
        {technologies.map((technology) => (
          <article
            key={technology.title}
            className="h-auto lg:h-[300px] w-full lg:w-[300px] p-10 shadow bg-navbar dark:bg-dnavbar border-gray/10 border-[1px] shadow transition-all hover:bg-light hover:dark:bg-dark hover:border-primary hover:shadow-2xl"
          >
            <Image
              src={technology.icon}
              height={28}
              width={28}
              alt={`Logo ${technology.key}`}
              className="w-fit"
            />
            <h3 className="text-xl py-5">{technology.title}</h3>
            <p>{t(`${technology.key}`)}</p>
          </article>
        ))}
      </WidthWrapper>
    </article>
  );
};
