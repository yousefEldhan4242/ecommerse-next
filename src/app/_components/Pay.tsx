"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../rtk/store";

export const Total = () => {
  const cartState = useSelector((state: State) => state.cart);

  let total = cartState.reduce((acc, product) => {
    acc += +product.price.value * product.quantity;
    return acc;
  }, 0);
  total = +total.toFixed(2);

  return (
    <>
      <div className="flex justify-between mb-3">
        <span>Subtotal:</span> <span>${total}</span>
      </div>
      <hr className="mb-3 border-border-color" />
      <div className="flex justify-between mb-3">
        <span>Shipping:</span> <span>Free</span>
      </div>
      <hr className="mb-3 border-border-color" />
      <div className="flex justify-between mb-3">
        <span>Total:</span> <span>${total}</span>
      </div>
    </>
  );
};

export const Coupon = () => {
  const [couponCode, setCouponCode] = useState("");
  return (
    <div className="flex gap-5 self-start justify-center ">
      <div>
        <input
          value={couponCode}
          onChange={(e) => {
            setCouponCode(e.target.value);
          }}
          className="border-border-color border-[1px] outline-none px-6 py-3 rounded w-full"
          placeholder="Coupon Code"
          type="text"
        />
      </div>
      <button
        onClick={() => {
          setCouponCode("");
        }}
        className="btn px-[4vw] py-3 bg-main-color hover:bg-main-hover-bg duration-300 text-white rounded"
      >
        Apply Coupon
      </button>
    </div>
  );
};
