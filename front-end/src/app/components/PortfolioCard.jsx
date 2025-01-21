"use client";

import { ArrowUpRight } from "phosphor-react";
import Image from "next/image";
import { Button } from "./Button";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export const PortfolioCard = ({ project }) => {
  const { locale } = useParams();

  const parentVariants = {
    show: {
      scale: [0, 1, 1.05, 1],
      transition: {
        bounce: 0.25,
        ease: "easeOut",
        duration: 0.5,
      },
    },
    hide: {
      scale: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,

        bounce: 0.25,
      },
    },
  };

  const imageVariants = {
    show: {
      filter: ["blur(10)", "blur(0)"],

      transition: {
        ease: "easeOut",
        duration: 0.8,
        type: "spring",
      },
    },
    hide: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <motion.div
      whileInView="show"
      viewport={{ once: true }}
      variants={parentVariants}
      initial="hide"
      className="w-full overflow-hidden"
    >
      <div className="overflow-hidden">
        <motion.div
          className="relative aspect-video w-full "
          variants={imageVariants}
          whileHover="show"
          initial="hide"
        >
          <Link href={`/${locale}/portfolio/${project.id}`}>
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              quality={100}
              className=" object-cover object-top p-2 shadow-lg rounded-lg cursor-pointer hover:border-2 hover:border-primary"
            />
          </Link>
        </motion.div>
      </div>
      <div className="flex items-center pt-5">
        <div className="flex-grow">
          <ul className="flex gap-3 items-center text-sm">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="border-2 border-gray dark:border-light px-3 py-[2px] rounded-full"
              >
                {technology}
              </li>
            ))}
          </ul>
          <Link
            href={`/${locale}/portfolio/${project.id}`}
            className="text-dark dark:text-light hover:text-primary transition-all duration-300 cursor-pointer"
          >
            <h4 className="text-xl font-bold mt-4">
              {locale === "en" ? project.enTitle : project.title}
            </h4>
          </Link>
        </div>
        <Button
          color="gray"
          isIcon
          isHoverRotate={true}
          href={`/${locale}/portfolio/${project.id}`}
        >
          <ArrowUpRight size={32} />
        </Button>
      </div>
    </motion.div>
  );
};
