"use client";
import { PaperPlaneTilt } from "phosphor-react";
import { Button } from "./Button";
import { WidthWrapper } from "./WidthWrapper";
import { motion } from "framer-motion";
import { bounce, fadeInLeft, staggerContainer } from "../animations/animations";
import { useParams } from "next/navigation";

export const PageHeader = ({ title, buttonType = false, children }) => {
  const { locale } = useParams();
  const buttons = {
    hire: (
      <motion.div
        initial={bounce.initial}
        animate={bounce.animate}
        transition={bounce.transition}
      >
        <Button href={`/${locale}/contact`}>
          <PaperPlaneTilt size={20} weight="bold" />
          Hire me
        </Button>
      </motion.div>
    ),
  };

  return (
    <motion.section
      className="w-full py-20 border-b-2 border-navbar dark:border-dnavbar"
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <WidthWrapper className="flex flex-col items-center justify-center text-center mx-auto">
        <motion.h2 variants={fadeInLeft}>{title}</motion.h2>
        <motion.div className="my-4" variants={fadeInLeft}>
          {children}
        </motion.div>
        {buttonType ? buttons[buttonType] : ""}
      </WidthWrapper>
    </motion.section>
  );
};
