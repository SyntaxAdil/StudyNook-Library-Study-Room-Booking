"use client";

import React from "react";
import { Skeleton } from "@heroui/react";

const MyBookingsLoading = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-8 sm:py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
        <div className="space-y-2">
          <Skeleton className="h-8 sm:h-9 w-36 sm:w-44 rounded-xl" />
          <Skeleton className="h-4 w-52 sm:w-72 rounded-lg" />
        </div>

        <div className="border border-border/60 rounded-2xl sm:rounded-3xl overflow-hidden bg-surface shadow-md">
          <div className="hidden md:grid bg-field-background/50 px-6 py-4 grid-cols-6 gap-4 border-b border-border/60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-4 w-16 rounded" />
            ))}
          </div>

          <div className="divide-y divide-border/40">
            {[1, 2, 3].map((row) => (
              <div
                key={row}
                className="p-4 sm:p-5 md:px-6 md:py-5"
              >
                {/* mobile */}
                <div className="flex flex-col gap-4 md:hidden">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-12 w-12 rounded-xl flex-shrink-0" />

                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-24 rounded" />
                      <Skeleton className="h-3 w-14 rounded" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-6 w-full rounded-full" />
                  </div>

                  <Skeleton className="h-10 w-full rounded-xl" />
                </div>

                {/* desktop */}
                <div className="hidden md:grid grid-cols-6 gap-4 items-center">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookingsLoading;