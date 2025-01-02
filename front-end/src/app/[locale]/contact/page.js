"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/app/components/Button";
import { PageHeader } from "@/app/components/PageHeader";
import { SocialMedia } from "@/app/components/SocialMedia";
import { WidthWrapper } from "@/app/components/WidthWrapper";
import Link from "next/link";
import {
  Compass,
  Envelope,
  EnvelopeOpen,
  MapPin,
  Octagon,
  Phone,
  PhoneCall,
} from "phosphor-react";

export default function Home() {
  // Używamy klucza "contactPage" z pliku tłumaczeń (np. pl.json)
  const t = useTranslations("contactPage");

  return (
    <main>
      {/* Sekcja: Nagłówek strony */}
      <PageHeader title={t("pageHeaderTitle")}>
        {/* Treść nagłówka z użyciem placeholdera emailLink */}
        {t.rich("pageHeaderDescription", {
          emailLink: (
            <Link href="mailto:damiangebala@gmail.com">
              damiangebala@gmail.com
            </Link>
          ),
        })}
        <SocialMedia />
      </PageHeader>

      {/* Sekcja: Dane kontaktowe */}
      <section className="py-20">
        <WidthWrapper>
          <h2 className="border-l-8 mb-5 pl-3 border-primary">
            {t("contactDetailsHeading")}
          </h2>
          <p>{t("contactDetailsDescription")}</p>
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
            <li className="p-4 border-l-[1px] border-primary flex items-center gap-4">
              <Phone className="text-primary" size={50} />
              <div>
                <h3>{t("phoneLabel")}</h3>
                <p>{t("phoneValue")}</p>
              </div>
            </li>
            <li className="p-4 border-l-[1px] border-primary flex items-center gap-4">
              <Compass className="text-primary" size={50} />
              <div>
                <h3>{t("emailLabel")}</h3>
                <p>{t("emailValue")}</p>
              </div>
            </li>
            <li className="p-4 border-l-[1px] border-primary flex items-center gap-4">
              <EnvelopeOpen className="text-primary" size={50} />
              <div>
                <h3>{t("locationLabel")}</h3>
                <p>{t("locationStreet")}</p>
                <p>{t("locationCity")}</p>
              </div>
            </li>
          </ul>
        </WidthWrapper>
      </section>

      {/* Sekcja: Mapa */}
      <section>
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
      </section>

      {/* Sekcja: Formularz kontaktowy */}
      <section className="py-20">
        <WidthWrapper>
          <h2 className="border-l-8 pl-3 mb-5 border-primary">
            {t("getInTouchHeading")}
          </h2>
          <p>{t("getInTouchDescription")}</p>

          <form className="p-5 my-10 border-2 border-muted/20 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-5">
            <label
              htmlFor="name"
              className="px-5 py-3 border-2 border-muted/20 rounded-xl flex gap-3 items-center"
            >
              <Octagon className="text-primary" size="24" />
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
              <Envelope className="text-primary" size="24" />
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
              <PhoneCall className="text-primary" size="24" />
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
              <MapPin className="text-primary" size="24" />
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
          </form>
        </WidthWrapper>
      </section>
    </main>
  );
}
