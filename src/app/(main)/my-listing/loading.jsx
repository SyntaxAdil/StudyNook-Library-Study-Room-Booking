"use client";

import React from "react";
import { Skeleton } from "@heroui/react";

const MyListingLoading = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="max-w-[1200px] mx-auto px-6 space-y-10">
        <div className="flex justify-between items-center border-b border-border/60 pb-6">
          <div className="space-y-2">
            <Skeleton className="h-9 w-40 rounded-xl" />
            <Skeleton className="h-4 w-60 rounded-lg" />
          </div>
          <Skeleton className="h-12 w-36 rounded-xl" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-surface border border-border/60 rounded-[2rem] overflow-hidden flex flex-col justify-between h-[420px]">
              <Skeleton className="h-52 w-full" />
              <div className="p-6 space-y-4 flex-1">
                <div className="space-y-2">
                  <Skeleton className="h-5 w-2/3 rounded-lg" />
                  <Skeleton className="h-3 w-full rounded-lg" />
                </div>
                <Skeleton className="h-10 w-36 rounded-xl" />
                <div className="flex gap-2 pt-1">
                  <Skeleton className="h-6 w-12 rounded-md" />
                  <Skeleton className="h-6 w-12 rounded-md" />
                </div>
              </div>
              <div className="px-6 pb-6">
                <Skeleton className="h-11 w-full rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyListingLoading;