"use client"
import Image from 'next/image';
import React from 'react'
import Product from '@/interfaces';
import useRenderStars from './useRenderStars';
import ProductActionsSection from './ProductActionsSection';
// use another library for icons instead of mui


const Details = ({chosenProduct}:{chosenProduct:Product}) => {

      const [renderStars,isInWhishList,whishListNotAddedIconRef,whishListAddedIconRef] = useRenderStars({chosenProduct})
    
  return (
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
        {/* <div
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
        ></div> */}
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
    <ProductActionsSection chosenProduct={chosenProduct} isInWhishList={isInWhishList} whishListNotAddedIconRef={whishListNotAddedIconRef}
    whishListAddedIconRef={whishListAddedIconRef}/>
    <div className="border border-border-color rounded mt-10 ">
      <div className="flex gap-4 items-center py-6 px-4">
        <div>
          <Image width={100} height={100} src="/icon-delivery.png" alt="" />
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
          <Image width={100} height={100} src="/Icon-return.png" alt="" />
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
  )
}

export default Details
