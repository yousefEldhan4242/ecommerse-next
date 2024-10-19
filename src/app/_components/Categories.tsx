"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ShowCategories from "./ShowCategories";
import categories from "./categoriesList";

const Categories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRightArrow = () => {
    if (currentIndex < categories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleLeftArrow = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(categories.length - 1);
    }
  };

  return (
    <>
      <section className="container flex flex-col gap-8">
        <SectionTitle
          handleRightArrow={handleRightArrow}
          handleLeftArrow={handleLeftArrow}
          sectionName={"Categories"}
          sectionTitle={"Browse By Category"}
          showArrows={true}
          showBtn={false}
          showCounter={false}
        />
        <ShowCategories currentIndex={currentIndex} categories={categories} />
        <hr className="border-border-color mt-[70px]" />
      </section>
    </>
  );
};

export default Categories;
