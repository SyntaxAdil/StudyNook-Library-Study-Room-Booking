"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, className, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;
  return (
    <Link href={href} className={isActive ? "underline" : className}>
      {children}
    </Link>
  );
};

export default NavLink;
