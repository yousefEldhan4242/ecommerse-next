"use client";
import React, { useRef } from "react";
import ChildNavBar from "./ChildNavBar";
import { useSelector } from "react-redux";
import { State } from "../../rtk/store";

// i have created this component to make the ChildNavBar component a server component
// by doing props drilling from this component

const NavBarClientParent = () => {
  const whishList = useSelector((state: State) => state.whishList);
  const cart = useSelector((state: State) => state.cart);
  const isLoggedIn = useSelector((state: State) => state.loggedIn);

  const searchBarRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <ChildNavBar
      
        searchBarRef={searchBarRef}
        isLoggedIn={isLoggedIn}
        cart={cart}
        whishList={whishList}
      />
    </div>
  );
};

export default NavBarClientParent;
