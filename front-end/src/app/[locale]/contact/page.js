"use client";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/app/components/PageHeader";
import { SocialMedia } from "@/app/components/SocialMedia";
import { WidthWrapper } from "@/app/components/WidthWrapper";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/app/animations/animations";
import { ContactForm } from "@/app/components/ContactForm";
import { ContactData } from "@/app/components/ContactData";
import { Map } from "@/app/components/Map";

export default function Home() {
  const t = useTranslations("contactPage");

  return (
    <main>
      {/* Sekcja: Nagłówek strony */}
      <motion.div
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <PageHeader title={t("pageHeaderTitle")}>
          {t.rich("pageHeaderDescription", {
            emailLink: (
              <Link href="mailto:dpgebala@gmail.com">dpgebala@gmail.com</Link>
            ),
          })}
          <SocialMedia />
        </PageHeader>
      </motion.div>

      <ContactData />

      <Map />
      <ContactForm />
    </main>
  );
}
