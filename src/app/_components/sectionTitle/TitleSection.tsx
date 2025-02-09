"use client"
import React, { RefObject, useRef } from 'react'
import Image from "next/image";
import useHandleWindowScroll from './useHandleWindowScroll';
interface Props{
    sectionTitle?: string;
    showArrows?: boolean;
    showCounter?: boolean;
    showBtn?: boolean;
    scrollLeft?: () => void;
    scrollRight?: () => void;
    handleViewAll?: () => void;
    handleRightArrow?: () => void;
    handleLeftArrow?: () => void;
    counterSection:RefObject<HTMLDivElement>
}


const TitleSection = ({showCounter,sectionTitle,showBtn,handleViewAll,showArrows,
    handleRightArrow,handleLeftArrow,scrollLeft,scrollRight,counterSection
}:Props) => {



    const [,daysRef,hoursRef,minutesRef,secondsRef] = useHandleWindowScroll({counterSection})
    const viewAllRef = useRef<HTMLSpanElement>(null);

  return (
    <section className="flex sm:justify-between justify-center items-center flex-wrap gap-8">
    <div className="flex gap-8 items-end justify-center text-center sm:text-start sm:justify-start flex-wrap sm:gap-[85px]">
      <h2 className="text-[34px] font-bold">{sectionTitle}</h2>
      {showCounter && (
        <div className="counter flex items-center">
          <div className="days flex flex-col items-center">
            <span className="font-medium mb-[-10px]">Days</span>
            <div className="text-[30px] font-bold">
              0
              <span ref={daysRef} data-goal="3">
                0
              </span>
            </div>
          </div>
          <span className="mx-3 text-main-color text-[30px] mt-2">:</span>
          <div className="hours flex flex-col items-center">
            <span className="font-medium mb-[-10px]">Hours</span>
            <span
              className="text-[30px] font-bold"
              data-goal={23}
              ref={hoursRef}
            >
              0
            </span>
          </div>
          <span className="mx-3 text-main-color text-[30px] mt-2">:</span>

          <div className="minutes flex flex-col items-center">
            <span className="font-medium mb-[-10px]">Minutes</span>
            <span
              className="text-[30px] font-bold"
              data-goal={19}
              ref={minutesRef}
            >
              0
            </span>
          </div>
          <span className="mx-3 text-main-color text-[30px] mt-2">:</span>

          <div className="seconds flex flex-col items-center">
            <span className="font-medium mb-[-10px]">Seconds</span>
            <span
              className="text-[30px] font-bold"
              data-goal={56}
              ref={secondsRef}
            >
              0
            </span>
          </div>
        </div>
      )}
    </div>
    {showArrows && (
      <div className="flex gap-4 ml-auto">
        <Image width={46} height={46}
          onClick={() => {
            if (scrollLeft) {
              scrollLeft();
            }
            if (handleLeftArrow) {
              handleLeftArrow();
            }
          }}
          className={`h-[46px] aspect-square cursor-pointer `}
          src="/Left Arrow.png"
          alt=""
        />
        <Image width={46} height={46}
          onClick={() => {
            if (scrollRight) {
              scrollRight();
            }
            if (handleRightArrow) {
              handleRightArrow();
            }
          }}
          className={`h-[46px] w-[46px] aspect-square cursor-pointer`}
          src="/Right Arrow.png"
          alt=""
        />
      </div>
    )}
    {showBtn && (
      <div className="ml-auto">
        <span
          ref={viewAllRef}
          className="text-white px-12 py-5 rounded bg-main-color hover:bg-main-hover-bg duration-300 cursor-pointer"
          onClick={() => {
            if (handleViewAll) {
              handleViewAll();
            }
            if (viewAllRef.current?.textContent == "View All") {
              viewAllRef.current.textContent = "View Less";
            } else {
              if (viewAllRef.current) {
                viewAllRef.current.textContent = "View All";
              }
            }
          }}
        >
          View All
        </span>
      </div>
    )}
  </section>
  )
}

export default TitleSection
