"use client";

import { ArrowUpRight } from "phosphor-react";
import Image from "next/image";
import { Button } from "./Button";
import { useParams } from "next/navigation";

export const PortfolioCard = ({ project }) => {
  const { locale } = useParams();
  return (
    <div className="w-full">
      <div className="relative h-[350px] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="absolute w-full h-full p-2 shadow-lg rounded-lg hover:border-2 hover:border-primary"
        />
      </div>
      <div className="flex items-center pt-5">
        <div className="flex-grow">
          <ul className="flex gap-3 items-center text-sm">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="border-2 border-gray dark:border-light px-3 py-[2px] rounded-full"
              >
                {technology}
              </li>
            ))}
          </ul>
          <h4 className="text-xl font-bold mt-4">
            {locale === "en" ? project.enTitle : project.title}
          </h4>
        </div>
        <Button color="gray" isIcon>
          <ArrowUpRight size={32} />
        </Button>
      </div>
    </div>
  );
};
