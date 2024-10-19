import Link from "next/link";
import React from "react";

interface Props {
  state: object[];
  icon: JSX.Element;
  route: string;
}

const NavBarIcon = ({ state, icon, route }: Props) => {
  return (
    <>
      <Link href={`/${route}`} className="relative">
        {state.length > 0 && (
          <span className="absolute top-[-3px] right-[-5px] bg-main-color text-white rounded-full h-4 w-4 flex justify-center items-center text-[10px]">
            {state.length}
          </span>
        )}

        {icon}
      </Link>
    </>
  );
};

export default NavBarIcon;
