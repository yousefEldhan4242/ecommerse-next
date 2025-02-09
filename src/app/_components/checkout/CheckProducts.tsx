"use client"
import React from 'react'
import { Coupon, Total } from "../Pay";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { State } from "../../rtk/store";
import handleSubmitFunction from './handleSubmitFunction';


const CheckProducts = ({formRef}:{formRef:React.RefObject<HTMLFormElement>}) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const loggedInState = useSelector((state: State) => state.loggedIn);
    const cartState = useSelector((state: State) => state.cart);
    console.log(loggedInState)

    const handleSubmit = () =>
        handleSubmitFunction({
          dispatch,
          router,
          loggedInState,
          cartState,
          formRef,
        });

  return (
    <section className="w-full lg:w-fit">
      <div className="mr-24">
        <div className="flex flex-col gap-8 mb-8 max-h-[400px] overflow-auto">
          {cartState.map((product) => {
            return (
              <div
                key={product.id}
                className="flex justify-between items-center"
              >
                <div className="flex items-center">
                  <Image width={100} height={100}
                    className="w-10 h-10 mr-4 object-contain"
                    src={product.image}
                    alt=""
                  />
                  <div>{product.title}</div>
                </div>
                <div>${product.price.value}</div>
              </div>
            );
          })}
        </div>

        <Total />
        <div className="flex justify-between my-6">
          <div className="flex flex-col gap-5">
            <div>
              <input
                className="mr-2 accent-black"
                id="bank"
                type="radio"
                name="payment-method"
              />
              <label htmlFor="bank">Bank</label>
            </div>
            <div>
              <input
                className="mr-2 accent-black"
                id="cash"
                type="radio"
                name="payment-method"
              />
              <label htmlFor="cash">Cash on delivery</label>
            </div>
          </div>
          <div className="self-start flex gap-1">
            <Image width={50} height={50} src="/Bkash.png" alt="" />
            <Image width={50} height={50} src="/Visa.png" alt="" />
            <Image width={50} height={50} src="/Mastercard.png" alt="" />
            <Image width={50} height={50} src="/Nagad.png" alt="" />
          </div>
        </div>
      </div>
      <Coupon />
      <button
        onClick={() => {
          handleSubmit();
        }}
        className="btn px-[4vw] py-3 bg-main-color duration-300 hover:bg-main-hover-bg text-white rounded mt-6"
      >
        Place Order
      </button>
    </section>
  )
}

export default CheckProducts
