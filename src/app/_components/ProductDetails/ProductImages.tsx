import Product from '@/interfaces'
import Image from 'next/image'
import React from 'react'

const ProductImages = ({chosenProduct}:{chosenProduct:Product}) => {
  const images = chosenProduct.images.slice(1,-1)

  const producltImagesList = images.map((image,index) => {
    return (
      <div className="relative" key={index}>
      <Image width={100} height={100}
        src={`${image.link}`}
        className="absolute h-full w-full object-contain"
        alt=""
      />
      <Image width={100} height={100}
        className="opacity-0 pointer-events-none"
        src="/products/white-controller-image5.png"
        alt=""
      />
    </div>
    )

  })
  return (
    <div className="flex gap-[4%]">
      <div className="flex flex-col gap-4">
        {producltImagesList}
      </div>
      <div className=" flex relative items-start ">
        <div className="relative">
          <Image width={100} height={100}
            src={`${chosenProduct && chosenProduct.main_image.link}`}
            className="absolute h-full w-full object-contain"
            alt=""
          />
          <Image width={100} height={100}
            className="opacity-0 pointer-events-none"
            src="/products/white-controller-image1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default ProductImages
