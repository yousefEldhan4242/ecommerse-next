import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  route: string;
}

const NavBarLink = ({ name, route }: Props) => {
  return (
    <Link
      href={`/${route}`}
      className={`border-b-[1px]  hover:border-gray-400 ${
        window.location.pathname == `/${route}`
          ? "border-gray-400"
          : "border-transparent"
      } duration-300`}
    >
      {name}
    </Link>
  );
};

export default NavBarLink;
