"use client";

import React from "react";
import { Skeleton } from "@heroui/react";

const RoomsLoading = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="max-w-[1200px] mx-auto px-6 space-y-10">
        <div className="space-y-3">
          <Skeleton className="h-10 w-48 rounded-2xl" />
          <Skeleton className="h-4 w-80 rounded-xl" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 p-6 bg-surface border border-border/60 rounded-[2rem] space-y-6">
            <Skeleton className="h-6 w-24 rounded-lg" />
            <Skeleton className="h-11 w-full rounded-xl" />
            <div className="space-y-3 pt-2">
              <Skeleton className="h-4 w-32 rounded-lg" />
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="h-5 w-5 rounded-md" />
                  <Skeleton className="h-4 w-24 rounded-md" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-surface border border-border/60 rounded-[2rem] overflow-hidden flex flex-col justify-between h-[420px]">
                <Skeleton className="h-52 w-full" />
                <div className="p-6 space-y-4 flex-1">
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-3/4 rounded-lg" />
                    <Skeleton className="h-3 w-full rounded-lg" />
                  </div>
                  <Skeleton className="h-10 w-36 rounded-xl" />
                  <div className="flex gap-2 pt-2">
                    <Skeleton className="h-6 w-14 rounded-md" />
                    <Skeleton className="h-6 w-14 rounded-md" />
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
    </div>
  );
};

export default RoomsLoading;