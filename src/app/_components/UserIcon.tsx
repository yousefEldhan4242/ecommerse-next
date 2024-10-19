"use client";
import React, { useRef } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { logOut } from "../rtk/slices/user-loggedIn-slice";

import Link from "next/link";

const UserIcon = () => {
  const userIconParentRef = useRef<HTMLDivElement>(null);
  const userIconRef = useRef<HTMLDivElement>(null);
  const settingRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const handleUserIconClick = () => {
    userIconParentRef.current?.classList.toggle("bg-main-color");
    userIconRef.current?.classList.toggle("filter-white");
    settingRef.current?.classList.toggle("opacity-0");
    settingRef.current?.classList.toggle("z-[-100]");
  };
  return (
    <div>
      <div
        className="relative w-7 h-7 rounded-full duration-300 flex items-center justify-center"
        ref={userIconParentRef}
      >
        <span
          onClick={() => {
            handleUserIconClick();
          }}
          className="p-1 duration-300 rounded-full w-8 h-8 cursor-pointer"
          ref={userIconRef}
        >
          <PersonOutlineOutlinedIcon className="duration-300" />
        </span>
        <div
          ref={settingRef}
          className="flex flex-col top-[40px] left-[-508%] gap-3 bg-[#f5f5f5] text-black absolute z-[-100] opacity-0 duration-300"
        >
          <Link
            className="flex gap-2 text-nowrap items-center hover:bg-[rgb(169_169_169)] duration-300 bg-[#f5f5f5] pt-3 px-3"
            href={"/account"}
          >
            <div>
              <PersonOutlineOutlinedIcon />
            </div>
            <div>Manage My Account</div>
          </Link>
          <div className="flex gap-2 text-nowrap items-center hover:bg-[rgb(169_169_169)] duration-300 bg-[#f5f5f5] px-3">
            <div>
              <LocalMallOutlinedIcon />
            </div>
            <div>My Order</div>
          </div>
          <div className="flex gap-2 text-nowrap items-center hover:bg-[rgb(169_169_169)] duration-300 bg-[#f5f5f5] px-3">
            <div>
              <HighlightOffOutlinedIcon />
            </div>
            <div>My Cancellations</div>
          </div>
          <div className="flex gap-2 text-nowrap items-center hover:bg-[rgb(169_169_169)] duration-300 bg-[#f5f5f5] px-3">
            <div>
              <StarBorderOutlinedIcon />
            </div>
            <div>My Reviews</div>
          </div>
          <div
            className="flex gap-2 text-nowrap items-center cursor-pointer hover:bg-[rgb(169_169_169)] duration-300 bg-[#f5f5f5] px-3 pb-3"
            onClick={() => {
              dispatch(logOut());
              Swal.fire({
                title: "Good Job",
                text: `You Have Successfully Logged Out`,
                icon: "success",
              });
            }}
          >
            <div>
              <LogoutOutlinedIcon />
            </div>
            <div>Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserIcon;
