import { WidthWrapper } from "./WidthWrapper";

export const Footer = () => {
  return (
    <footer className="border-t-2 border-navbar dark:border-dnavbar">
      <WidthWrapper className="flex py-4 items-center justify-between px-10 font-bold">
        <div>Copyright © 2024 Portfolify. All Rights Reserved.</div>
        <div>
          <span>Designed by UIAXIS </span> | <span>Coded by GDamian</span>
        </div>
      </WidthWrapper>
    </footer>
  );
};
