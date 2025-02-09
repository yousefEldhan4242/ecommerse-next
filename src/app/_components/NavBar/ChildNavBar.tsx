"use client"
import Link from "next/link";
import NavBarLink from "./NavBarLink";
import NavBarSubHeader from "./NavBarSubHeader";
import BurgerIcon from "../BurgerIcon";
import SearchBarAndIcons from "./SearchBarAndIcons";
import { ChildNavBarProps } from "@/interfaces";


const Navbar = ({
  isInSignUpOrLogIn = false,
  whishList,
  cart,
  isLoggedIn,
  searchBarRef,
}: ChildNavBarProps) => {
  return (
    <header>
      <NavBarSubHeader />
      <nav className="p-4 pt-10 bg-white text-black">
        <div
          className={`container mx-auto flex items-center gap-[3vw] justify-between md:justify-stretch
          ${
            // If There Is No Icons Beside The Search Bar
            isInSignUpOrLogIn == true && "lg:gap-[70px]"
          }`}
        >
          {/* Logo */}
          <div className=" text-xl font-bold">
            <Link className="text-[20px] xs:text-[25px]" href={"/"}>
              Exclusive
            </Link>
          </div>
          {/* Center Links */}
          <ul
            className={`hidden md:flex ml-[2vw] font-medium grow justify-between lg:justify-center lg:gap-[7vw]`}
          >
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
          <SearchBarAndIcons whishList={whishList} cart={cart} isLoggedIn={isLoggedIn} searchBarRef={searchBarRef} 
          isInSignUpOrLogIn={isInSignUpOrLogIn}/>
          {/* Burger Icon */}
          <BurgerIcon />
        </div>
      </nav>
      <hr className="border-border-color" />
    </header>
  );
};

export default Navbar;
