"use client";

import { useTranslations } from "next-intl";
import {
  Envelope,
  Globe,
  MapPin,
  PhoneIncoming,
  LinkedinLogo,
  GithubLogo,
  Play,
} from "phosphor-react";
import { ProfileImage } from "./ProfileImage";
import Link from "next/link";
import { motion } from "framer-motion";

export const Resume = () => {
  const t = useTranslations("resume");

  const githubLinkShort = "GitHub";
  const liveLinkShort = "Live";

  return (
    <motion.section
      className="mx-auto my-10 p-12 border-2 border-navbar dark:border-dnavbar shadow-md rounded-3xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* HEADER */}
      <header className="py-6 flex">
        <div className="flex-grow">
          <h2 className="font-bold text-primary">{t("headerName")}</h2>
          <p className="text-muted font-bold">{t("headerProfession")}</p>
        </div>
        <ul className="px-4 border-l-2 border-muted">
          <li className="flex items-center gap-3 mb-3">
            <PhoneIncoming size={20} /> {t("headerContactPhone")}:{" "}
            {t("headerContactPhoneValue")}
          </li>
          <li className="flex items-center gap-3 mb-3">
            <Envelope size={20} /> {t("headerContactEmail")}:{" "}
            {t("headerContactEmailValue")}
          </li>
          <li className="flex items-center gap-3 mb-3">
            <Globe size={20} /> {t("headerContactWebsite")}:{" "}
            {t("headerContactWebsiteValue")}
          </li>
          <li className="flex items-center gap-3 mb-3">
            <MapPin size={20} /> {t("headerContactLocation")}:{" "}
            {t("headerContactLocationValue")}
          </li>
          <li className="flex items-center gap-3 mb-3">
            <LinkedinLogo size={20} /> {t("headerContactLinkedin")}:{" "}
            {t("headerContactLinkedinValue")}
          </li>
          <li className="flex items-center gap-3 mb-3">
            <GithubLogo size={20} /> {t("headerContactGithub")}:{" "}
            {t("headerContactGithubValue")}
          </li>
        </ul>
      </header>

      {/* OBJECTIVE */}
      <section className="flex gap-4 py-10 border-y-2 border-navbar dark:border-dnavbar">
        <div className="px-10">
          <ProfileImage />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold">
            {t("sectionsObjectiveTitle")}
          </h2>
          <p>{t("sectionsObjectiveContent")}</p>
        </div>
      </section>

      <div className="grid grid-cols-[30%_70%] py-10">
        <div className="px-6">
          {/* SKILLS */}
          <section className="mb-6 py-3">
            <h2 className="text-3xl font-semibold pl-3 border-l-8 border-primary">
              {t("sectionsSkillsTitle")}
            </h2>

            <h3 className="text-xl pt-5">
              {t("sectionsSkillsTechnicalTitle")}
            </h3>
            <ul className="list-disc pl-5 ml-5">
              <li>{t("sectionsSkillsTechnicalList0")}</li>
              <li>{t("sectionsSkillsTechnicalList1")}</li>
              <li>{t("sectionsSkillsTechnicalList2")}</li>
              <li>{t("sectionsSkillsTechnicalList3")}</li>
              <li>{t("sectionsSkillsTechnicalList4")}</li>
              <li>{t("sectionsSkillsTechnicalList5")}</li>
            </ul>

            <h3 className="text-xl pt-5">
              {t("sectionsSkillsProfessionalTitle")}
            </h3>
            <ul className="list-disc pl-5 ml-5">
              <li>{t("sectionsSkillsProfessionalList0")}</li>
              <li>{t("sectionsSkillsProfessionalList1")}</li>
              <li>{t("sectionsSkillsProfessionalList2")}</li>
              <li>{t("sectionsSkillsProfessionalList3")}</li>
              <li>{t("sectionsSkillsProfessionalList4")}</li>
            </ul>
          </section>

          {/* LANGUAGES */}
          <section className="mb-6">
            <h2 className="text-3xl font-semibold pl-3 border-l-8 border-primary">
              {t("sectionsLanguagesTitle")}
            </h2>
            <ul className="list-disc p-5 ml-5">
              <li>
                {t("sectionsLanguagesList0Name")} -{" "}
                {t("sectionsLanguagesList0Level")}
              </li>
              <li>
                {t("sectionsLanguagesList1Name")} -{" "}
                {t("sectionsLanguagesList1Level")}
              </li>
              <li>
                {t("sectionsLanguagesList2Name")} -{" "}
                {t("sectionsLanguagesList2Level")}
              </li>
            </ul>
          </section>

          {/* INTERESTS */}
          <section className="mb-6">
            <h2 className="text-3xl font-semibold pl-3 border-l-8 border-primary">
              {t("sectionsInterestsTitle")}
            </h2>
            <ul className="list-disc p-5 ml-5">
              <li>{t("sectionsInterestsList0")}</li>
              <li>{t("sectionsInterestsList1")}</li>
              <li>{t("sectionsInterestsList2")}</li>
              <li>{t("sectionsInterestsList3")}</li>
            </ul>
          </section>
        </div>

        <div className="border-l-2 border-navbar dark:border-dnavbar">
          {/* PROJECTS */}
          <section className="p-5">
            <h2 className="text-3xl font-semibold pl-3 border-l-8 border-primary">
              {t("sectionsProjectsTitle")}
            </h2>

            {/* Projekt 1 */}
            <ul className="py-5">
              <li className="mb-5 pb-5 border-b-2 border-navbar dark:border-dnavbar">
                <div className="flex">
                  <div className="flex-grow">
                    <h3 className="font-weight text-2xl">
                      {t("sectionsProjectsList0Name")}
                    </h3>
                    <p className="text-muted">
                      <strong>Technologies:</strong>{" "}
                      {t("sectionsProjectsList0Technologies")}
                    </p>
                  </div>
                  <div>
                    <p className="flex gap-2 items-center">
                      <GithubLogo weight="bold" />
                      <Link href={t("sectionsProjectsList0Github")}>
                        {githubLinkShort}
                      </Link>
                    </p>
                    <p className="flex gap-2 items-center">
                      <Play weight="bold" />
                      <Link href={t("sectionsProjectsList0LiveDemo")}>
                        {liveLinkShort}
                      </Link>
                    </p>
                  </div>
                </div>
                <p className="mt-2">
                  {t("sectionsProjectsList0Description")}
                  <ul className="list-disc pl-14">
                    <li>{t("sectionsProjectsList0Details0")}</li>
                    <li>{t("sectionsProjectsList0Details1")}</li>
                    <li>{t("sectionsProjectsList0Details2")}</li>
                    <li>{t("sectionsProjectsList0Details3")}</li>
                  </ul>
                </p>
              </li>

              {/* Projekt 2 */}
              <li className="mb-5 pb-5 border-b-2 border-navbar dark:border-dnavbar">
                <div className="flex">
                  <div className="flex-grow">
                    <h3 className="font-weight text-2xl">
                      {t("sectionsProjectsList1Name")}
                    </h3>
                    <p className="text-muted">
                      <strong>Technologies:</strong>{" "}
                      {t("sectionsProjectsList1Technologies")}
                    </p>
                  </div>
                  <div>
                    <p className="flex gap-2 items-center">
                      <GithubLogo weight="bold" />
                      <Link href={t("sectionsProjectsList1Github")}>
                        {githubLinkShort}
                      </Link>
                    </p>
                    <p className="flex gap-2 items-center">
                      <Play weight="bold" />
                      <Link href={t("sectionsProjectsList1LiveDemo")}>
                        {liveLinkShort}
                      </Link>
                    </p>
                  </div>
                </div>
                <p className="mt-2">
                  {t("sectionsProjectsList1Description")}
                  <ul className="list-disc pl-14">
                    <li>{t("sectionsProjectsList1Details0")}</li>
                    <li>{t("sectionsProjectsList1Details1")}</li>
                    <li>{t("sectionsProjectsList1Details2")}</li>
                  </ul>
                </p>
              </li>

              {/* Projekt 3 */}
              <li className="mb-5 pb-5 border-b-2 border-navbar dark:border-dnavbar">
                <div className="flex">
                  <div className="flex-grow">
                    <h3 className="font-weight text-2xl">
                      {t("sectionsProjectsList2Name")}
                    </h3>
                    <p className="text-muted">
                      <strong>Technologies:</strong>{" "}
                      {t("sectionsProjectsList2Technologies")}
                    </p>
                  </div>
                  <div>
                    <p className="flex gap-2 items-center">
                      <Play weight="bold" />
                      <Link href={t("sectionsProjectsList2LiveDemo")}>
                        {liveLinkShort}
                      </Link>
                    </p>
                  </div>
                </div>
                <p className="mt-2">
                  {t("sectionsProjectsList2Description")}
                  <ul className="list-disc pl-14">
                    <li>{t("sectionsProjectsList2Details0")}</li>
                    <li>{t("sectionsProjectsList2Details1")}</li>
                  </ul>
                </p>
              </li>
            </ul>
          </section>

          {/* EDUCATION */}
          <section className="p-5">
            <h2 className="text-3xl font-semibold pl-3 border-l-8 border-primary">
              {t("sectionsEducationTitle")}
            </h2>
            <ul className="py-5">
              {/* Edu 0 */}
              <li className="mb-5 pb-5 border-b-2 border-navbar dark:border-dnavbar">
                <h3 className="font-weight text-2xl">
                  {t("sectionsEducationList0Name")}
                </h3>
                <p className="text-muted">
                  {t("sectionsEducationList0Institution")},{" "}
                  {t("sectionsEducationList0Year")}
                </p>
                <p className="mt-2">
                  {t("sectionsEducationList0Description")}
                  <ul className="list-disc pl-14">
                    <li>{t("sectionsEducationList0Details0")}</li>
                    <li>{t("sectionsEducationList0Details1")}</li>
                    <li>{t("sectionsEducationList0Details2")}</li>
                  </ul>
                </p>
              </li>

              {/* Edu 1 */}
              <li className="mb-5 pb-5 border-b-2 border-navbar dark:border-dnavbar">
                <h3 className="font-weight text-2xl">
                  {t("sectionsEducationList1Name")}
                </h3>
                <p className="text-muted">
                  {t("sectionsEducationList1Institution")},{" "}
                  {t("sectionsEducationList1Year")}
                </p>
                <p className="mt-2">
                  {t("sectionsEducationList1Description")}
                  <ul className="list-disc pl-14">
                    <li>{t("sectionsEducationList1Details0")}</li>
                    <li>{t("sectionsEducationList1Details1")}</li>
                    <li>{t("sectionsEducationList1Details2")}</li>
                  </ul>
                </p>
              </li>

              {/* Edu 2 */}
              <li className="mb-5 pb-5 border-b-2 border-navbar dark:border-dnavbar">
                <h3 className="font-weight text-2xl">
                  {t("sectionsEducationList2Name")}
                </h3>
                <p className="text-muted">
                  {t("sectionsEducationList2Institution")},{" "}
                  {t("sectionsEducationList2Year")}
                </p>
                <p className="mt-2">
                  {t("sectionsEducationList2Description")}
                  <ul className="list-disc pl-14">
                    <li>{t("sectionsEducationList2Details0")}</li>
                    <li>{t("sectionsEducationList2Details1")}</li>
                    <li>{t("sectionsEducationList2Details2")}</li>
                  </ul>
                </p>
              </li>

              {/* Edu 3 */}
              <li className="mb-5 pb-5 border-b-2 border-navbar dark:border-dnavbar">
                <h3 className="font-weight text-2xl">
                  {t("sectionsEducationList3Name")}
                </h3>
                <p className="text-muted">
                  {t("sectionsEducationList3Institution")},{" "}
                  {t("sectionsEducationList3Year")}
                </p>
                <p className="mt-2">
                  {t("sectionsEducationList3Description")}
                  <ul className="list-disc pl-14">
                    <li>{t("sectionsEducationList3Details0")}</li>
                    <li>{t("sectionsEducationList3Details1")}</li>
                    <li>{t("sectionsEducationList3Details2")}</li>
                  </ul>
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </motion.section>
  );
};
