"use client";

import { useState } from "react"; // <-- Dodano import useState
import { Button } from "@/app/components/Button";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp } from "@/app/animations/animations";
import { useTranslations } from "next-intl";
import { WidthWrapper } from "./WidthWrapper";

export const ContactForm = () => {
  const t = useTranslations("contactPage");

  // Dodano obsługę stanu do wyświetlania komunikatów
  const [statusMessage, setStatusMessage] = useState("");

  // Dodano funkcję do obsługi submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Pobranie danych z formularza
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      location: e.target.location.value,
      message: e.target[4].value, // <-- textarea to 5-ty element
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatusMessage("Email wysłany!");
      } else {
        setStatusMessage("Wystąpił błąd podczas wysyłania emaila.");
      }
    } catch (error) {
      setStatusMessage("Wystąpił błąd podczas wysyłania emaila.");
    }
  };

  return (
    <motion.section
      className="py-20 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <WidthWrapper>
        <motion.h2
          className="border-l-8 pl-3 mb-5 border-primary"
          variants={fadeInLeft}
        >
          {t("getInTouchHeading")}
        </motion.h2>
        <motion.p variants={fadeInLeft}>{t("getInTouchDescription")}</motion.p>

        {/* Dodano onSubmit */}
        <motion.form
          onSubmit={handleSubmit}
          className="p-5 my-10 border-2 border-muted/20 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={fadeInUp}
        >
          <label
            htmlFor="name"
            className="px-5 py-3 border-2 border-muted/20 rounded-xl flex gap-3 items-center"
          >
            <input
              type="text"
              id="name"
              className="flex-1 border-none focus:outline-none bg-transparent"
              placeholder={t("formNamePlaceholder")}
              required
            />
          </label>

          <label
            htmlFor="email"
            className="px-5 py-3 border-2 border-muted/20 rounded-xl flex gap-3 items-center"
          >
            <input
              type="email"
              id="email"
              className="flex-1 border-none focus:outline-none bg-transparent"
              placeholder={t("formEmailPlaceholder")}
              required
            />
          </label>

          <label
            htmlFor="phone"
            className="px-5 py-3 border-2 border-muted/20 rounded-xl flex gap-3 items-center"
          >
            <input
              type="tel"
              id="phone"
              className="flex-1 border-none focus:outline-none bg-transparent"
              placeholder={t("formPhonePlaceholder")}
            />
          </label>

          <label
            htmlFor="location"
            className="px-5 py-3 border-2 border-muted/20 rounded-xl flex gap-3 items-center"
          >
            <input
              type="text"
              id="location"
              className="flex-1 border-none focus:outline-none bg-transparent"
              placeholder={t("formLocationPlaceholder")}
            />
          </label>

          <textarea
            placeholder={t("formMessagePlaceholder")}
            className="col-span-1 md:col-span-2 px-5 py-3 border-2 border-muted/20 bg-transparent rounded-xl resize-none w-full focus:outline-none"
            rows="3"
            required
          ></textarea>

          <label
            htmlFor="save"
            className="col-span-1 md:col-span-2 flex items-center gap-3 text-sm"
          >
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary"
            />
            {t("formCheckboxLabel")}
          </label>

          <Button type="submit">{t("formSubmitButton")}</Button>
        </motion.form>

        {/* Dodano wyświetlanie komunikatu */}
        {statusMessage && <p className="text-center">{statusMessage}</p>}
      </WidthWrapper>
    </motion.section>
  );
};
