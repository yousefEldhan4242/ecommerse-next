"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
import i18nConfig from "../../../i18nConfig";
import Product from "@/interfaces";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const pathname = usePathname();
  const [products, setProducts] = useState([]);

  const fetchProducts = async (locale: string) => {
    const amazonDomain = {
      it: "amazon.it",
      fr: "amazon.fr",
    }[locale] || "amazon.com";

    const api = `${process.env.NEXT_PUBLIC_API_BASE_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&type=search&amazon_domain=${amazonDomain}&search_term=food`;

    try {
      const res = await axios.get(api);
      setProducts(res.data.search_results);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // Set language cookie securely
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale}; expires=${date.toUTCString()}; path=/; SameSite=Lax; Secure`;

    // Update path to reflect new locale
    const pathWithoutLocale = pathname.replace(/^\/(fr|it)/, "");
    const newPath =
      newLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault
        ? `/${pathWithoutLocale}`
        : `/${newLocale}${pathWithoutLocale}`;

    // Redirect and refresh
    router.push(newPath.replace("//", "/"));
    router.refresh();

    // Fetch new products based on selected language
    fetchProducts(newLocale);
  };

  // Fetch products when pathname (language) changes
  useEffect(() => {
    const newLocale = pathname.split("/")[1]; // Extract new locale from pathname
    fetchProducts(newLocale);
  }, [pathname]);

  return (
    <div>
      <select onChange={handleChange} value={currentLocale}>
        {i18nConfig.locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale.toUpperCase()}
          </option>
        ))}
      </select>

      {/* Display products */}
      <div>
        <h2>Products</h2>
        <ul>
          {products.map((product: Product) => (
            <li key={product.asin}>{product.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
