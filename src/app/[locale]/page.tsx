import Link from "next/link";
import initTranslations from "../i18n";
import TranslationProvider from "../_components/TranslationProvider";
import TestClientCompoent from "../_components/TestClientCompoent";
import LanguageChanger from "../_components/LanguageChanger";

interface localInterface {
  params: {
    locale: string;
  };
}
export default async function Home({ params: { locale } }: localInterface) {
  const i18nNamespaces = ["home", "common"];
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div>
        <h1>{t("header")}</h1>
        <p>
          <Link href={"/profile"}>{t("common:profile")}</Link>
        </p>
        <TestClientCompoent />
        <LanguageChanger />
      </div>
    </TranslationProvider>
  );
}
