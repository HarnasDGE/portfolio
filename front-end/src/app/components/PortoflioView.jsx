"use client";
import Image from "next/image";
import { ArrowArcRight } from "phosphor-react";
import { WidthWrapper } from "./WidthWrapper";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { useParams } from "next/navigation";

export const PortfolioView = ({ project }) => {
  const [content, setContent] = useState("");
  const { locale } = useParams();

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const markdownModule = await import(
          `../data/descriptionsProjects/${locale}/${project.id}.md`
        );
        setContent(markdownModule.default); // Treść Markdown
      } catch (error) {
        console.error(
          `Error loading description for project ${project.id}:`,
          error
        );
      }
    };

    fetchDescription();
  }, [project.id]);

  // Mapowanie niestandardowych komponentów dla Markdown
  const components = {
    img: ({ src, alt }) => (
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        className="rounded-lg shadow-md"
      />
    ),

    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-dark dark:text-light">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-dark dark:text-light">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-dark dark:text-light">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-dark dark:text-light/70 leading-7">{children}</p>
    ),
    a: ({ href, children }) => (
      <Link href={href} className="text-primary underline hover:text-muted">
        {children}
      </Link>
    ),
    strong: ({ children }) => (
      <strong className="text-dark dark:text-light">{children}</strong>
    ),
    li: ({ children }) => (
      <li className="text-dark dark:text-light/70">{children}</li>
    ),
  };

  return (
    <WidthWrapper className="flex flex-col xl:flex-row gap-5 w-full">
      <motion.ul
        className="px-10 border-2 border-navbar dark:border-dnavbar h-fit p-3 rounded shadow-md xl:sticky xl:top-3 "
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" },
          },
        }}
      >
        <li className="mb-2">
          <p className="text-muted -mb-2">Client: </p>
          <p>{project.client || "My project"}</p>
        </li>
        <li className="mb-2">
          <p className="text-muted -mb-2">Services: </p>
          <p>{project.services || "Web development"}</p>
        </li>
        <li className="mb-2">
          <p className="text-muted -mb-2">Technologies: </p>
          <p>{project.technologies?.join(", ")}</p>
        </li>
        <li className="mb-2">
          <p className="text-muted -mb-2">Website: </p>
          <p>
            <Button href={project.liveUrl} color="link">
              Live preview <ArrowArcRight size={16} />
            </Button>
          </p>
        </li>
      </motion.ul>
      <motion.div
        className="w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
      >
        <div className="overflow-hidden rounded shadow-md">
          <motion.div
            className="relative w-full h-[500px] overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover object-top"
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-5 prose prose-custom dark:prose-dark"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <ReactMarkdown components={components}>{content}</ReactMarkdown>
        </motion.div>
      </motion.div>
    </WidthWrapper>
  );
};
