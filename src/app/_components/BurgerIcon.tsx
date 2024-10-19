"use client";

import React, { useRef } from "react";
import NavBarLink from "./NavBarLink";

const BurgerIcon = () => {
  const burgerIconRef = useRef<HTMLDivElement>(null);

  const handleBurgerIcon = () => {
    burgerIconRef.current?.classList.toggle("clicked");
  };
  return (
    <div
      onClick={handleBurgerIcon}
      ref={burgerIconRef}
      className="burger-icon md:hidden w-5 h-[14px] shrink-0 relative cursor-pointer flex flex-col gap-4 items-center"
    >
      <span className="bg-black w-full h-[2px] absolute left-0 duration-300 top-0"></span>
      <span className="bg-black w-full h-[2px] absolute left-0 duration-300 top-[6px]"></span>
      <span className="bg-black w-full h-[2px] absolute left-0 duration-300 top-[12px]"></span>
      <ul className="links absolute top-[30px] flex flex-col font-medium gap-4 duration-300 shadow-lg p-2 bg-[#f5f5f5] border-[2px] border-border-color">
        <li>
          <NavBarLink name="Home" route="" />
        </li>

        <li>
          <NavBarLink name="Contact" route="contact" />
        </li>

        <li>
          <NavBarLink name="About" route="about" />
        </li>

        <li>
          <NavBarLink name="SignUp" route="signUp" />
        </li>
      </ul>
    </div>
  );
};

export default BurgerIcon;
