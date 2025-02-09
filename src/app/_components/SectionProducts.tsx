"use client";
import ProductCard from "./ProductCard";
import Product from "@/interfaces";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "../rtk/store";
import Loading from "../[locale]/loading";

interface SectionProdcutsInterface {
  // productsList: Product[];
  showBtn?: boolean;
  showDiscount?: boolean;
  showPrevPrice?: boolean;
  showHr?: boolean;
  isInProductsPage?: boolean;
  parentStyles: string;
  handleViewAll?: () => void; //+
  viewAllBtnRef?: React.RefObject<HTMLSpanElement>;
  scrollRef?: React.RefObject<HTMLElement>;
  product?:Product
  cardWidth: boolean;
  showOnlyProductsWithSale?: boolean;
  newBtn?: boolean;
  showBtns?: boolean;
  isInWhishList?: boolean;
}

const SectionProducts = ({
  cardWidth,
  showBtn,
  parentStyles,
  showDiscount,
  showPrevPrice,
  showBtns,
  showHr = true,
  isInWhishList,
  isInProductsPage,
  scrollRef,
  handleViewAll,
  viewAllBtnRef,
}: SectionProdcutsInterface) => {
  const data = useSelector((state: State) => state.data);
  const isProductsLoading = useSelector((state: State) => state.productsLoading)


  return (
    <>
      <section className={`${parentStyles}`} ref={scrollRef}>
        {isProductsLoading ?
          data.map((item:Product, index:number) => {
            return (
              <ProductCard
                isInProductsPage={isInProductsPage}
                cardWidth={cardWidth}
                key={index}
                product={item}
                showDiscount={showDiscount}
                showPrevPrice={showPrevPrice}
                showBtns={showBtns}
                isInWhishList={isInWhishList}
              />
            );
          }): <Loading/>}
      </section>
      {showBtn && (
        <div className="flex items-center justify-center mt-10">
          <span
            ref={viewAllBtnRef}
            className="btn px-10 py-3 bg-main-color hover:bg-main-hover-bg duration-300 text-white rounded cursor-pointer"
            onClick={handleViewAll}
          >
            View All Products
          </span>
        </div>
      )}

      {showHr && <hr className="border-border-color mt-[60px]" />}
    </>
  );
};

export default SectionProducts;
