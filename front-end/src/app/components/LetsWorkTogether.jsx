"use client";
import { Button } from "./Button";
import { motion } from "framer-motion";
import { fadeInLeft, staggerContainer } from "../animations/animations";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Pen } from "phosphor-react";

export const LetsWorkTogether = () => {
  const t = useTranslations("workTogether");
  const { locale } = useParams();
  return (
    <motion.div
      className="relative w-full p-20 xl:flex xl:gap-10 items-center border-b-2 border-navbar dark:border-dnavbar"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.div className="text-light" variants={fadeInLeft}>
        <h2>{t("heading")}</h2>
        <p>{t("description")}</p>
      </motion.div>
      <motion.div className="pt-10" variants={fadeInLeft}>
        <Button href={`/${locale}/contact`}>
          <Pen size={25} />
          {t("button")}
        </Button>
      </motion.div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-fixed -z-10"
        style={{ backgroundImage: `url(/images/bg.png)` }}
      />
    </motion.div>
  );
};
