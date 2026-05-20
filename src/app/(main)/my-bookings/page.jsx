import React from "react";
import { headers } from "next/headers";
import { auth } from "../../../lib/auth/auth";
import MyBookingWrapper from "../../../components/Rooms/MyBookingWrapper";
import { getBookingData } from "../../../lib/data/data";


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
