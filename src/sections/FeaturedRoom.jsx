"use client";
import React from "react";
import RoomCard from "../components/Rooms/RoomCard";
import Wrapper from "../components/shared/Wrapper";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";
import Link from "next/link";

const FeaturedRoom = ({ feautredRooms }) => {
  return (
    <Wrapper className="px-0" >
      <motion.header
      initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
      className="flex items-center justify-between my-16 flex-col md:flex-row gap-8">
        <div className="px-2">
          <h2 className="text-4xl font-black mb-4 text-foreground italic tracking-tight ">
            Available Study Rooms
          </h2>
          <p className="text-muted text-lg">
            Hand-picked rooms recently added to StudyNook.
          </p>
        </div>
        <Link
          href="/rooms"
          className="group relative px-5  py-2 bg-accent text-accent-foreground font-bold rounded-xl overflow-hidden shadow-lg hover:shadow-accent/40 transition-all active:scale-95"
        >
          <div className="flex items-center gap-2">
            <span className="relative z-10">View All Rooms</span>

            <span className="group-hover:translate-x-1 duration-200 transition-transform">
              <FaArrowRight></FaArrowRight>
            </span>
          </div>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </Link>
      </motion.header>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {feautredRooms.map((r) => (
          <RoomCard room={r} key={r._id} />
        ))}
      </main>
    </Wrapper>
  );
};

export default FeaturedRoom;
