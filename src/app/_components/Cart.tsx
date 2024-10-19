"use client";
import { Coupon, Total } from "./Pay";
import Link from "next/link";
import { State } from "../rtk/store";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../rtk/slices/cart-slice";
import CartProduct from "./CartProduct";
import Product from "@/interfaces";
const Cart = () => {
  const products = useSelector((state: State) => state.cart) as Product[];
  const dispatch = useDispatch();

  return (
    <main className="container py-[80px]">
      <ul className=" flex gap-2 mb-[100px]">
        <li className="text-[#878787] hover:text-lis-hover-color duration-300">
          <Link href={"/"}>Home</Link>
        </li>
        <span className="text-[#878787]">/</span>
        <li>Cart</li>
      </ul>
      <section className="px-[15px]">
        <section className="overflow-x-auto max-h-[500px] p-5 flex flex-col gap-5">
          <div className="min-w-full bg-white flex flex-col gap-10">
            <div className="flex items-center shadow-cartSahdow justify-between w-fit md:w-full">
              <div className="text-left px-10 py-5">Product</div>
              <div className="text-left px-10 py-5">Price</div>
              <div className="text-center px-10 py-5">Quantity</div>
              <div className="text-right px-10 py-5">Subtotal</div>
            </div>
            {products.map((item) => {
              return <CartProduct item={item} key={item.id} />;
            })}

            <div></div>
            <div></div>
          </div>
        </section>
        <div className="btns flex justify-between mt-10 gap-5">
          <Link
            href={"/"}
            className=" px-[5vw] py-3 rounded border-[1px] cursor-pointer border-border-color hover:bg-secondary-hover-bg duration-300"
          >
            Return To Shop
          </Link>
          <button
            onClick={() => {
              dispatch(updateCart());
            }}
            className=" px-[5vw] py-3 rounded border-[1px] cursor-pointer border-border-color hover:bg-secondary-hover-bg duration-300"
          >
            Update Cart
          </button>
        </div>
        <section className=" mt-24 flex justify-center lg:justify-between gap-10 flex-wrap">
          <Coupon />
          <div className="border-[2px] border-[#202020] px-4 py-6 w-full lg:w-[400px] rounded  ">
            <h4 className=" text-[20px] mb-5">Cart Total</h4>
            <Total />
            <div className="flex justify-center">
              <Link
                href="/checkOut"
                className="btn px-[4vw] py-3 bg-main-color duration-300 hover:bg-main-hover-bg text-white rounded"
              >
                Process To Checkout
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Cart;
