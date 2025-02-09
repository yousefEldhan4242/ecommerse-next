"use client";
import SectionProducts from "./SectionProducts";
import SectionTitle from "./sectionTitle/SectionTitle";
import { useRef, useState } from "react";
import Product from "@/interfaces";
import { useSelector } from "react-redux";
import { State } from "../rtk/store";

const shuffle = (arr: Product[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

const OurProducts = () => {
  const products = useSelector((state:State)=> state.data)
  const productsList = [...products]



  shuffle(productsList);


  // preserve the order of the products to not change with re-rendering
  const shuffledProducts = useRef(productsList);

  const finalNormalProducts = useRef(
    shuffledProducts.current.slice(
      0,
      Math.floor(shuffledProducts.current.length / 2.5)
    )
  );

  const finalColoredProducts = useRef(
    shuffledProducts.current.slice(
      Math.floor(shuffledProducts.current.length / 2.5),
      Math.floor(shuffledProducts.current.length / 2.5) + 8
    )
  );

  const scrollFirstProductsRef = useRef<HTMLDivElement>(null);
  const scrollSecondProdcutsRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollFirstProductsRef.current?.scrollBy({
      left: -275,
      behavior: "smooth",
    });
    scrollSecondProdcutsRef.current?.scrollBy({
      left: -275,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollFirstProductsRef.current?.scrollBy({ left: 275, behavior: "smooth" });
    scrollSecondProdcutsRef.current?.scrollBy({
      left: 275,
      behavior: "smooth",
    });
  };

  const [parentStyles, setParentStyles] = useState("flex overflow-auto gap-8");

  const handleViewAll = () => {
    // change the content of btn passed on clicking
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

    // check if product is in slider
    if (
      finalNormalProducts.current.length ==
      Math.floor(shuffledProducts.current.length / 2.5)
    ) {
      finalNormalProducts.current = shuffledProducts.current.slice(
        0,
        Math.floor(shuffledProducts.current.length / 2)
      );

      // start the products from where the "finalNormalProducts.current" ends
      finalColoredProducts.current = shuffledProducts.current.slice(
        Math.floor(shuffledProducts.current.length / 2)
      );
    } else {
      finalNormalProducts.current = shuffledProducts.current.slice(
        0,
        Math.floor(shuffledProducts.current.length / 2.5)
      );

      // start the products from where the "finalNormalProducts.current" ends
      finalColoredProducts.current = shuffledProducts.current.slice(
        Math.floor(shuffledProducts.current.length / 2.5),

        // add products that equal to the products in the first row
        Math.floor(shuffledProducts.current.length / 2.5) +
          Math.floor(shuffledProducts.current.length / 2.5)
      );
    }
  };

  const viewAllBtnRef = useRef<HTMLSpanElement>(null);

  return (
    <>
      <section className="container flex flex-col gap-8">
        <SectionTitle
          scrollLeft={scrollLeft}
          scrollRight={scrollRight}
          sectionName={"Our Products"}
          showArrows={true}
          showCounter={false}
          showBtn={false}
          sectionTitle={"Explore Our Products"}
        />
        <SectionProducts
          handleViewAll={handleViewAll}
          cardWidth={true}
          scrollRef={scrollFirstProductsRef}
          showBtn={false}
          showDiscount={false}
          showPrevPrice={false}
          showHr={false}
          parentStyles={parentStyles}
        />
        <SectionProducts
          viewAllBtnRef={viewAllBtnRef}
          handleViewAll={handleViewAll}
          cardWidth={true}
          scrollRef={scrollSecondProdcutsRef}
          showBtn={true}
          showBtns={true}
          showDiscount={false}
          showPrevPrice={false}
          parentStyles={parentStyles}
          showHr={false}
        />
      </section>
    </>
  );
};

export default OurProducts;


