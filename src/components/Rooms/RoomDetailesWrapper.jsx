"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, Button, Card, Chip } from "@heroui/react";
import { motion } from "motion/react";
import { FiArrowLeft, FiCalendar } from "react-icons/fi";
import { BiDollar, BiEdit, BiTrash } from "react-icons/bi";
import { LuLayers, LuUsers } from "react-icons/lu";
import Wrapper from "../shared/Wrapper";
import toast from "react-hot-toast";
import { useSession } from "../../lib/auth/auth-client";
import { EditRoom } from "../modal/EditRoom";

const RoomDetailesWrapper = ({ room }) => {
  const { data: session } = useSession();
  const user = session?.user;
  const isOwner = user?.id === room.userId;

  const initial = room?.userName
    ?.split(" ")
    .slice(0, 2)
    .map((i) => i[0].toUpperCase());
  const handelBooking = async () => {
    toast.success("Hello");
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-8 transition-colors duration-500">
      <Wrapper>
        <motion.header
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-accent transition-colors group"
          >
            <FiArrowLeft className="text-base group-hover:-translate-x-1 transition-transform" />
            Back to Rooms
          </Link>
        </motion.header>

        <main className="space-y-18 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full h-[300px] md:h-[480px] overflow-hidden rounded-[2.5rem] border border-border/40 shadow-2xl "
          >
            <Image
              fill
              priority
              className="object-cover"
              alt={room?.roomName}
              src={room?.imageUrl || room?.image}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
          </motion.div>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start  ">
            {/* left conteent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="border-b border-border/60 pb-6">
                <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-3">
                  {room?.roomName}
                </h1>

                <div className="flex items-center gap-2 text-sm text-muted font-medium">
                  <FiCalendar className="text-base text-accent" />
                  <span>
                    Listed on{" "}
                    {room?.createdAt
                      ? new Date(room.createdAt).toDateString()
                      : "Recent"}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold tracking-tight">
                  About this space
                </h3>
                <p className="text-muted text-base leading-relaxed max-w-3xl">
                  {room?.description}
                </p>
              </div>

              {room?.amenities && room?.amenities.length > 0 && (
                <div className="space-y-4 pt-4">
                  <h3 className="text-xl font-bold tracking-tight">
                    Amenities
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {room?.amenities.map((a) => (
                      <Chip
                        key={a}
                        variant="flat"
                        className="bg-surface border border-border/60 text-foreground font-medium px-4 py-1.5 h-10 rounded-xl capitalize"
                      >
                        {a.replace("_", " ")}
                      </Chip>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
            {/* right content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <Card className="bg-surface border border-border/60 rounded-[2rem] p-6 shadow-xl shadow-surface-shadow">
                <div className="p-0 space-y-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black tracking-tight text-foreground">
                      ${room?.hourlyRate}
                    </span>
                    <span className="text-muted text-sm font-semibold">
                      per hour
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3 bg-field-background/40 p-4 rounded-2xl border border-border/30">
                    <div className="flex items-center gap-3 text-sm font-semibold text-foreground/90">
                      <LuLayers className="text-lg text-accent" />
                      <span className="capitalize">Floor: {room?.floor}</span>
                    </div>
                    <div className="h-[1px] bg-border/40 w-full" />
                    <div className="flex items-center gap-3 text-sm font-semibold text-foreground/90">
                      <LuUsers className="text-lg text-accent" />
                      <span>Capacity: {room?.capacity} people</span>
                    </div>
                    <div className="h-[1px] bg-border/40 w-full" />
                    <div className="flex items-center gap-3 text-sm font-semibold text-foreground/90">
                      <BiDollar className="text-lg text-accent" />
                      <span>Total Bookings: 8 times</span>
                    </div>
                  </div>

                  {/* book now  */}
                  <Button
                    onClick={handelBooking}
                    className="w-full h-14 bg-accent text-accent-foreground font-black text-base rounded-2xl shadow-lg shadow-accent/20 hover:opacity-95 active:scale-[0.98] transition-all"
                  >
                    Book This Space
                  </Button>
                  {/* ? edit and delete */}
                  {isOwner && (
                    <div className="flex items-center justify-end gap-2 border-t pt-4 mt-4">
                     <EditRoom room={room} ></EditRoom>

                      <Button
                        variant="danger"
                        className="rounded-full px-5 shadow-md hover:shadow-lg transition-all"
                      >
                        <BiTrash className="text-lg" />
                        <span>Delete</span>
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
              {/* Owner data */}
              <Card className="bg-surface/50 backdrop-blur-md border border-border/60 rounded-[2rem] p-6 shadow-lg">
                <div className="p-0 space-y-4">
                  <h4 className="text-xs uppercase font-black tracking-widest text-muted">
                    Listed By
                  </h4>

                  <div className="flex items-center gap-4">
                    <Avatar className="w-14 h-14 border-2 border-accent/20 rounded-2xl">
                      <Avatar.Image
                        alt={room?.userName}
                        src={room?.userImage || room?.imageUrl}
                      />
                      <Avatar.Fallback>{initial || "Adil"}</Avatar.Fallback>
                    </Avatar>
                    <div className="space-y-0.5">
                      <h4 className="text-lg font-bold text-foreground leading-tight">
                        {room?.userName || "Adil"}
                      </h4>
                      <p className="text-xs text-muted font-medium">
                        {room?.userEmail || "adil@gmail.com"}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </section>
        </main>
      </Wrapper>
    </div>
  );
};

export default RoomDetailesWrapper;
