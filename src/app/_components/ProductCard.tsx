import PropTypes from "prop-types";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { addToWhishList } from "../rtk/slices/whishList-slice";
import { addToCart, increaseQuantityBy1 } from "../rtk/slices/cart-slice";
import { useRef } from "react";
import Link from "next/link";
import Product from "@/interfaces";

interface Props {
  product: Product;
  cardWidth: boolean;
  showOnlyProductsWithSale: boolean;
  newBtn: boolean;
  showBtns: boolean;
  isInWhishList: boolean;
}

const ProductCard = ({
  product,
  cardWidth,
  showOnlyProductsWithSale,
  newBtn,
  showBtns,
  isInWhishList,
}: Props) => {
  const cartIconRef = useRef<HTMLSpanElement>(null);
  const dispatch = useDispatch();
  const renderStars = () => {
    const filledStars = Math.floor(product.rating); // number of filled stars
    const halfStar = product.rating % 1 !== 0; // true if there is half stars
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < filledStars) {
        stars.push(<img src="/starpng.png" key={i} />);
      } else if (i === filledStars && halfStar) {
        // Create Half Star
        stars.push(<img src="/star-half-filled.png" key={i} />);
      } else {
        // reate Empty Star
        stars.push(<img src="/empty-star.png" key={i} />);
      }
    }
    return stars;
  };

  const handleProductView = () => {
    window.scrollTo({ top: 70 });
  };

  // if the "showOnlyProductsWithSale" is "true" return the card with discount only
  // if the "showOnlyProductsWithSale" is flasy value return any product
  if (showOnlyProductsWithSale) {
    if (product.discount) {
      return (
        <article
          className={` rounded overflow-hidden ${
            cardWidth ? "min-w-[243px]" : ""
          } group`}
        >
          <div className="relative flex items-center justify-center h-[200px] bg-[#f5f5f5] overflow-hidden rounded">
            <img
              className="w-[50%] h-[65%]"
              src={product.main_image}
              alt={product.title}
            />
            {newBtn && (
              <div className="absolute top-[10px] left-[10px] rounded bg-green-500 text-white text-sm px-2 py-1">
                New
              </div>
            )}
            {product.discount && (
              <div className="absolute top-[10px] left-[10px] rounded bg-main-color text-white text-sm px-2 py-1">
                -{product.discount}
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
                  <img src="/Fill Heart.png" alt="" />
                </div>
              )}

              {/* Eye Icon Placeholder */}
              <Link
                onClick={handleProductView}
                href={`/product/${product.id}`}
                className="w-6 h-6 bg-gray-300 flex items-center justify-center rounded-full"
              >
                <img src="/Fill Eye.png" alt="" />
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
              product.previousPrice ? "" : "flex items-baseline"
            }`}
          >
            <div className="flex items-baseline">
              <span className="text-lg font-semibold text-main-color mr-3">
                ${product.currentPrice}
              </span>
              {product.previousPrice && (
                <span className="line-through text-gray-500">
                  ${product.previousPrice}
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
                <div
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
                ></div>
              </div>
              <div className="w-5 h-5 bg-main-color rounded-full"></div>
            </div>
          )}
        </article>
      );
    }
  } else {
    return (
      <article
        className={` rounded overflow-hidden ${
          cardWidth ? "min-w-[243px]" : ""
        } group`}
      >
        <div className="relative flex items-center justify-center h-[200px] bg-[#f5f5f5] overflow-hidden rounded">
          <img
            className="w-[50%] h-[65%]"
            src={product.main_image}
            alt={product.title}
          />
          {newBtn && (
            <div className="absolute top-[10px] left-[10px] rounded bg-green-500 text-white text-sm px-2 py-1">
              New
            </div>
          )}
          {product.discount && (
            <div className="absolute top-[10px] left-[10px] rounded bg-main-color text-white text-sm px-2 py-1">
              -{product.discount}
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
                <img src="/Fill Heart.png" alt="" />
              </div>
            )}

            {/* Eye Icon Placeholder */}
            <Link
              onClick={handleProductView}
              href={`/product/${product.id}`}
              className="w-6 h-6 bg-gray-300 flex items-center justify-center rounded-full cursor-pointer z-[100]"
            >
              <img src="/Fill Eye.png" alt="" />
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
            product.previousPrice ? "" : "flex items-baseline"
          }`}
        >
          <div className="flex items-baseline">
            <span className="text-lg font-semibold text-main-color mr-3">
              ${product.currentPrice}
            </span>
            {product.previousPrice && (
              <span className="line-through text-gray-500">
                ${product.previousPrice}
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
              <div
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
              ></div>
            </div>
            <div className={`w-5 h-5 bg-main-color rounded-full `}></div>
          </div>
        )}
      </article>
    );
  }
};
ProductCard.propTypes = {
  product: PropTypes.object,
  cardWidth: PropTypes.bool,
  showDiscount: PropTypes.bool,
  showPrevPrice: PropTypes.bool,
  showBtns: PropTypes.bool,
  newBtn: PropTypes.bool,
  isInWhishList: PropTypes.bool,
  showOnlyProductsWithSale: PropTypes.bool,
  isInProductsPage: PropTypes.bool,
};

export default ProductCard;
