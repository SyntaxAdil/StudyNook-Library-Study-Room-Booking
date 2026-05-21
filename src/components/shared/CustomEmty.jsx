"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { motion } from "motion/react";

const CustomEmpty = ({ icon: Icon, header, subtitle, href, buttonText }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-xl mx-auto text-center py-12 px-6 flex flex-col items-center justify-center bg-transparent"
    >
      {Icon && (
        <div className="text-muted/60 mb-5 flex items-center justify-center">
          <Icon size={56} className="stroke-[1.5]" />
        </div>
      )}

      <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2 font-serif">
        {header}
      </h3>

      <p className="text-muted/80 text-sm md:text-base max-w-sm mx-auto leading-relaxed mb-6">
        {subtitle}
      </p>

      {href && buttonText && (
        <Link href={href}>
          <Button className="h-11 px-6 bg-accent text-accent-foreground font-semibold text-sm rounded-xl shadow-md hover:opacity-95 transition-all">
            {buttonText}
          </Button>
        </Link>
      )}
    </motion.div>
  );
};

export default CustomEmpty;
