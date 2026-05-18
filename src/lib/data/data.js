export const getAllRooms = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_URL + "/rooms", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.data;
};
