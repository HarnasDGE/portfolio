import { PageHeader } from "@/app/components/PageHeader";
import { Button } from "@/app/components/Button";
import { Resume } from "@/app/components/Resume";
import { WidthWrapper } from "@/app/components/WidthWrapper";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("resumePage");
  return (
    <div className=" flex flex-col items-center">
      <PageHeader title="Online Resume">
        <Button>{t("button")}</Button>
      </PageHeader>
      <WidthWrapper>
        <Resume />
      </WidthWrapper>
    </div>
  );
}
