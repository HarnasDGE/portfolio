"use client";

import { WidthWrapper } from "@/app/components/WidthWrapper";
import { Compass, EnvelopeOpen, Phone } from "phosphor-react";
import { motion } from "framer-motion";
import { fadeInLeft, staggerContainer } from "@/app/animations/animations";
import { useTranslations } from "next-intl";

export const ContactData = () => {
  const t = useTranslations("contactPage");

  return (
    <motion.section
      className="py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <WidthWrapper>
        <motion.h2
          className="border-l-8 mb-5 pl-3 border-primary"
          variants={fadeInLeft}
        >
          {t("contactDetailsHeading")}
        </motion.h2>
        <motion.p variants={fadeInLeft}>
          {t("contactDetailsDescription")}
        </motion.p>
        <motion.ul
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-8"
          variants={staggerContainer}
        >
          <motion.li
            className="p-4 border-l-[1px] border-primary flex items-center gap-4"
            variants={fadeInLeft}
          >
            <Phone className="text-primary" size={50} />
            <div>
              <h3>{t("phoneLabel")}</h3>
              <p>{t("phoneValue")}</p>
            </div>
          </motion.li>
          <motion.li
            className="p-4 border-l-[1px] border-primary flex items-center gap-4"
            variants={fadeInLeft}
          >
            <Compass className="text-primary" size={50} />
            <div>
              <h3>{t("emailLabel")}</h3>
              <p>{t("emailValue")}</p>
            </div>
          </motion.li>
          <motion.li
            className="p-4 border-l-[1px] border-primary flex items-center gap-4"
            variants={fadeInLeft}
          >
            <EnvelopeOpen className="text-primary" size={50} />
            <div>
              <h3>{t("locationLabel")}</h3>
              <p>{t("locationStreet")}</p>
              <p>{t("locationCity")}</p>
            </div>
          </motion.li>
        </motion.ul>
      </WidthWrapper>
    </motion.section>
  );
};
