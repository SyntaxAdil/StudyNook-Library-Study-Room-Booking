"use client";

import React from "react";
import { Skeleton } from "@heroui/react";

const RoomDetailsLoading = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="max-w-[1000px] mx-auto px-6 space-y-8">
        <Skeleton className="h-5 w-28 rounded-lg" />
        <Skeleton className="w-full h-[300px] md:h-[450px] rounded-[2.5rem]" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-3 pb-6 border-b border-border/60">
              <Skeleton className="h-12 w-2/3 rounded-xl" />
              <Skeleton className="h-4 w-40 rounded-lg" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-5 w-32 rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-4/5 rounded-lg" />
            </div>
            <div className="space-y-3 pt-4">
              <Skeleton className="h-5 w-24 rounded-lg" />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-9 w-24 rounded-xl" />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-surface border border-border/60 rounded-[2rem] p-6 space-y-6">
              <Skeleton className="h-10 w-28 rounded-lg" />
              <div className="space-y-4 bg-field-background/40 p-4 rounded-2xl border border-border/30">
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
              </div>
              <Skeleton className="h-14 w-full rounded-2xl" />
            </div>

            <div className="bg-surface/50 border border-border/60 rounded-[2rem] p-6 flex items-center gap-4">
              <Skeleton className="w-14 h-14 rounded-2xl flex-shrink-0" />
              <div className="space-y-2 w-full">
                <Skeleton className="h-4 w-20 rounded-md" />
                <Skeleton className="h-3 w-32 rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsLoading;