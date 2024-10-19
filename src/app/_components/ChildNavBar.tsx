import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Link from "next/link";
import NavBarLink from "./NavBarLink";
import NavBarSubHeader from "./NavBarSubHeader";
import BurgerIcon from "./BurgerIcon";
import NavBarIcon from "./NavBarIcons";
import SearchBar from "./SearchBar";
import UserIcon from "./UserIcon";

interface Props {
  isInSignUpOrLogIn?: boolean;
  whishList: object[];
  cart: object[];
  isLoggedIn: boolean;
  searchBarRef: React.RefObject<HTMLInputElement>;
}

const Navbar = ({
  isInSignUpOrLogIn = false,
  whishList,
  cart,
  isLoggedIn,
  searchBarRef,
}: Props) => {
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
          {/* Search Bar and Icons */}
          <div className="flex flex-col gap-2 items-center relative">
            <div className="flex items-center justify-between w-[100%] gap-2 md:grow-0">
              {/* Search Bar */}
              <SearchBar
                searchBarRef={searchBarRef}
                isInSignUpOrLogIn={isInSignUpOrLogIn}
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
                // Return User Icon If User Is Not In SignUp Or LogIn Page And Logged In
                <UserIcon />
              )}
            </div>
            <input
              ref={searchBarRef}
              type="text"
              className="search-input bg-[#f5f5f5] p-2 pr-0 outline-none rounded w-[100%] top-[40px] absolute opacity-0 duration-300 text-[13px] xs:hidden z-[-100]"
              placeholder="What are you looking for?"
            />
          </div>
          {/* Burger Icon */}
          <BurgerIcon />
        </div>
      </nav>
      <hr className="border-border-color" />
    </header>
  );
};

export default Navbar;
