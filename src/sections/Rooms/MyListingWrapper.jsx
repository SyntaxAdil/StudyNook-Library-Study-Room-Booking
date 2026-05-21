"use client";
import Wrapper from "./../../components/shared/Wrapper";
import { motion } from "motion/react";
import RoomCard from "../../components/Rooms/RoomCard";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { BiPlus } from "react-icons/bi";
import CustomEmpty from "../../components/shared/CustomEmty";
import { MdPlaylistAddCheck } from "react-icons/md";
const MyListingWrapper = ({ rooms }) => {
  return (
    <div>
      <Wrapper>
        {/* headers */}
        <motion.header
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-10 text-center md:text-left flex items-center justify-between flex-col gap-4 md:flex-row "
        >
          <div>
            {" "}
            <h1 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">
              My Listings
            </h1>
            <p className="text-muted text-sm md:text-base">
              Rooms you currently host on StudyNook.
            </p>
          </div>

          <Link
            href="/add-room"
            className="group relative px-5  py-2 bg-accent text-accent-foreground font-bold rounded-xl overflow-hidden shadow-lg hover:shadow-accent/40 transition-all active:scale-95"
          >
            <div className="flex items-center gap-2">
              <span className="group-hover:translate-x-1 duration-200 transition-transform">
                <BiPlus />
              </span>
              <span className="relative z-10">Add Room</span>
            </div>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </motion.header>

        <>
          {rooms.length === 0 ? (
            <CustomEmpty
              icon={MdPlaylistAddCheck}
              header="No listings yet"
              subtitle="Got a quiet room? List it and start earning."
              href="/add-room"
              buttonText="Create your first listing"
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-stretch">
              {rooms.map((room) => (
                <RoomCard key={room._id} room={room} />
              ))}
            </div>
          )}
        </>
      </Wrapper>
    </div>
  );
};

export default MyListingWrapper;
