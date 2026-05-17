"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const NavLink = ({ href, className, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative py-1 text-sm font-medium transition-colors duration-300 ${
        isActive 
          ? "text-blue-600 dark:text-blue-400" 
          : "text-muted hover:text-blue-600 dark:hover:text-blue-400"
      } ${className}`}
    >
      {children}
     
    </Link>
  );
};

export default NavLink;