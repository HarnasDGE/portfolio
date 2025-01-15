"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { pages } from "../data/pages";
import { useTranslations } from "next-intl";
import { projects } from "../data/projects";

export const Menu = ({ className }) => {
  const pathname = usePathname();
  const { locale } = useParams();

  const t = useTranslations("menuLeft");

  return (
    <ul className={`py-5 ${className}`}>
      {pages.map((page) => {
        const href = `/${locale}${page.src}`;
        const isActive =
          pathname === href || (page.src === "/" && pathname === `/${locale}`);

        return (
          <li key={page.key}>
            <Link
              href={href}
              className={`text-black dark:text-light flex justify-between items-center h-full block cursor-pointer py-2 px-3 mb-2 rounded-xl transition-all ${
                isActive ? "bg-primary text-light" : ""
              }`}
            >
              <div className="flex gap-3 items-center">
                <page.icon
                  className={`${isActive ? "text-light" : ""}`}
                  size={20}
                  weight="bold"
                />
                <p
                  className={`${isActive ? "text-light" : ""} hidden sm:block`}
                >
                  {t(`${page.key}`)}
                </p>
              </div>
              {page.key === "portfolio" ? (
                <div className="text-light py-[2px] ml-3 px-2 bg-secondary rounded-lg hidden sm:block">
                  {projects.length}
                </div>
              ) : (
                ""
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
