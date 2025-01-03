import { getTranslations } from "next-intl/server";
import { Button } from "./Button";

export const LetsWorkTogether = async () => {
  const t = await getTranslations("workTogether");

  return (
    <div className="relative w-full p-20 xl:flex xl:gap-10 items-center border-b-2 border-navbar dark:border-dnavbar">
      <div className=" text-light">
        <h2>{t("heading")}</h2>
        <p>{t("description")}</p>
      </div>
      <div className="pt-10">
        <Button>{t("button")}</Button>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-fixed -z-10 "
        style={{ backgroundImage: `url(/images/bg.png)` }}
      />
    </div>
  );
};
