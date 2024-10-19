import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const NavBarSubHeader = () => {
  return (
    <div className="add bg-black text-[#fafafa] py-5">
      <div className="container flex justify-between items-center gap-3">
        <div></div>
        <div>
          <span className="text-[14px] text-balance font-extralight">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>{" "}
          <ins className="cursor-pointer font-bold ml-1 text-white">
            ShopNow
          </ins>
        </div>
        <div>
          English <KeyboardArrowDownOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default NavBarSubHeader;
