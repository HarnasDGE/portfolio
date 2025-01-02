"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowArcRight, NewspaperClipping } from "phosphor-react";
import { Button } from "./Button";
import Image from "next/image";
import { WidthWrapper } from "./WidthWrapper";

export const Hero = () => {
  const t = useTranslations("hero");

  return (
    <section className="w-full border-b-2 border-navbar dark:border-dnavbar">
      <WidthWrapper className="pt-32 pb-16  flex ">
        <div className="px-20 w-full flex flex-col">
          <div className="flex-grow">
            <p className="uppercase ">{t("greeting")}</p>
            <h2 className="text-primary font-extrabold py-6">Front-End</h2>
            <p className="max-w-[500px]">
              {t.rich("description", {
                // zmiana: bez funkcji strzałkowych
                portfolio: (
                  <Link href="/portfolio" className="text-primary">
                    {t("portfolio")}
                  </Link>
                ),
                resume: (
                  <Link href="/resume" className="text-primary">
                    {t("resume")}
                  </Link>
                ),
              })}
            </p>
            <div className="flex gap-5 py-14">
              <Button>
                <ArrowArcRight size={25} />
                {t("viewPortfolioButton")}
              </Button>
              <Button color="black">
                <NewspaperClipping size={25} />
                {t("viewResumeButton")}
              </Button>
            </div>
          </div>
          <div className="flex gap-5 justify-between max-w-[500px]">
            <Image
              src="/logos/html.png"
              height={34}
              width={34}
              alt="HTML logo"
            />
            <Image src="/logos/css.png" height={34} width={34} alt="CSS logo" />
            <Image
              src="/logos/js.png"
              height={34}
              width={34}
              alt="JavaScript logo"
            />
            <Image
              src="/logos/react.png"
              height={34}
              width={34}
              alt="React logo"
            />
            <Image
              src="/logos/nextjs.png"
              height={34}
              width={34}
              alt="Node.js logo"
            />
            <Image src="/logos/npm.png" height={34} width={34} alt="NPM logo" />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="relative h-[398px] w-[326px] px-10">
            <Image
              src="/images/damianOriginalBlur.png"
              layout="fill"
              className="object-cover rounded shadow"
              alt="Damian photo"
            />
            <div className="absolute -z-10 top-0 left-0 w-full h-full bg-primary rotate-[8deg]" />
          </div>
        </div>
      </WidthWrapper>
    </section>
  );
};
