import React from "react";
import { getAllRooms } from "../../../lib/data/data";
import Wrapper from "../../../components/shared/Wrapper";
import AllRoomsWrapper from "../../../sections/Rooms/AllRoomsWrapper";
export const metadata = {
  title: "Available Rooms - StudyNook",
};
const Rooms = async ({searchParams}) => {
  const sParams= await searchParams;
  const allRooms = await getAllRooms(sParams.search,sParams.amenities,sParams.max,sParams.min);

  return (
    <div>
      <Wrapper>
        <AllRoomsWrapper  allRooms={allRooms}></AllRoomsWrapper>
      </Wrapper>
    </div>
  );
};

export default Rooms;
