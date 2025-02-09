"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const ScrollIcon = () => {
  const scrollIconRef = useRef<HTMLDivElement>(null);

  const handleScrollIcon = () => {
    window.scrollTo({ top: 0 });
  };

  const handleWindowScroll = () => {
    if (window.scrollY >= document.documentElement.clientHeight) {
      scrollIconRef.current?.classList.add("animate-go-up", "right-[15px]");
      scrollIconRef.current?.classList.remove("right-[-50px]");
    } else {
      scrollIconRef.current?.classList.remove("animate-go-up", "right-[15px]");
      scrollIconRef.current?.classList.add("right-[-50px]");
    }
  };
  useEffect(() => {
    if (window.location.pathname == "/") {
      window.addEventListener("scroll", handleWindowScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);
  return (
    <div
      ref={scrollIconRef}
      onClick={handleScrollIcon}
      className="w-11 h-11 fixed bottom-[10px] right-[-50px] cursor-pointer duration-300 scroll-icon text-[30px] text-[#2196f3] z-[1000]"
    >
      <Image className="w-full h-full" src="/Fill with Up Arrow.png" alt="" width={100}
       height={100}/>
    </div>
  );
};

export default ScrollIcon;
