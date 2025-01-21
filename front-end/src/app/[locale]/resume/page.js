import { PageHeader } from "@/app/components/PageHeader";
import { Button } from "@/app/components/Button";
import { Resume } from "@/app/components/Resume";
import { WidthWrapper } from "@/app/components/WidthWrapper";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Home({ params }) {
  const { locale } = await params;
  const t = await getTranslations("resumePage");
  return (
    <div className=" flex flex-col items-center">
      <PageHeader title={t("title")}>
        <Button href={`/pdf/resume_${locale}.pdf`} download>
          {t("button")}
        </Button>
        {locale === "pl" && (
          <Link
            href="/pdf/resume_en.pdf"
            download
            target="_blank"
            className="text-sm text-dark dark:text-light hover:text-primary"
          >
            Download English PDF version
          </Link>
        )}
        {locale === "en" && (
          <Link
            href="/pdf/resume_pl.pdf"
            download
            target="_blank"
            className="text-sm text-dark dark:text-light hover:text-primary"
          >
            Pobierz CV w języku polskim
          </Link>
        )}
      </PageHeader>
      <WidthWrapper>
        <Resume />
      </WidthWrapper>
    </div>
  );
}
