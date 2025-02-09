"use client";
import { useEffect, useRef } from "react";
import SectionNameBtn from "./SectionNameBtn";
import TitleSection from "./TitleSection";
import useHandleWindowScroll from "./useHandleWindowScroll";

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

  // Counter
  const counterSection = useRef<HTMLDivElement>(null);

const [handleWindowScroll] = useHandleWindowScroll({counterSection})

  useEffect(() => {
    if (showCounter) {
      window.addEventListener("scroll", handleWindowScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);


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
        <SectionNameBtn showSectionNameBtn={showSectionNameBtn} handleViewAll={handleViewAll} sectionNameBtn={sectionNameBtn}/>
      </section>

      <TitleSection showCounter={showCounter} sectionTitle={sectionTitle} showBtn={showBtn} handleViewAll={handleViewAll} showArrows={showArrows} handleRightArrow={handleRightArrow}
      handleLeftArrow={handleLeftArrow} scrollLeft={scrollLeft} scrollRight={scrollRight} counterSection={counterSection}/>
    </>
  );
};

export default SectionTitle;
