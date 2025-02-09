import React from 'react'
import NavBarIcon from "./NavBarIcons";
import SearchBar from "../SearchBar";
import UserIcon from "../UserIcon";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { ChildNavBarProps } from '@/interfaces';


const SearchBarAndIcons = ({searchBarRef,isInSignUpOrLogIn,whishList,cart,isLoggedIn}:ChildNavBarProps) => {
  return (
          <div className="flex flex-col gap-2 items-center relative">
            <div className="flex items-center justify-between w-[100%] gap-2 md:grow-0">
              {/* Search Bar */}
              <SearchBar
                searchBarRef={searchBarRef}
                isInSignUpOrLogIn={isInSignUpOrLogIn as boolean}
              />
              {!isInSignUpOrLogIn && (
                // Return Icons If User Is Not In SignUp Or LogIn Page
                <>
                  {/* Heart Icon */}
                  <NavBarIcon
                    state={whishList}
                    icon={<FavoriteBorderOutlinedIcon />}
                    route={"whishList"}
                  />

                  {/* Cart Icon */}
                  <NavBarIcon
                    state={cart}
                    icon={<ShoppingCartOutlinedIcon />}
                    route={"cart"}
                  />
                </>
              )}
              {/* User Icon */}
              {isLoggedIn && !isInSignUpOrLogIn && (
                <UserIcon />
                // Return User Icon If User Is Not In SignUp Or LogIn Page And Logged In
              )}
            </div>
            <input
              ref={searchBarRef}
              type="text"
              className="search-input bg-[#f5f5f5] p-2 pr-0 outline-none rounded w-[100%] top-[40px] absolute opacity-0 duration-300 text-[13px] xs:hidden z-[-100]"
              placeholder="What are you looking for?"
            />
          </div>
  )
}

export default SearchBarAndIcons
