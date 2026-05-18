import React from 'react'
import { getAllRooms } from '../../../lib/data/data'
import Wrapper from '../../../components/shared/Wrapper'
import AllRoomsWrapper from '../../../sections/Rooms/AllRoomsWrapper'

const Rooms = async() => {
  const allRooms=await getAllRooms()
  return (
    <div>
        <Wrapper>
          <AllRoomsWrapper allRooms={allRooms} ></AllRoomsWrapper>

        </Wrapper>

    </div>
  )
}

export default Rooms