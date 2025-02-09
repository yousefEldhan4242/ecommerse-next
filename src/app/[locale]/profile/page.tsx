import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../../lib/nextAuth";
import Link from "next/link";
import initTranslations from "@/app/i18n";
import LanguageChanger from "@/app/_components/LanguageChanger";

interface localInterface {
  params: {
    locale: string;
  };
}

const page = async ({ params: { locale } }: localInterface) => {
  const session = await getServerSession(authOptions);

  const { t } = await initTranslations(locale, ["profile", "common"]);

  return (
    <div>
      <h1>{t("common:profile")}</h1>
      <Link href={"/"}>{t("go_home")}</Link>
      {session && (
        <div>
          <h2>{session?.user?.name}</h2>
          <h3>{t("email", { email: session.user?.email })}</h3>
        </div>
      )}
      <LanguageChanger/>
    </div>
  );
};

export default page;
