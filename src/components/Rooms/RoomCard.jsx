"use client";
import { Card, Chip, Button } from "@heroui/react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { BiDollar } from "react-icons/bi";
import { LuLayers, LuUsers } from "react-icons/lu";

const RoomCard = ({ room }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="h-full"
    >
      <Card className="bg-surface border border-border/60 rounded-2xl overflow-hidden hover:shadow-xl hover:border-accent/40 transition-all duration-300 flex flex-col h-full p-4 space-y-2">

        {/* Image */}
        <div className="relative w-full h-52 rounded-md overflow-hidden bg-muted group">
          <Image
            src={room?.imageUrl}
            alt={room?.roomName}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-md"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          <div className="absolute top-4 right-4 z-10">
            <Chip className="bg-background/80 backdrop-blur-md border border-border/40 font-bold text-foreground">
              ${room?.hourlyRate}/hr
            </Chip>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 flex-1">

          {/* Title + Description */}
          <div>
            <h3 className="text-xl font-bold tracking-tight text-foreground line-clamp-1">
              {room?.roomName}
            </h3>
            <p className="text-muted text-xs mt-1 line-clamp-2 leading-relaxed">
              {room?.description}
            </p>
          </div>

          {/* Floor + Capacity */}
          <div className="flex items-center gap-5 text-sm font-medium text-muted/80 bg-field-background/40 py-2.5 px-4 rounded-xl border border-border/30">
            <div className="flex items-center gap-2">
              <LuLayers className="text-base text-foreground/70" />
              <span className="capitalize">{room?.floor}</span>
            </div>

            <div className="w-px h-4 bg-border/60" />

            <div className="flex items-center gap-2">
              <LuUsers className="text-base text-foreground/70" />
              <span>{room?.capacity} people</span>
            </div>
          </div>

          {/* Booking Count */}
          <div className="flex items-center gap-2 text-sm font-medium text-muted/80 bg-field-background/40 py-2.5 px-4 rounded-xl border border-border/30">
            <BiDollar className="text-base text-foreground/70" />
            <span>{room?.bookingCount ?? 0} bookings</span>
          </div>

          {/* Amenities */}
          {room?.amenities?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {room.amenities.slice(0, 3).map((a) => (
                <Chip
                  key={a}
                  size="sm"
                  variant="flat"
                  className="bg-accent/5 text-accent border border-accent/10 font-medium text-[11px] capitalize"
                >
                  {a.replace("_", " ")}
                </Chip>
              ))}

              {room.amenities.length > 3 && (
                <span className="text-[11px] text-muted font-medium self-center pl-1">
                  +{room.amenities.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>


        <div className="pt-2 mt-auto">
          <Link href={`/room-detailes/${room._id}`}>
            <Button className="w-full h-11 bg-accent text-accent-foreground font-bold rounded-xl shadow-md hover:opacity-90 active:scale-[0.98] transition-all">
              View Details
            </Button>
          </Link>
        </div>

      </Card>
    </motion.div>
  );
};

export default RoomCard;