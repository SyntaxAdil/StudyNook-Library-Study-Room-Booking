"use client";

import React from "react";
import { Button } from "@heroui/react";
import { motion } from "motion/react";
import Link from "next/link";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-background px-4 py-16">
      {/* Background Gradient Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Next-Gen Library Booking
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-6 text-foreground">
              Find Your Perfect <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-blue-400">
                Study Room
              </span>
            </h1>

            <p className="text-lg text-muted max-w-lg mb-10 leading-relaxed">
              Browse and book quiet, private study rooms in your library. List
              your own room, manage bookings, and boost your productivity today.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/rooms">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground font-bold px-8 h-14 rounded-2xl shadow-xl shadow-accent/20 hover:scale-105 transition-transform"
                  endContent={<FaArrowRight />}
                >
                  Explore Rooms
                </Button>
              </Link>

              <Link href="/add-room">
                <Button
                  variant="bordered"
                  size="lg"
                  className="border-border text-foreground font-semibold px-8 h-14 rounded-2xl hover:bg-surface transition-all"
                  startContent={<FaSearch className="text-accent" />}
                >
                  List Your Room
                </Button>
              </Link>
            </div>

            {/* Stats/Trust Badges */}
            <div className="mt-12 flex items-center gap-8 border-t border-border pt-8">
              <div>
                <p className="text-2xl font-bold text-foreground">50+</p>
                <p className="text-xs text-muted uppercase tracking-tighter">
                  Active Rooms
                </p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">1.2k</p>
                <p className="text-xs text-muted uppercase tracking-tighter">
                  Happy Users
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden border-8 border-surface shadow-2xl">
              <Image
                width={1000}
                height={5000}
                src="/hero.png"
                alt="Modern Study Room"
                className="w-full h-120 object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-surface p-4 rounded-2xl shadow-xl border border-border z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">
                    Instant Booking
                  </p>
                  <p className="text-[10px] text-muted">No double booking</p>
                </div>
              </div>
            </motion.div>

            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
