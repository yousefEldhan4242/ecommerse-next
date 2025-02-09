import { State } from "@/app/rtk/store";
import Product from "@/interfaces";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const useRenderStars = ({chosenProduct}:{chosenProduct:Product}) => {
  
      const whishListNotAddedIconRef = useRef<HTMLSpanElement>(null);
      const whishListAddedIconRef = useRef<HTMLSpanElement>(null);
      const whishListState = useSelector((state: State) => state.whishList);
      const [isInWhishList, setIsInWhishList] = useState(false);
    
      useEffect(() => {
          if (whishListState) {
            const productInWhishList = whishListState.find(
              (product) => product.id == chosenProduct?.id
            );
      
            if (productInWhishList) {
              setIsInWhishList(true);
            } else {
              setIsInWhishList(false);
            }
      
            // Reset The Utilities that is preserved through re-renders because of the useRef() Hook
            if (!isInWhishList) {
              whishListNotAddedIconRef.current?.classList.remove("opacity-0");
              whishListAddedIconRef.current?.classList.add("opacity-0");
              whishListAddedIconRef.current?.classList.remove("text-main-color");
            }
          }
      
          // use whishListState in the dependencies list beacuse if the user added the product to whishList throught favourite icon in the card
          // the favourite icon in the productDetailsPage will change
        }, [chosenProduct, whishListState]);
      
    const renderStars = () => {
        const filledStars = chosenProduct && Math.floor(chosenProduct.rating); // number of filled stars
        const halfStar = chosenProduct && chosenProduct.rating % 1 !== 0; // true if there is half stars
        const stars = [];
    
        for (let i = 0; i < 5; i++) {
          if (filledStars) {
            if (i < filledStars) {
              stars.push(
                <div key={i}>
                  <Image width={100} height={100} src="/starpng.png" key={i}alt="" />
                </div>
              );
            } else if (i === filledStars && halfStar) {
              // Create Half Star
              stars.push(
                <div key={i} className="w-[18px] h-[17px]">
                  <Image width={100} height={100} src="/star-half-filled.png" key={i} alt=""/>
                </div>
              );
            } else {
              // reate Empty Star
              stars.push(
                <div key={i}>
                  <Image width={100} height={100} src="/empty-star.png" key={i} alt="" />
                </div>
              );
            }
          }
        }
        return stars;
      };
  return [renderStars,isInWhishList,whishListNotAddedIconRef,whishListAddedIconRef] as const
}

export default useRenderStars
