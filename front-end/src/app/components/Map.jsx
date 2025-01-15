"use client";

import { WidthWrapper } from "@/app/components/WidthWrapper";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/animations/animations";

export const Map = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <WidthWrapper>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.354326088485!2d19.94285707697121!3d49.609924371443824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47160a9fa690118d%3A0xc79eb858c7ceb8e2!2sGil%C3%B3wka%204A%2C%2034-700%20Rabka-Zdr%C3%B3j!5e0!3m2!1spl!2spl!4v1734955387512!5m2!1spl!2spl"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full rounded-2xl"
        ></iframe>
      </WidthWrapper>
    </motion.section>
  );
};
