"use client";
import { motion } from "motion/react";
import RoomCard from "../../components/Rooms/RoomCard";
import RoomActionSidebar from "./../../components/Rooms/RoomActionSidebar";
import CustomEmpty from "../../components/shared/CustomEmty";
import { LuSearchX } from "react-icons/lu";
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

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Sidebar */}
        <div className="lg:col-span-3">
          <RoomActionSidebar />
        </div>

        {/* Rooms */}
        <div className="lg:col-span-9">
          {allRooms.length === 0 ? (
            <CustomEmpty
              icon={LuSearchX}
              header="No rooms found"
              subtitle="Try adjusting your search or removing a few filters."
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch">
              {allRooms?.map((room) => (
                <RoomCard key={room._id} room={room} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllRoomsWrapper;
