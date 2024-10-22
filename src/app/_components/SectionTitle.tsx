"use client";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../rtk/slices/cart-slice";
import { clearWhishList } from "../rtk/slices/whishList-slice";
import Swal from "sweetalert2";
import { State } from "../rtk/store";

interface SectionTitleInterface {
  sectionTitle?: string;
  sectionName: string;
  showArrows?: boolean;
  showCounter?: boolean;
  showBtn?: boolean;
  showSectionNameBtn?: boolean;
  showSectionNameBlock?: boolean;
  isInWhishList?: boolean;
  sectionNameBtn?: string;
  scrollLeft?: () => void;
  scrollRight?: () => void;
  handleViewAll?: () => void;
  handleRightArrow?: () => void;
  handleLeftArrow?: () => void;
}

const SectionTitle = ({
  sectionTitle,
  sectionName,
  showArrows,
  showCounter,
  showBtn,
  showSectionNameBtn,
  showSectionNameBlock = true,
  isInWhishList,
  sectionNameBtn,
  scrollLeft,
  scrollRight,
  handleViewAll,
  handleRightArrow,
  handleLeftArrow,
}: SectionTitleInterface) => {
  const dispatch = useDispatch();
  const whishList = useSelector((state: State) => state.whishList);

  // Counter
  const counterStarted = useRef(false);
  const counterSection = useRef<HTMLDivElement>(null);
  const daysRef = useRef<HTMLSpanElement>(null);
  const hoursRef = useRef<HTMLDivElement>(null);
  const secondsRef = useRef<HTMLDivElement>(null);
  const minutesRef = useRef<HTMLDivElement>(null);

  // <<<<<<< Tabnine <<<<<<<
  //   const counter = (el) => {//-
  const counter = (el: HTMLElement) => {
    //+
    if (el) {
      const goal = el.dataset.goal;
      let currentValue = 0; // Initialize current value to 0
      //   el.textContent = currentValue; // Set initial value to the element//-
      el.textContent = currentValue.toString(); // Set initial value to the element//+

      if (goal) {
        const count = setInterval(() => {
          currentValue += 1;
          // el.textContent = currentValue; // Update element text//-
          el.textContent = currentValue.toString(); // Update element text//+

          if (goal) {
            if (currentValue >= +goal) {
              clearInterval(count); // Stop the counter when goal is reached
            }
          }
        }, 1000 / +goal);
      }
    }
  };
  // >>>>>>> Tabnine >>>>>>>// {"conversationId":"c4630a64-8e3a-4b32-93ba-c9f5fda3a0cd","source":"instruct"}

  const handleWindowScroll = () => {
    if (counterSection.current?.offsetTop) {
      if (window.scrollY >= counterSection.current?.offsetTop) {
        if (!counterStarted.current) {
          if (daysRef.current) {
            counter(daysRef.current);
          }
          if (hoursRef.current) {
            counter(hoursRef.current);
          }
          if (minutesRef.current) {
            counter(minutesRef.current);
          }
          if (secondsRef.current) {
            counter(secondsRef.current);
          }
        }
        counterStarted.current = true;
      }
    }
  };

  useEffect(() => {
    if (showCounter) {
      window.addEventListener("scroll", handleWindowScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  const viewAllRef = useRef<HTMLSpanElement>(null);
  const seeAllRef = useRef<HTMLSpanElement>(null);

  return (
    <>
      <section
        className="flex justify-between pt-[100px] flex-wrap gap-10"
        ref={counterSection}
      >
        <div className="flex items-center">
          {showSectionNameBlock && (
            <span className="h-[40px] w-[20px] rounded bg-main-color mr-4 inline-block"></span>
          )}

          {isInWhishList ? (
            <span className="tracking-wide text-[30px]">{sectionName}</span>
          ) : (
            <span className="font-semibold tracking-wide text-main-color">
              {sectionName}
            </span>
          )}
        </div>
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
      </section>

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
                <div
                  className="text-[30px] font-bold"
                  data-goal={23}
                  ref={hoursRef}
                >
                  0
                </div>
              </div>
              <span className="mx-3 text-main-color text-[30px] mt-2">:</span>

              <div className="minutes flex flex-col items-center">
                <span className="font-medium mb-[-10px]">Minutes</span>
                <div
                  className="text-[30px] font-bold"
                  data-goal={19}
                  ref={minutesRef}
                >
                  0
                </div>
              </div>
              <span className="mx-3 text-main-color text-[30px] mt-2">:</span>

              <div className="seconds flex flex-col items-center">
                <span className="font-medium mb-[-10px]">Seconds</span>
                <div
                  className="text-[30px] font-bold"
                  data-goal={56}
                  ref={secondsRef}
                >
                  0
                </div>
              </div>
            </div>
          )}
        </div>
        {showArrows && (
          <div className="flex gap-4 ml-auto">
            <img
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
            <img
              onClick={() => {
                if (scrollRight) {
                  scrollRight();
                }
                if (handleRightArrow) {
                  handleRightArrow();
                }
              }}
              className={`h-[46px] aspect-square cursor-pointer`}
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
    </>
  );
};

SectionTitle.propTypes = {
  sectionTitle: PropTypes.string,
  sectionName: PropTypes.string,
  showArrows: PropTypes.bool,
  showCounter: PropTypes.bool,
  showBtn: PropTypes.bool,
  showSectionNameBtn: PropTypes.bool,
  showSectionNameBlock: PropTypes.bool,
  isInWhishList: PropTypes.bool,
  sectionNameBtn: PropTypes.string,
  scrollLeft: PropTypes.func,
  scrollRight: PropTypes.func,
  handleViewAll: PropTypes.func,
  handleRightArrow: PropTypes.func,
  handleLeftArrow: PropTypes.func,
};

export default SectionTitle;
