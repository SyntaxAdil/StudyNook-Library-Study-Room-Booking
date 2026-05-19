import React from "react";
import { getBookingData } from "../../lib/data/data";
import { auth } from "../../lib/auth/auth";
import { headers } from "next/headers";
import MyBookingWrapper from "../../components/Rooms/MyBookingWrapper";

const MyBookings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const bookingData = await getBookingData(user?.id);

  return (
    <div>
      <MyBookingWrapper data={bookingData} />
    </div>
  );
};

export default MyBookings;
