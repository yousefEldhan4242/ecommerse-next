"use client";
import SectionProducts from "./SectionProducts";
import SectionTitle from "./sectionTitle/SectionTitle";
import {  useRef, useState } from "react";

const FlashSales = () => {


  const scrollRef = useRef<HTMLElement>(null);
  const viewAllBtnRef = useRef<HTMLSpanElement>(null);

  const scrollLeft = (): void => {
    scrollRef.current?.scrollBy({ left: -275, behavior: "smooth" });
  };

  const scrollRight = (): void => {
    scrollRef.current?.scrollBy({ left: 275, behavior: "smooth" });
  };

  const [parentStyles, setParentStyles] = useState("flex overflow-auto gap-8");

  const handleViewAll = () => {
    if (viewAllBtnRef.current?.textContent == "View All Products") {
      viewAllBtnRef.current.textContent = "View Less Products";
    }

      // change the parent element styles if the "setParentStyles" function is present
    if (parentStyles == "flex overflow-auto gap-8") {
      setParentStyles(
        "grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8"
      );
    } else {
      setParentStyles("flex overflow-auto gap-8");
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
          showCounter={true}
          scrollLeft={scrollLeft}
          scrollRight={scrollRight}
        />

        <SectionProducts
          handleViewAll={handleViewAll}
          viewAllBtnRef={viewAllBtnRef}
          scrollRef={scrollRef}
          showOnlyProductsWithSale={true}
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
