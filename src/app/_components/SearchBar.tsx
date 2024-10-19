"use client";
import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

interface Props {
  isInSignUpOrLogIn: boolean;
  searchBarRef: React.RefObject<HTMLDivElement>;
}
const SearchBar = ({ isInSignUpOrLogIn, searchBarRef }: Props) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearchBar = () => {
    if (width <= 450) {
      searchBarRef.current?.classList.toggle("opacity-0");
      searchBarRef.current?.classList.toggle("z-[-100]");
    }
  };
  return (
    <div
      onClick={() => {
        // If There Is Icons Beside The Search Bar
        if (isInSignUpOrLogIn == false) {
          handleSearchBar();
        }
      }}
      className={`relative text-center ${
        isInSignUpOrLogIn ? "w-full" : "md:min-w-[70%]"
      }`}
    >
      <input
        type="text"
        className={`bg-[#f5f5f5] px-5 p-2 focus:outline-none rounded w-[100%] pr-8 text-[13px] ${
          // If There Is No Icons Beside The Search Bar

          isInSignUpOrLogIn == false ? "hidden" : "block"
        } xs:block
                  `}
        placeholder="What are you looking for?"
      />

      {/* Search Icon */}
      <span
        className={`xs:absolute xs:top-[15%] xs:right-[5px] cursor-pointer
                   ${
                     // If There Is No Icons Beside The Search Bar

                     isInSignUpOrLogIn == true &&
                     "absolute top-[24%] right-[5px]"
                   } `}
      >
        <SearchOutlinedIcon />
      </span>
    </div>
  );
};

export default SearchBar;
