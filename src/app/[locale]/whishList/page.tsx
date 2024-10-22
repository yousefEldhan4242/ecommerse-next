import NavBar from "../../_components/NavBar";
import Footer from "../../_components/Footer";
import SectionTitle from "../../_components/SectionTitle";
import SectionProducts from "../../_components/SectionProducts";
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

const WhishLishPage = () => {
  const whishListProducts = useSelector((state: State) => state.whishList);
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
      <NavBar />
      <div className="container flex flex-col gap-8 pt-[100px]">
        <SectionTitle
          showSectionNameBtn={true}
          sectionNameBtn={"Move All To Bag"}
          showSectionNameBlock={false}
          sectionName={`Wishlist (${whishListProducts.length})`}
          isInWhishList={true}
        />
        <SectionProducts
          productsList={whishListProducts}
          cardWidth={true}
          parentStyles={"flex overflow-auto gap-8"}
          isInWhishList={true}
          showHr={false}
        />
        <SectionTitle
          sectionName={"Just For You"}
          showSectionNameBtn={true}
          handleViewAll={handleViewAll}
          sectionNameBtn={"See All"}
          isInWhishList={true}
        />
        <SectionProducts
          productsList={productsList}
          cardWidth={true}
          parentStyles={
            "grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8"
          }
          isInWhishList={true}
        />
      </div>
      <Footer />
    </>
  );
};

export default WhishLishPage;
