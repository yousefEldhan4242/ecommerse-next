"use client"
import { addToCart } from '@/app/rtk/slices/cart-slice';
import { clearWhishList } from '@/app/rtk/slices/whishList-slice';
import { State } from '@/app/rtk/store';
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

interface Props {
    handleViewAll?: () => void
    showSectionNameBtn?: boolean
    sectionNameBtn?: string
}

const SectionNameBtn = ({showSectionNameBtn,sectionNameBtn,handleViewAll}:Props) => {
  const seeAllRef = useRef<HTMLSpanElement>(null);

      const dispatch = useDispatch();
      const whishList = useSelector((state: State) => state.whishList);
  return <>
          {showSectionNameBtn && (
          <div
            className="ml-auto"
            onClick={() => {
              if (sectionNameBtn == "Move All To Bag") {
                if (whishList.length) {
                  whishList.forEach((product) => {
                    dispatch(addToCart(product));
                  });
                  dispatch(clearWhishList());
                  if (whishList.length == 1) {
                    Swal.fire({
                      title: `Good job!`,
                      html: `You Have Sucessfully Moved <span class="text-green-600">${whishList.length}</span> Product From Favourites To Cart.`,
                      icon: "success",
                    });
                  } else {
                    Swal.fire({
                      title: `Good job!`,
                      html: `You Have Sucessfully Moved <span class="text-green-600">${whishList.length}</span> Products From Favourites To Cart.`,
                      icon: "success",
                    });
                  }
                } else {
                  Swal.fire({
                    title: `Add Products`,
                    text: `Sorry You Can't Move Products To The Bag Please Add Products First`,
                    icon: "info",
                  });
                }
              }

              if (sectionNameBtn == "See All") {
                if (handleViewAll) {
                  handleViewAll();
                }
                if (seeAllRef.current?.textContent == "See All") {
                  seeAllRef.current.textContent = "See Less";
                } else {
                  if (seeAllRef.current) {
                    seeAllRef.current.textContent = "See All";
                  }
                }
              }
            }}
          >
            <span
              ref={seeAllRef}
              className=" px-12 py-5 rounded border-[1px] cursor-pointer border-border-color hover:bg-secondary-hover-bg duration-300"
            >
              {sectionNameBtn}
            </span>
          </div>
        )}
        </>
}

export default SectionNameBtn
