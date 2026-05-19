import React from "react";
import { getListingRooms } from "../../../lib/data/data";
import MyListingWrapper from "../../../sections/Rooms/MyListingWrapper";
import { auth } from "../../../lib/auth/auth";
import { headers } from "next/headers";

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
