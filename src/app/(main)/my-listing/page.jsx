import React from "react";
// import { getListingRooms } from "../../../lib/data/data";
import MyListingWrapper from "../../../sections/Rooms/MyListingWrapper";
import { auth } from "../../../lib/auth/auth";
import { headers } from "next/headers";
export const metadata = {
  title: "My Listing - StudyNook",
};
// get listing data by user id

const getListingRooms = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(process.env.NEXT_PUBLIC_URL + "/my-listing", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data.data;
};

const MyListing = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const rooms = await getListingRooms(user?.id);

  return (
    <div>
      <MyListingWrapper rooms={rooms}></MyListingWrapper>
    </div>
  );
};

export default MyListing;
