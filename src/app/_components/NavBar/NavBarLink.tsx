"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";  // Import usePathname instead of useRouter
import React, { useEffect, useState } from "react";

interface Props {
  name: string;
  route: string;
}

const NavBarLink = ({ name, route }: Props) => {
  // Use usePathname from next/navigation to get the current pathname
  const pathname = usePathname();
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure the component is mounted before using the pathname
  }, []);

  if (!isMounted) return null; // Avoid rendering until the component is mounted

  // Determine if the current route is active
  const isActive = pathname === `/${route}`;

  return (
    <Link
      href={`/${route}`}
      className={`border-b-[1px] hover:border-gray-400 ${
        isActive ? "border-gray-400" : "border-transparent"
      } duration-300`}
    >
      {name}
    </Link>
  );
};

export default NavBarLink;
