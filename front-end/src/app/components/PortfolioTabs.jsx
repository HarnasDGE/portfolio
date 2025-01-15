"use client";
import { useSearchParams, useRouter, useParams } from "next/navigation";
import { projects } from "../data/projects";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInLeft, staggerFastContainer } from "../animations/animations";

export const PortfolioTabs = () => {
  const { locale } = useParams();
  const searchParams = useSearchParams();
  const activeType = searchParams.get("type");
  const categories = [
    "all",
    ...new Set(projects.map((project) => project.type)),
  ];

  return (
    <motion.div
      className="flex justify-center gap-4 my-4"
      initial="hidden"
      animate="visible"
      variants={staggerFastContainer}
    >
      {categories.map((category) => (
        <motion.div key={category} variants={fadeInLeft}>
          <Link
            href={{
              pathname: `/${locale}/portfolio`,
              query: category === "all" ? {} : { type: category },
            }}
            scroll={false}
            className={`px-4 py-2 rounded font-bold ${
              activeType === category || (!activeType && category === "all")
                ? "text-primary"
                : "text-muted"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};
