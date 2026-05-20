"use client";

import React from "react";
import { Skeleton } from "@heroui/react";

export function NavbarSkeleton() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background border-b border-border">
      <div className="flex items-center gap-3">
        <Skeleton className="w-10 h-10 rounded-xl" />
        <Skeleton className="h-5 w-24 rounded-lg" />
      </div>

      <div className="hidden md:flex items-center gap-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-4 w-14 rounded-lg" />
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Skeleton className="w-6 h-6 rounded-full" />
        <div className="hidden md:flex items-center gap-3">
          <Skeleton className="h-9 w-16 rounded-xl" />
          <Skeleton className="h-9 w-20 rounded-xl" />
        </div>
        <Skeleton className="md:hidden w-8 h-8 rounded-lg" />
      </div>
    </div>
  );
}