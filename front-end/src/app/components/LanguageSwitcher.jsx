"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { GlobeHemisphereWest, GlobeHemisphereEast } from "phosphor-react";
import { Button } from "./Button";

export const LanguageSwitcher = () => {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1]; // Pobranie bieżącego języka z URL
  const switchLanguage = currentLocale === "en" ? "pl" : "en";

  const newPathname = pathname.replace(
    `/${currentLocale}`,
    `/${switchLanguage}`
  );

  return (
    <div className="flex justify-center">
      <Link href={newPathname}>
        <Button isIcon>
          {currentLocale === "en" ? (
            <>
              <GlobeHemisphereWest size={24} weight="bold" />
            </>
          ) : (
            <>
              <GlobeHemisphereEast size={24} weight="bold" />
            </>
          )}
        </Button>
      </Link>
    </div>
  );
};
