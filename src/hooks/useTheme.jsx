"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark" || theme === "ocean-dark";

  return (
    <button
      className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-default-100 hover:bg-default-200 transition-colors cursor-pointer overflow-hidden"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -15, opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="text-lg"
        >
          {isDark ? (
            <FaSun className="text-amber-500" />
          ) : (
            <FaMoon className="text-slate-700" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}