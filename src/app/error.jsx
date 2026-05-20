"use client";

import React from "react";
import { Button } from "@heroui/react";
import { motion } from "motion/react";
import { FiAlertTriangle, FiRotateCw } from "react-icons/fi";

const Error = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-6 py-12 transition-colors duration-500">
      <div className="text-center max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center justify-center w-20 h-20 bg-danger/10 text-danger rounded-2xl mb-6 shadow-xl shadow-danger/5"
        >
          <FiAlertTriangle className="text-4xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold tracking-tight mb-3">
            Something went wrong!
          </h2>
          <p className="text-muted text-sm leading-relaxed mb-8">
            {error?.message ||
              "An unexpected system error occurred while rendering this page. Please try refreshing."}
          </p>
        </motion.div>

        {reset && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            
          >
            <Button
              onClick={() => reset()}
              className="w-full sm:w-auto h-12 px-6 bg-accent text-accent-foreground font-bold rounded-xl shadow-lg shadow-accent/10 hover:opacity-95 transition-all"
            >
              <FiRotateCw className="text-lg" /> Try Again
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Error;
