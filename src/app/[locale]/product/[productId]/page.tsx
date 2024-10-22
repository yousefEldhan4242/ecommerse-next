"use client";
import Footer from "../../../_components/Footer";
import Navbar from "../../../_components/NavBar";
import ProductDetails from "../../../_components/ProductDetails";
import PropTypes from "prop-types";
import SectionTitle from "../../../_components/SectionTitle";
import SectionProducts from "../../../_components/SectionProducts";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import Product from "@/interfaces";
import { State } from "@/app/rtk/store";

const shuffle = (arr: Product[]) => {
  const shuffledArr = [...arr];
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }
  return [...shuffledArr];
};

const ProductDetailsPage = () => {
  const anotherProductsList = useSelector((state: State) => state.products);

  const products = [...useSelector((state: State) => state.products)];
  const shuffleProducts = useRef(shuffle(products));

  const [productsList, setProductsList] = useState(
    shuffleProducts.current.slice(0, 4)
  );

  const handleViewAll = () => {
    if (productsList.length == 4) {
      setProductsList(shuffleProducts.current);
    } else {
      setProductsList(shuffleProducts.current.slice(0, 4));
    }
  };

  return (
    <>
      <Navbar />

      {anotherProductsList && (
        <ProductDetails productsList={anotherProductsList} />
      )}
      <section className="container">
        <SectionTitle sectionName={"Related Item"} />

        {productsList && (
          <SectionProducts
            handleViewAll={handleViewAll}
            isInProductsPage={true}
            productsList={productsList}
            cardWidth={true}
            showBtn={true}
            showPrevPrice={true}
            parentStyles={
              "grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 mt-[40px]"
            }
            showDiscount={true}
          />
        )}
      </section>
      <Footer isInProductsPage={true} />
    </>
  );
};

ProductDetailsPage.propTypes = {
  product: PropTypes.object,
};

export default ProductDetailsPage;
