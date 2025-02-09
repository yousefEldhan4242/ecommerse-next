import initTranslations from "../i18n";
import TranslationProvider from "../_components/TranslationProvider";
import Sections from "../_components/Navigator";
import FlashSales from "../_components/FlashSales";
import Navbar from "../_components/NavBar/NavBar";
import ThisMonth from "../_components/ThisMonth";
import Categories from "../_components/Categories";
import OurProducts from "../_components/OurProducts";
import Featured from "../_components/Featured";
import MyImage from "../_components/MyImage";
import Services from "../_components/Services";
import Footer from "../_components/Footer";
import ScrollIcon from "../_components/ScrollIcon";


interface localInterface {
  params: {
    locale: string;
  };
}
export default async function Home({ params: { locale } }: localInterface) {
  const i18nNamespaces = ["home", "common"];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <ScrollIcon />
      <Navbar />
      <Sections />
      <FlashSales />
      <Categories />
      <ThisMonth />
      <MyImage />
      <OurProducts />
      <Featured />
      <Services />
      <Footer />
    </TranslationProvider>
  );
}
