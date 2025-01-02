"use client";
import { useSearchParams, useRouter, useParams } from "next/navigation";
import { projects } from "../data/projects";
import Link from "next/link";

export const PortfolioTabs = () => {
  const { locale } = useParams();
  const searchParams = useSearchParams();
  const activeType = searchParams.get("type");
  const categories = [
    "all",
    ...new Set(projects.map((project) => project.type)),
  ];

  return (
    <div className="flex justify-center gap-4 my-4">
      {categories.map((category) => (
        <Link
          key={category}
          href={{
            pathname: `/${locale}/portfolio`,
            query: category === "all" ? {} : { type: category },
          }}
          scroll={false}
          className={`px-4 py-2 rounded font-bold ${
            activeType === category || (!activeType && category === "all")
              ? "text-primary"
              : "text-muted"
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Link>
      ))}
    </div>
  );
};
