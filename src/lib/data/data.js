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
export const getFeauturedRooms = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_URL + "/feautred-rooms", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.data;
};
