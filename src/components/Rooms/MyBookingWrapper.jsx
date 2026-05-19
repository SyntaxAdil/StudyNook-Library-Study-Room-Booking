"use client";

import Wrapper from "./../shared/Wrapper";
import { motion } from "motion/react";
import {
  Button,
  Chip,
  Table,
  Avatar,
  Surface,
} from "@heroui/react";
import Image from "next/image";
import { CancelBooking } from "../modal/CancelBooking";

const MyBookingWrapper = ({ data }) => {
    
  return (
    <div className="py-8 md:py-12">
      <Wrapper>
        {/* header */}
        <motion.header
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8 md:mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">
            My Bookings
          </h1>

          <p className="text-muted text-sm md:text-base mt-2">
            Manage your upcoming and past room reservations.
          </p>
        </motion.header>

        {/* empty state */}
        {data?.length === 0 ? (
          <Surface className="rounded-3xl border border-default-200 p-10 text-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="size-16 rounded-full bg-default-100 flex items-center justify-center text-3xl">
                📚
              </div>

              <div>
                <h3 className="text-xl font-bold">No bookings yet</h3>
                <p className="text-muted mt-1">
                  You haven’t booked any study room yet.
                </p>
              </div>
            </div>
          </Surface>
        ) : (
          <>
            {/* desktop table */}
            <div className="hidden lg:block">
              <Surface className="rounded-3xl border border-default-200 overflow-hidden">
                <Table variant="secondary">
                  <Table.ScrollContainer>
                    <Table.Content
                      aria-label="Bookings table"
                      className="min-w-225"
                    >
                      <Table.Header>
                        <Table.Column isRowHeader>ROOM</Table.Column>
                        <Table.Column>DATE</Table.Column>
                        <Table.Column>TIME</Table.Column>
                        <Table.Column>COST</Table.Column>
                        <Table.Column>STATUS</Table.Column>
                        <Table.Column>ACTION</Table.Column>
                      </Table.Header>

                      <Table.Body>
                        {data?.map((booking) => (
                          <Table.Row key={booking?._id}>
                            {/* room */}
                            <Table.Cell>
                              <div className="flex items-center gap-3">
                                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-default-200">
                                  <Image
                                    src={booking?.roomImage}
                                    alt={booking?.roomName}
                                    fill
                                    className="object-cover"
                                  />
                                </div>

                                <div>
                                  <h4 className="font-bold leading-none">
                                    {booking?.roomName}
                                  </h4>

                                  <p className="text-xs text-muted mt-1">
                                    Floor {booking?.floor}
                                  </p>
                                </div>
                              </div>
                            </Table.Cell>

                            {/* date */}
                            <Table.Cell>
                              <span className="font-medium">
                                {booking?.date}
                              </span>
                            </Table.Cell>

                            {/* time */}
                            <Table.Cell>
                              <span className="font-medium">
                                {booking?.start}:00 - {booking?.end}:00
                              </span>
                            </Table.Cell>

                            {/* cost */}
                            <Table.Cell>
                              <span className="font-black text-accent">
                                ${booking?.totalPrice}
                              </span>
                            </Table.Cell>

                            {/* status */}
                            <Table.Cell>
                              <Chip
                                color={
                                  booking?.status === "confirmed"
                                    ? "success"
                                    : "danger"
                                }
                                className="capitalize"
                              >
                                {booking?.status}
                              </Chip>
                            </Table.Cell>

                            {/* action */}
                            <Table.Cell>
                              {booking?.status === "confirmed" ? (
                               <CancelBooking data={booking} />
                              ) : (
                                <Button
                                  isDisabled
                                  variant="secondary"
                                  className="rounded-xl"
                                >
                                  Cancelled
                                </Button>
                              )}
                            </Table.Cell>
                          </Table.Row>
                        ))}
                      </Table.Body>
                    </Table.Content>
                  </Table.ScrollContainer>
                </Table>
              </Surface>
            </div>

            {/* mobile + tablet cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:hidden">
              {data?.map((booking) => (
                <motion.div
                  key={booking?._id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Surface className="rounded-3xl border border-default-200 p-5 h-full">
                    {/* top */}
                    <div className="flex items-start gap-4">
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-default-200 shrink-0">
                        <Image
                          src={booking?.roomImage}
                          alt={booking?.roomName}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-black text-lg leading-tight">
                          {booking?.roomName}
                        </h3>

                        <p className="text-sm text-muted mt-1">
                          Floor {booking?.floor}
                        </p>

                        <Chip
                          color={
                            booking?.status === "confirmed"
                              ? "success"
                              : "danger"
                          }
                          className="mt-3 capitalize"
                        >
                          {booking?.status}
                        </Chip>
                      </div>
                    </div>

                    {/* booking info */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-default-100 rounded-2xl p-3">
                        <p className="text-xs text-muted mb-1">Date</p>
                        <h4 className="font-bold">{booking?.date}</h4>
                      </div>

                      <div className="bg-default-100 rounded-2xl p-3">
                        <p className="text-xs text-muted mb-1">Time</p>
                        <h4 className="font-bold">
                          {booking?.start}:00 - {booking?.end}:00
                        </h4>
                      </div>

                      <div className="bg-default-100 rounded-2xl p-3 col-span-2">
                        <p className="text-xs text-muted mb-1">Total Cost</p>

                        <h4 className="text-accent text-2xl font-black tracking-tight">
                          ${booking?.totalPrice}
                        </h4>
                      </div>
                    </div>

                    {/* action */}
                    <div className="mt-5">
                      {booking?.status === "confirmed" ? (
                        <Button
                          variant="danger"
                          className="w-full rounded-2xl h-11 font-bold"
                        >
                          Cancel Booking
                        </Button>
                      ) : (
                        <Button
                          isDisabled
                          variant="secondary"
                          className="w-full rounded-2xl h-11 font-bold"
                        >
                          Booking Cancelled
                        </Button>
                      )}
                    </div>
                  </Surface>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default MyBookingWrapper;