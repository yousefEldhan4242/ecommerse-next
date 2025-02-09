"use client"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { addToWhishList } from "../rtk/slices/whishList-slice";
import { addToCart, increaseQuantityBy1 } from "../rtk/slices/cart-slice";
import { useRef } from "react";
import Link from "next/link";
import { ProductCardInterface } from "@/interfaces";
import Image from "next/image";

const ProductCard = ({product,
  cardWidth,
  newBtn,
  showBtns,
  isInWhishList,
}: ProductCardInterface) => {
    const cartIconRef = useRef<HTMLSpanElement>(null);
    const dispatch = useDispatch();
    const renderStars = () => {
      const filledStars = Math.floor(product.rating); // number of filled stars
      const halfStar = product.rating % 1 !== 0; // true if there is half stars
      const stars = [];
  
      for (let i = 0; i < 5; i++) {
        if (i < filledStars) {
          stars.push(<Image src="/starpng.png" alt="" key={i} width={10} height={10}/>);
        } else if (i === filledStars && halfStar) {
          // Create Half Star
          stars.push(<Image src="/star-half-filled.png" alt="" key={i} width={10} height={10}/>);
        } else {
          // reate Empty Star
          stars.push(<Image src="/empty-star.png" alt="" key={i} width={10} height={10}/>);
        }
      }
      return stars;
    };
  
    const handleProductView = () => {
      window.scrollTo({ top: 70 });
    };
  return (
    <article
    className={` rounded overflow-hidden ${
      cardWidth ? "min-w-[243px]" : ""
    } group`}
  >
    <div className="relative flex items-center justify-center h-[200px] bg-[#f5f5f5] overflow-hidden rounded">
      <Image
        className="w-[50%] h-[65%]"
        src={product.image}
        alt={product.title}
        width={100}
        height={100}
      />
      {newBtn && (
        <div className="absolute top-[10px] left-[10px] rounded bg-green-500 text-white text-sm px-2 py-1">
          New
        </div>
      )}
      {product.discount && (
        <div className="absolute top-[10px] left-[10px] rounded bg-main-color text-white text-sm px-2 py-1">
          -{product.price && product.price.value}
        </div>
      )}

      <div className="absolute top-[10px] right-[10px] flex flex-col gap-2">
        {/* Favorite Icon Placeholder */}
        {!isInWhishList && (
          <div
            onClick={() => {
              dispatch(addToWhishList(product));
            }}
            className="w-6 h-6 bg-gray-300 flex items-center justify-center rounded-full cursor-pointer"
          >
            <Image src="/Fill Heart.png" alt="" width={100} height={100} />
          </div>
        )}

        {/* Eye Icon Placeholder */}
        <Link
          onClick={handleProductView}
          href={`/product/${product.asin}`}
          className="w-6 h-6 bg-gray-300 flex items-center justify-center rounded-full"
        >
          <Image src="/Fill Eye.png" alt="" width={50} height={50} />
        </Link>
      </div>
      <div
        onClick={() => {
          // increase the product quantity if it was added or add the product if it wasn't added

          // put the "increaseQuantityBy1" before "addToCart"
          // beacuse "increaseQuantityBy1" after "addToCart" it will find that the product has been added
          // and this will add the product for the first time with quantity "2"
          dispatch(increaseQuantityBy1(product));
          dispatch(addToCart(product));
          cartIconRef.current?.classList.remove("animate-bounceFromTop");
          setTimeout(() => {
            cartIconRef.current?.classList.add("animate-bounceFromTop");
          }, 0);
        }}
        className="add-btn absolute hover:bg-[rgb(43_40_40)] text-white py-1 w-full bg-black text-center bottom-[-20%] group-hover:bottom-0 duration-300 cursor-pointer"
      >
        {isInWhishList && (
          <span className="mr-2" ref={cartIconRef}>
            <ShoppingCartOutlinedIcon />
          </span>
        )}
        Add To Cart
      </div>
    </div>
    <div className="font-bold text-xl mb-2 truncate pt-4">
      {product.title}
    </div>
    <div
      className={`pb-4 ${
        product.price && product.price.value ? "" : "flex items-baseline"
      }`}
    >
      <div className="flex items-baseline">
        <span className="text-lg font-semibold text-main-color mr-3">
          ${ product.price && product.price.value}
        </span>
        {product.previousPrice && (
          <span className="line-through text-gray-500">
            ${product.price && product.price.value}
          </span>
        )}
      </div>
      <div className="flex items-center space-x-1 mt-2">
        {renderStars()}
        <span className="text-gray-500 pl-1">
          ({product.availableItems})
        </span>
      </div>
    </div>
    {showBtns && (
      <div className="flex gap-2 ml-[2px] mb-[2px]">
        <div className="relative">
          {/* <div
            className={`w-5 h-5 ${
              product.color == "black"
                ? "bg-[black]"
                : product.color == "#f91313"
                ? "bg-[#f91313]"
                : product.color == "#eeff61"
                ? "bg-[#eeff61]"
                : product.color == "#184a47"
                ? "bg-[#184a47]"
                : ""
            } border-white border-[3px] outline-[2px] outline-black outline rounded-full`}
          ></div> */}
        </div>
        <div className="w-5 h-5 bg-main-color rounded-full"></div>
      </div>
    )}
  </article>
  )
}

export default ProductCard
