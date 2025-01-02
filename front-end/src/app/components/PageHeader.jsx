"use client";
import { PaperPlaneTilt } from "phosphor-react";
import { Button } from "./Button";
import { WidthWrapper } from "./WidthWrapper";

export const PageHeader = ({ title, buttonType = false, children }) => {
  const buttons = {
    hire: (
      <Button>
        <PaperPlaneTilt size={20} weight="bold" />
        Hire me
      </Button>
    ),
  };
  return (
    <section className="w-full  py-20 border-b-2 border-navbar dark:border-dnavbar">
      <WidthWrapper className="flex flex-col items-center justify-center text-center mx-auto">
        <h2>{title}</h2>
        <div className="my-4">{children}</div>
        {buttonType ? buttons[buttonType] : ""}
      </WidthWrapper>
    </section>
  );
};
