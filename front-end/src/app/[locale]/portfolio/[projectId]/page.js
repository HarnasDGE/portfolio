import { LetsWorkTogether } from "@/app/components/LetsWorkTogether";
import { PageHeader } from "@/app/components/PageHeader";
import { PortfolioView } from "@/app/components/PortoflioView";
import { projects } from "@/app/data/projects";

export default async function Home({ params }) {
  const { projectId, locale } = await params;
  const project = projects.find((project) => project.id === Number(projectId));

  return (
    <main>
      <PageHeader
        title={locale === "pl" ? project.title : project.enTitle}
        buttonType="hire"
      >
        {locale === "pl" ? project.description : project.enDescription}
      </PageHeader>
      <PortfolioView project={project} />
      <LetsWorkTogether />
    </main>
  );
}
