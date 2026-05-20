"use client";

import React from "react";
import { Skeleton } from "@heroui/react";

const AddRoomLoading = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="max-w-2xl mx-auto px-6 space-y-8">
        <div className="space-y-2 text-center md:text-left">
          <Skeleton className="h-10 w-52 rounded-xl mx-auto md:mx-0" />
          <Skeleton className="h-4 w-80 rounded-lg mx-auto md:mx-0" />
        </div>

        <div className="bg-surface p-6 md:p-10 rounded-2xl border border-border/60 space-y-6 shadow-md">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-4 w-24 rounded-md" />
              <Skeleton className="h-12 w-full rounded-xl" />
            </div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-16 rounded-md" />
                <Skeleton className="h-12 w-full rounded-xl" />
              </div>
            ))}
          </div>

          <div className="space-y-3 pt-2">
            <Skeleton className="h-4 w-20 rounded-md" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-14 w-full rounded-xl" />
              ))}
            </div>
          </div>

          <div className="pt-2">
            <Skeleton className="h-12 w-36 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoomLoading;