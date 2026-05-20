"use client";

import React from "react";
import { Skeleton } from "@heroui/react";

export default function GlobalLoading() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 py-8 space-y-8 animate-pulse">
      
      <div className="space-y-2">
        <Skeleton className="h-9 w-48 rounded-xl" />
        <Skeleton className="h-4 w-80 rounded-lg" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="hidden md:block col-span-1 border border-border/60 p-6 rounded-2xl space-y-6 bg-content1/5">
          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-16 rounded-md" />
            <Skeleton className="h-4 w-10 rounded-md" />
          </div>
          
          <div className="space-y-2 pt-2">
            <Skeleton className="h-4 w-28 rounded-md" />
            <Skeleton className="h-10 w-full rounded-xl" />
          </div>

          <div className="space-y-4 pt-4">
            <Skeleton className="h-4 w-20 rounded-md" />
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="w-5 h-5 rounded-md" />
                <Skeleton className="h-4 w-24 rounded-md" />
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1 md:col-span-3 space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((card) => (
              <div 
                key={card} 
                className="border border-border/50 rounded-2xl overflow-hidden bg-content1/5 flex flex-col h-full"
              >
                <Skeleton className="aspect-[16/10] w-full" />
                
                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-3/4 rounded-lg" />
                    <Skeleton className="h-4 w-1/2 rounded-md" />
                  </div>

                  <div className="space-y-3 pt-2 border-t border-border/40">
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <Skeleton className="w-4 h-4 rounded-sm" />
                        <Skeleton className="h-3 w-12 rounded-sm" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Skeleton className="w-4 h-4 rounded-sm" />
                        <Skeleton className="h-3 w-14 rounded-sm" />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Skeleton className="w-4 h-4 rounded-sm" />
                      <Skeleton className="h-3 w-16 rounded-sm" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block border border-border/40 rounded-xl p-4 space-y-4 bg-content1/5">
            {[1, 2].map((row) => (
              <div key={row} className="flex items-center justify-between py-2 border-b border-border/20 last:border-0">
                <div className="flex items-center gap-3 w-1/4">
                  <Skeleton className="w-10 h-10 rounded-lg" />
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-24 rounded-md" />
                    <Skeleton className="h-3 w-12 rounded-sm" />
                  </div>
                </div>
                <Skeleton className="h-4 w-20 rounded-md" />
                <Skeleton className="h-4 w-16 rounded-md" />
                <Skeleton className="h-4 w-12 rounded-md" />
                <Skeleton className="h-7 w-16 rounded-full" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}