"use client"
import React, { useEffect, useState } from 'react'
import {
    addToCart,
    increaseQuantityBy1,
    increaseQuantityBySpecificQunatity,
  } from "../../rtk/slices/cart-slice";
  import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { addToWhishList } from "../../rtk/slices/whishList-slice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from 'react-redux';
import Product from '@/interfaces';

interface Props {
    chosenProduct: Product;
    isInWhishList: boolean;
    whishListNotAddedIconRef: React.RefObject<HTMLSpanElement>;
    whishListAddedIconRef: React.RefObject<HTMLSpanElement>;
  
}

const ProductActionsSection = ({chosenProduct,isInWhishList,whishListNotAddedIconRef,whishListAddedIconRef}:Props) => {
    const [quantity, setQuantity] = useState(1);
    useEffect(()=>{
      // reset the quantity with each change in the chosen product
      setQuantity(1);
    },[])
    const dispatch = useDispatch();

  return (
    <div className="flex justify-between mt-4 gap-5">
      <div className="flex grow">
        <div
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
          className="px-5 cursor-pointer border grow-2 border-border-color rounded-l shrink-0 relative after:content-[''] after:h-px after:w-[40%] after:top-1/2 after:translate-y-[50%] after:left-[30%] after:bg-black after:rounded-full after:absolute"
        ></div>
        <div className="px-5 flex justify-center items-center border-y border-border-color grow">
          {quantity}
        </div>
        <div
          onClick={() => {
            setQuantity(quantity + 1);
          }}
          className="bg-main-color hover:bg-main-hover-bg duration-300 cursor-pointer grow-2 shrink-0 px-5 rounded-r relative z-[0] after:absolute after:content-[''] after:w-px after:h-[40%] after:bg-white after:rounded after:left-[48%] after:top-[33%] after:translate-x-[50%] before:absolute before:content-[''] before:h-px before:w-[40%] before:bg-white before:rounded before:top-1/2 before:left-[31%] before:translate-y-[50%] text-white"
        ></div>
      </div>
      <div
        className="bg-main-color hover:bg-main-hover-bg duration-300 text-white py-2 px-[1vw] rounded grow text-center cursor-pointer"
        onClick={() => {
          // reset the quantity
          setQuantity(1);

          if (quantity > 1) {
            // add the product if it's not added
            // then change product quantity with the quantity state value
            dispatch(addToCart(chosenProduct));
            dispatch(
              increaseQuantityBySpecificQunatity({
                ...chosenProduct,
                quantity,
              })
            );
          } else if (quantity == 1) {
            // increase the product quantity if it was added or add the product if it wasn't added

            // put the "increaseQuantityBy1" before "addToCart"
            // beacuse "increaseQuantityBy1" after "addToCart" it will find that the product has been added
            // and this will add the product for the first time with quantity "2"
            dispatch(increaseQuantityBy1(chosenProduct));
            dispatch(addToCart(chosenProduct));
          } else {
            dispatch(increaseQuantityBy1(chosenProduct));
          }
        }}
      >
        Buy Now
      </div>
      <div
        className="flex items-center border border-border-color rounded w-10 h-10 justify-center duration-300 relative cursor-pointer"
        onClick={() => {
          // if the product isn't in whishList
          if (!isInWhishList) {
            dispatch(addToWhishList(chosenProduct));
            whishListNotAddedIconRef.current?.classList.add("opacity-0");
            whishListAddedIconRef.current?.classList.remove("opacity-0");
            whishListAddedIconRef.current?.classList.add(
              "text-main-color"
            );
          }
        }}
      >
        {isInWhishList ? (
          <FavoriteIcon className="text-main-color" />
        ) : (
          <>
            <span
              ref={whishListNotAddedIconRef}
              className="duration-300 opacity-100"
            >
              <FavoriteBorderOutlinedIcon />
            </span>
            <span
              className="absolute opacity-0 duration-300"
              ref={whishListAddedIconRef}
            >
              <FavoriteIcon />
            </span>
          </>
        )}
      </div>
    </div>
  )
}

export default ProductActionsSection
