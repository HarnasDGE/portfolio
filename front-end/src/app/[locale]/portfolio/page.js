import { PageHeader } from "@/app/components/PageHeader";
import { PortfolioTabs } from "@/app/components/PortfolioTabs";
import { PortfolioGrid } from "@/app/components/PortfolioGrid";
import { projects } from "@/app/data/projects";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const categories = ["all", "front-end", "games", "full-stack", "other"]; // Dodaj kategorie zgodnie z typami projektów
  const t = await getTranslations("portfolioPage");
  return (
    <main>
      <PageHeader title={t("title")} buttonType="hire">
        {t("description")}
      </PageHeader>
      <PortfolioTabs categories={categories} />
      <PortfolioGrid projects={projects} />
    </main>
  );
}
