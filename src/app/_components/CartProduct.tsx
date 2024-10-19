"use client";
import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantityBy1,
} from "../rtk/slices/cart-slice";
import Product from "@/interfaces";

interface Props {
  item: Product;
}

const CartProduct = ({ item }: Props) => {
  const dispatch = useDispatch();

  return (
    <div
      className="flex items-center shadow-cartSahdow justify-between w-fit md:w-full"
      key={item.id}
    >
      <div className="px-10 py-5 flex items-center">
        <img
          src={item.main_image}
          alt={item.title}
          className="w-16 h-16 object-contain mr-4"
        />
        {item.name}
      </div>
      <div className="px-10 py-5">${item.currentPrice}</div>
      <div className="px-10 py-5 text-center">
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => {
            if (+e.target.value > item.quantity) {
              dispatch(increaseQuantityBy1(item));
            } else {
              dispatch(decreaseQuantity(item));
            }
          }}
          className="border w-16 text-center outline-none p-2 rounded"
        />
      </div>
      <div className="px-10 py-5 text-right">
        ${(item.currentPrice * item.quantity).toFixed(2)}
      </div>
    </div>
  );
};

export default CartProduct;
