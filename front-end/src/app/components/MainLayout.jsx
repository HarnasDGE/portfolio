"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "../animations/animations";

export const MainLayout = ({ children }) => {
  return (
    <motion.div
      className="flex"
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
};
