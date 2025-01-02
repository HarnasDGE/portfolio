"use client";
import { useSearchParams } from "next/navigation";
import { PortfolioCard } from "./PortfolioCard";
import { WidthWrapper } from "./WidthWrapper";

export const PortfolioGrid = ({ projects }) => {
  const searchParams = useSearchParams();
  const activeType = searchParams.get("type");

  const filteredProjects =
    activeType && activeType !== "all"
      ? projects.filter((project) => project.type === activeType)
      : projects;

  return (
    <WidthWrapper>
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-10 p-10">
        {filteredProjects.map((project) => (
          <li key={project.id}>
            <PortfolioCard project={project} />
          </li>
        ))}
      </ul>
    </WidthWrapper>
  );
};
