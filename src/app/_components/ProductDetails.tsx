"use client";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import {
  addToCart,
  increaseQuantityBy1,
  increaseQuantityBySpecificQunatity,
} from "../rtk/slices/cart-slice";
import Link from "next/link";
import { addToWhishList } from "../rtk/slices/whishList-slice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { State } from "../rtk/store";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { productId } = router.query;
  const productsList = useSelector((state: State) => state.products);
  const chosenProduct = productsList.find(
    (product) => productId && +productId == product.id
  );
  const whishListNotAddedIconRef = useRef<HTMLSpanElement>(null);
  const whishListAddedIconRef = useRef<HTMLSpanElement>(null);

  const whishListState = useSelector((state: State) => state.whishList);
  const [isInWhishList, setIsInWhishList] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const renderStars = () => {
    const filledStars = chosenProduct && Math.floor(chosenProduct.rating); // number of filled stars
    const halfStar = chosenProduct && chosenProduct.rating % 1 !== 0; // true if there is half stars
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (filledStars) {
        if (i < filledStars) {
          stars.push(
            <div key={i}>
              <img src="/starpng.png" key={i} />
            </div>
          );
        } else if (i === filledStars && halfStar) {
          // Create Half Star
          stars.push(
            <div key={i} className="w-[18px] h-[17px]">
              <img src="/star-half-filled.png" key={i} />
            </div>
          );
        } else {
          // reate Empty Star
          stars.push(
            <div key={i}>
              <img src="/empty-star.png" key={i} />
            </div>
          );
        }
      }
    }
    return stars;
  };

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

    // reset the quantity with each change in the chosen product
    setQuantity(1);

    // use whishListState in the dependencies list beacuse if the user added the product to whishList throught favourite icon in the card
    // the favourite icon in the productDetailsPage will change
  }, [chosenProduct, whishListState]);

  return (
    <section className="container my-[100px]">
      <div className="flex justify-between mb-[100px] flex-wrap gp-3">
        <ul className=" flex gap-2">
          <li className="text-[#878787] hover:text-lis-hover-color duration-300">
            <Link href="/account">Account</Link>
          </li>
          <span className="text-[#878787]">/</span>
          <li className="text-[#878787] hover:text-lis-hover-color duration-300">
            Gaming
          </li>
          <span className="text-[#878787]">/</span>
          <li>{chosenProduct && chosenProduct.title}</li>
        </ul>
      </div>
      <div className="flex gap-7 flex-wrap lg:flex-nowrap">
        <div className="flex gap-[4%]">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <img
                src={`.${chosenProduct && chosenProduct.image_1}`}
                className="absolute h-full w-full object-contain"
                alt=""
              />
              <img
                className="opacity-0 pointer-events-none"
                src="/products/white-controller-image2.png"
                alt=""
              />
            </div>
            <div className="relative">
              <img
                src={`.${chosenProduct && chosenProduct.image_2}`}
                className="absolute h-full w-full object-contain"
                alt=""
              />
              <img
                className="opacity-0 pointer-events-none"
                src="/products/white-controller-image5.png"
                alt=""
              />
            </div>
            <div className="relative">
              <img
                src={`.${chosenProduct && chosenProduct.image_3}`}
                className="absolute h-full w-full object-contain"
                alt=""
              />
              <img
                className="opacity-0 pointer-events-none"
                src="/products/white-controller-image4.png"
                alt=""
              />
            </div>
            <div className="relative">
              <img
                src={`.${chosenProduct && chosenProduct.image_4}`}
                className="absolute h-full w-full object-contain"
                alt=""
              />
              <img
                className="opacity-0 pointer-events-none"
                src="/products/white-controller-image3.png"
                alt=""
              />
            </div>
          </div>
          <div className=" flex relative items-start ">
            <div className="relative">
              <img
                src={`.${chosenProduct && chosenProduct.main_image}`}
                className="absolute h-full w-full object-contain"
                alt=""
              />
              <img
                className="opacity-0 pointer-events-none"
                src="/products/white-controller-image1.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" w-full lg:w-[400px] shrink-0 mt-4 lg:ml-4 flex flex-col justify-between">
          <h2 className="text-[25px]">
            {chosenProduct && chosenProduct.title}
          </h2>
          <div className="flex gap-2 my-1 flex-wrap">
            <div className="flex items-center">{renderStars()}</div>
            <div className="text-[#878787]">
              ({chosenProduct && chosenProduct.availableItems} Reviews)
            </div>
            <div className=" w-px h-[70%] relative top-[15%] bg-[#878787]"></div>
            <div className="text-[#7df2ac]">In Stock</div>
          </div>
          <h3 className="text-[22px] mb-2">
            ${chosenProduct && chosenProduct.currentPrice}
          </h3>
          <p>{chosenProduct && chosenProduct.description}</p>
          <hr className="my-5 border-border-color" />
          <div className="flex items-center  mb-3">
            <div className="mr-4 text-[22px]">Colours:</div>
            <div className="flex gap-2 items-center">
              <div
                className={`w-[18px] h-[18px] ${
                  chosenProduct && chosenProduct.color == "black"
                    ? "bg-[black]"
                    : chosenProduct && chosenProduct.color == "#f91313"
                    ? "bg-[#f91313]"
                    : chosenProduct && chosenProduct.color == "#eeff61"
                    ? "bg-[#eeff61]"
                    : chosenProduct && chosenProduct.color == "#184a47"
                    ? "bg-[#184a47]"
                    : ""
                } border-white border-[3px] outline-[2px] outline-black outline rounded-full`}
              ></div>
              <div
                className={`w-[22px] h-[22px] bg-main-color rounded-full `}
              ></div>
            </div>
          </div>
          <div className="flex gap-3 items-center mb-2">
            <div className="mr-2 text-[22px]">Size: </div>
            <div className="rounded h-8 w-8 border py-1 border-border-color hover:bg-main-color duration-300 hover:text-white cursor-pointer text-center">
              XS
            </div>
            <div className="rounded py-1 h-8 w-8 border border-border-color hover:bg-main-color duration-300 hover:text-white cursor-pointer text-center">
              S
            </div>
            <div className="rounded py-1 h-8 w-8 border border-border-color hover:bg-main-color duration-300 hover:text-white cursor-pointer text-center">
              M
            </div>
            <div className="rounded py-1  h-8 w-8 border border-border-color hover:bg-main-color duration-300 hover:text-white cursor-pointer text-center">
              L
            </div>
            <div className="rounded py-1 h-8 w-8 border border-border-color hover:bg-main-color duration-300 hover:text-white cursor-pointer text-center">
              XL
            </div>
          </div>
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
          <div className="border border-border-color rounded mt-10 ">
            <div className="flex gap-4 items-center py-6 px-4">
              <div>
                <img src="/icon-delivery.png" alt="" />
              </div>
              <div>
                <h6 className="text-[20px]">Free Delivery</h6>
                <ins className="text-[15px]">
                  Enter your postal code for Delivery Availability
                </ins>
              </div>
            </div>
            <hr className="border-border-color" />
            <div className="flex gap-4 items-center py-6 px-4">
              <div>
                <img src="/Icon-return.png" alt="" />
              </div>
              <div>
                <h6 className="text-[20px]">Return Delivery</h6>
                <p className="text-[14px]">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProductDetails.propTypes = {
  productsList: PropTypes.array,
};

export default ProductDetails;
