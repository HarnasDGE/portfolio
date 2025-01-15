"use client";
import { NewspaperClipping } from "phosphor-react";
import { Button } from "./Button";
import { WidthWrapper } from "./WidthWrapper";
import { PortfolioCard } from "./PortfolioCard";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { fadeInLeft, staggerContainer } from "../animations/animations";
import { useParams } from "next/navigation";

export const FeaturedProjects = () => {
  const { locale } = useParams();
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.category === "Large Projects" && b.category !== "Large Projects") {
      return -1;
    }
    if (a.category !== "Large Projects" && b.category === "Large Projects") {
      return 1;
    }
    return 0;
  });

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <WidthWrapper className="p-20 border-b-2 border-navbar dark:border-dnavbar">
        <motion.div className="xl:flex xl:gap-5" variants={fadeInLeft}>
          <div className="flex-grow">
            <h2 className="border-l-8 border-primary pl-3">
              Featured Projects
            </h2>
            <p className="py-3">
              My step-by-step guide ensures a smooth project journey, from the
              initial consultation to the final delivery. I take care of every
              detail, allowing you to focus on what you do best.
            </p>
          </div>
          <div className="mt-8">
            <Button href={`/${locale}/portfolio`}>
              <NewspaperClipping size="24" weight="bold" /> View Portfolio
            </Button>
          </div>
        </motion.div>

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8"
          variants={staggerContainer}
        >
          {sortedProjects.map((project) => (
            <li key={project.id}>
              <PortfolioCard project={project} />
            </li>
          ))}
        </motion.ul>
      </WidthWrapper>
    </motion.section>
  );
};
