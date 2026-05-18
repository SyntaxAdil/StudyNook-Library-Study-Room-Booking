"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 0);
  }, []);
  1;

  if (!mounted) {
    return <div className="p-2 w-9 h-9" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-3 rounded-full transition-all duration-300 ease-in-out
  bg-slate-100 dark:bg-slate-900  active:scale-95 cursor-pointer"
    >
      <div className="transition-transform duration-500">
        {theme === "dark" ? (
          <FaMoon className="text-slate-200 text-lg" />
        ) : (
          <FaSun className="text-yellow-500 text-lg animate-pulse" />
        )}
      </div>
    </button>
  );
};
