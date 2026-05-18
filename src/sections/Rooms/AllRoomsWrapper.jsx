"use client";
import { Button, Card, Chip } from "@heroui/react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { LuDollarSign, LuLayers, LuUsers } from "react-icons/lu";
import RoomCard from "../../components/Rooms/RoomCard";

const AllRoomsWrapper = ({ allRooms }) => {
  return (
    <div>
      {/* headers */}
      <motion.header
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-10 text-center md:text-left"
      >
        <h1 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">
          All Study Rooms
        </h1>
        <p className="text-muted text-sm md:text-base">
          Browse the full catalog. Filter by amenity, price, or search by name.
        </p>
      </motion.header>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full">
        <div className="col-span-3"></div>
        <div className="col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {allRooms?.map((room) => (
             <RoomCard key={room._id} room={room} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllRoomsWrapper;
