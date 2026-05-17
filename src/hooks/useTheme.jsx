"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes"; // বা আপনার ব্যবহৃত থিম হুক
import { FaSun, FaMoon } from "react-icons/fa";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // কম্পোনেন্ট মাউন্ট হওয়ার পর mounted true হবে
  useEffect(() => {
    setMounted(true);
  }, []);

  
  if (!mounted) {
    return <div className="p-2 w-9 h-9" />; // আইকনের সমান সাইজের একটি খালি ডিভ
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg transition-colors"
    >
      {theme === "dark" ? (
        <FaMoon className="text-slate-700" />
      ) : (
        <FaSun className="text-amber-500" />
      )}
    </button>
  );
};