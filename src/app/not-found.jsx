"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { motion } from "motion/react";
import { FiHome, FiCompass } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-6 py-12 transition-colors duration-500">
      <div className="text-center max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center justify-center w-24 h-24 bg-accent/10 text-accent rounded-[2rem] mb-6 shadow-xl shadow-accent/5"
        >
          <FiCompass className="text-5xl animate-spin-slow" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-7xl font-black tracking-tighter text-accent mb-4">
            404
          </h1>
          <h2 className="text-2xl font-bold tracking-tight mb-3">
            Lost in the Nook?
          </h2>
          <p className="text-muted text-sm leading-relaxed mb-8">
            The study corner or page you are looking for doesn&apos;t exist or
            has been moved to another location.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link href={"/"}>
            <Button className="w-full sm:w-auto h-12 px-6 bg-accent text-accent-foreground font-bold rounded-xl shadow-lg shadow-accent/10 hover:opacity-95 transition-all">
              <FiHome className="text-lg" /> Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
