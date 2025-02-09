"use client"
import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../../../../i18nConfig";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setData } from "@/app/rtk/slices/data-slice";
import { setProductsLoading } from "@/app/rtk/slices/products-loading-slice";

const NavBarSubHeader = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [isLoading, setIsLoading] = useState(false); // Loading state
    const { t } = useTranslation();
    const dispatch = useDispatch()

  const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setProductsLoading(false))
    // Set loading state to true
    setIsLoading(true);
    const newLocale = e.target.value;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }
    router.refresh()

    let amazon_domain
    if (newLocale?.includes("it")){
      amazon_domain = "amazon.it";
    }else if (newLocale?.includes("fr")){
      amazon_domain = "amazon.fr";
  
    }else{
      amazon_domain = "amazon.com";
    }

    const api = `${process.env.NEXT_PUBLIC_API_BASE_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&type=search&amazon_domain=${amazon_domain}&search_term=movies`

    const res = await axios.get(api)
    dispatch(setData(res.data.search_results));
    console.log(res.data.search_results)
    dispatch(setProductsLoading(true))

    // Set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    setIsLoading(false)
  };

  return (
    <div className="add bg-black text-[#fafafa] py-5">
      <div className="container flex justify-between items-center gap-3">
        <div></div>
        <div>
          <span className="text-[14px] text-balance font-extralight">
          {t("header")}
          </span>{" "}
          <ins className="cursor-pointer font-bold ml-1 text-white">
            ShopNow
          </ins>
        </div>
        <div>
          {/* Show loading spinner if isLoading is true */}
          {isLoading ? (
            <div className="spinner">Loading...</div> // Replace with your spinner component
          ) : (
            <select
              onChange={(e)=>{
                handleChange(e)
              }}
              value={currentLocale}
              className="bg-black"
              disabled={isLoading} // Disable the dropdown while loading
            >
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="it">Italian</option>
            </select>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBarSubHeader;