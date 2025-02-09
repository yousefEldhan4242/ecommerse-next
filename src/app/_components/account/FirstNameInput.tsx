"use client"

import { addFirstName } from "@/app/rtk/slices/account-slice";
import { useDispatch } from "react-redux";

const FirstNameInput = ({firstName}:{firstName:string}) => {
      const dispatch = useDispatch()
    return (
        <div className="grow">
        <label htmlFor="first-name">First Name</label>
        <input
          placeholder="Md"
          className="bg-[#f5f5f5] rounded w-full outline-none p-4 mt-1 mb-7 text-[#7b7b7b]"
          type="text"
          id="first-name"
          value={firstName as string}
          onChange={(e) => {
            dispatch(addFirstName(e.target.value));
          }}
        />
      </div>
    );
  };
  
  export default FirstNameInput;