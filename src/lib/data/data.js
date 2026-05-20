"use server";
import { headers } from "next/headers";
import { auth } from "../auth/auth";

// all rooms with search,filter,min max
export const getAllRooms = async (search, amenities, max, min) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/rooms?search=${search || ""}&amenities=${amenities || ""}&max=${max || ""}&min=${min || ""}`,
    {
      cache: "no-store",
    },
  );
  const data = await res.json();
  return data.data;
};
// featured
export const getFeauturedRooms = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_URL + "/featured-rooms", {
    cache: "no-store",
  });
  const data = await res.json();

  return data.data;
};
// by id
export const getRoomsById = async (id) => {
  const res = await fetch(process.env.NEXT_PUBLIC_URL + "/rooms/" + id);
  const data = await res.json();
  return data.data;
};

// get user data

// export const getUserById = async (id) => {
//   const res = await fetch(process.env.NEXT_PUBLIC_URL + "/users/" + id);
//   const data = await res.json();
//   return data.data;
// };

// get booking data

export const getBookingData = async (id) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    process.env.NEXT_PUBLIC_URL + "/my-bookings",

    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await res.json();
  return data.data;
};

// get listing data by user id

export const getListingRooms = async (id) => {
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
