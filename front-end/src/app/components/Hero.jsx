"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowArcRight, NewspaperClipping } from "phosphor-react";
import { Button } from "./Button";
import Image from "next/image";
import { WidthWrapper } from "./WidthWrapper";
import { ImageHero } from "./ImageHero";
import { HeroTitle } from "./HeroTitle";
import { motion } from "framer-motion";
import { fadeInLeft } from "../animations/animations";
import { useParams } from "next/navigation";

export const Hero = () => {
  const t = useTranslations("hero");
  const { locale } = useParams();

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="relative w-full bg-white text-dark dark:bg-dark dark:text-white border-b-2 border-navbar dark:border-dnavbar overflow-hidden">
      <WidthWrapper className="pt-32 pb-16 flex">
        <div className="px-20 w-full flex flex-col">
          <motion.div
            className="flex-grow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p
              className="uppercase"
              variants={fadeInLeft}
              viewport={{ once: true }}
            >
              {t("greeting")}
            </motion.p>
            <motion.div variants={fadeInLeft} viewport={{ once: true }}>
              <HeroTitle />
            </motion.div>
            <motion.p
              className="max-w-[500px]"
              variants={fadeInLeft}
              viewport={{ once: true }}
            >
              {t.rich("description", {
                portfolio: (
                  <Link href={`/${locale}/portfolio`} className="text-primary">
                    {t("portfolio")}
                  </Link>
                ),
                resume: (
                  <Link href={`/${locale}/resume`} className="text-primary">
                    {t("resume")}
                  </Link>
                ),
              })}
            </motion.p>

            <motion.div
              className="flex gap-5 py-14"
              variants={fadeInLeft}
              viewport={{ once: true }}
            >
              <Button href={`/${locale}/portfolio`}>
                <ArrowArcRight size={25} />
                {t("viewPortfolioButton")}
              </Button>
              <Button href={`/${locale}/resume`} color="black">
                <NewspaperClipping size={25} />
                {t("viewResumeButton")}
              </Button>
            </motion.div>

            <motion.div
              className="xl:hidden py-10 mx-auto"
              variants={fadeInLeft}
              viewport={{ once: true }}
            >
              <ImageHero />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex gap-5 justify-between max-w-[500px]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {["html", "css", "js", "react", "nextjs", "npm"].map((logo) => (
              <motion.div
                key={logo}
                variants={fadeInLeft}
                viewport={{ once: true }}
              >
                <Image
                  src={`/logos/${logo}.png`}
                  height={34}
                  width={34}
                  alt={`${logo.toUpperCase()} logo`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="w-full flex justify-center hidden xl:flex"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <ImageHero />
        </motion.div>
      </WidthWrapper>
    </section>
  );
};
