"use client";

import React from "react";
import { Skeleton } from "@heroui/react";

const MyBookingsLoading = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="max-w-[1200px] mx-auto px-6 space-y-8">
        <div className="space-y-2">
          <Skeleton className="h-9 w-44 rounded-xl" />
          <Skeleton className="h-4 w-72 rounded-lg" />
        </div>

        <div className="border border-border/60 rounded-3xl overflow-hidden bg-surface shadow-md">
          <div className="bg-field-background/50 px-6 py-4 grid grid-cols-6 gap-4 border-b border-border/60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-4 w-16 rounded" />
            ))}
          </div>

          <div className="divide-y divide-border/40">
            {[1, 2, 3].map((row) => (
              <div key={row} className="px-6 py-5 grid grid-cols-6 gap-4 items-center">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-12 w-12 rounded-xl flex-shrink-0" />
                  <div className="space-y-1 w-full">
                    <Skeleton className="h-4 w-20 rounded" />
                    <Skeleton className="h-3 w-10 rounded" />
                  </div>
                </div>
                <Skeleton className="h-4 w-24 rounded" />
                <Skeleton className="h-4 w-20 rounded" />
                <Skeleton className="h-4 w-12 rounded" />
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-10 w-24 rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookingsLoading;