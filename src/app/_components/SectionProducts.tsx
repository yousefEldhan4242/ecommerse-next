"use client";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";
import { ProductCardInterface } from "@/interfaces";
import Product from "@/interfaces";
import React from "react";

interface SectionProdcutsInterface extends ProductCardInterface {
  productsList: Product[];
  showBtn?: boolean;
  showDiscount?: boolean;
  showPrevPrice?: boolean;
  showHr?: boolean;
  isInProductsPage?: boolean;
  parentStyles: string;
  handleViewAll?: () => void; //+
  viewAllBtnRef?: React.RefObject<HTMLSpanElement>;
  scrollRef?: React.RefObject<HTMLDivElement>;
}

const SectionProducts = ({
  productsList,
  cardWidth,
  showBtn,
  parentStyles,
  showDiscount,
  showPrevPrice,
  showBtns,
  showHr = true,
  isInWhishList,
  showOnlyProductsWithSale,
  isInProductsPage,
  scrollRef,
  handleViewAll,
  viewAllBtnRef,
}: SectionProdcutsInterface) => {
  return (
    <>
      <section className={`${parentStyles}`} ref={scrollRef}>
        {productsList &&
          productsList.map((item, index) => {
            return (
              <ProductCard
                isInProductsPage={isInProductsPage}
                showOnlyProductsWithSale={showOnlyProductsWithSale}
                cardWidth={cardWidth}
                key={index}
                product={item}
                showDiscount={showDiscount}
                showPrevPrice={showPrevPrice}
                showBtns={showBtns}
                isInWhishList={isInWhishList}
              />
            );
          })}
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
SectionProducts.propTypes = {
  productsList: PropTypes.array,
  cardWidth: PropTypes.bool,
  showBtn: PropTypes.bool,
  parentStyles: PropTypes.string,
  showDiscount: PropTypes.bool,
  showPrevPrice: PropTypes.bool,
  showBtns: PropTypes.bool,
  showHr: PropTypes.bool,
  isInWhishList: PropTypes.bool,
  showOnlyProductsWithSale: PropTypes.bool,
  isInProductsPage: PropTypes.bool,
  scrollRef: PropTypes.object,
  handleViewAll: PropTypes.func,
  viewAllBtnRef: PropTypes.object,
};

export default SectionProducts;
