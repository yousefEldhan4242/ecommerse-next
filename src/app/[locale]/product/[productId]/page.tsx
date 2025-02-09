"use client";
import Footer from "../../../_components/Footer";
import Navbar from "../../../_components/NavBar/NavBar";
import ProductDetails from "../../../_components/ProductDetails/ProductDetails";
import PropTypes from "prop-types";
import SectionTitle from "../../../_components/sectionTitle/SectionTitle";
import SectionProducts from "../../../_components/SectionProducts";
import Product from "@/interfaces";

const shuffle = (arr: Product[]) => {
  const shuffledArr = [...arr];
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }
  return [...shuffledArr];
};

const ProductDetailsPage = () => {

  return (
    <>
      <Navbar />

        <ProductDetails />
      <section className="container">
        <SectionTitle sectionName={"Related Item"} />

          <SectionProducts
            isInProductsPage={true}
            cardWidth={true}
            showBtn={true}
            showPrevPrice={true}
            parentStyles={
              "grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 mt-[40px]"
            }
            showDiscount={true}
          />
      </section>
      <Footer isInProductsPage={true} />
    </>
  );
};

ProductDetailsPage.propTypes = {
  product: PropTypes.object,
};

export default ProductDetailsPage;
