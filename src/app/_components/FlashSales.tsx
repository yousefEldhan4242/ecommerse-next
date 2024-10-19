"use client";
import SectionProducts from "./SectionProducts";
import SectionTitle from "./SectionTitle";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import { State } from "../rtk/store";

const FlashSales = () => {
  const productsList = useSelector((state: State) => state.products);
  const products = [...productsList];

  // shuffle the products
  for (let i = products.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [products[i], products[j]] = [products[j], products[i]];
  }

  const [finalProducts, setFinalProducts] = useState(
    products.slice(0, products.length - 1)
  );

  const produtsRef = useRef(products);

  const scrollRef = useRef<Window>(null);
  const viewAllBtnRef = useRef<HTMLSpanElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -275, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 275, behavior: "smooth" });
  };

  const [parentStyles, setParentStyles] = useState("flex overflow-auto gap-8");

  const handleViewAll = () => {
    if (viewAllBtnRef.current?.textContent == "View All Products") {
      viewAllBtnRef.current.textContent = "View Less Products";
    }
    //  else {
    //   viewAllBtnRef.current.textContent = "View All Products";
    // }

    //   // change the parent element styles if the "setParentStyles" function is present
    if (parentStyles == "flex overflow-auto gap-8") {
      setParentStyles(
        "grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8"
      );
    } else {
      setParentStyles("flex overflow-auto gap-8");
    }

    if (finalProducts.length == produtsRef.current.length - 1) {
      setFinalProducts(produtsRef.current);
    } else {
      setFinalProducts(
        produtsRef.current.slice(0, produtsRef.current.length - 1)
      );
    }
  };

  return (
    <>
      <section className="container flex flex-col gap-8">
        <SectionTitle
          sectionName={"Today's"}
          sectionTitle="Flash Sales"
          showArrows={true}
          showBtn={false}
          isInFlashSales={true}
          showCounter={true}
          scrollLeft={scrollLeft}
          scrollRight={scrollRight}
        />

        <SectionProducts
          handleViewAll={handleViewAll}
          viewAllBtnRef={viewAllBtnRef}
          scrollRef={scrollRef}
          showOnlyProductsWithSale={true}
          productsList={finalProducts}
          cardWidth={true}
          showBtn={true}
          showPrevPrice={true}
          parentStyles={parentStyles}
          showDiscount={true}
        />
      </section>
    </>
  );
};

export default FlashSales;
