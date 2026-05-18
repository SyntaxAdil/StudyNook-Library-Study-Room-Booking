
import { getRoomsById, getUserById } from '../../../../lib/data/data';
import RoomDetailesWrapper from './../../../../components/Rooms/RoomDetailesWrapper';

const RoomDetailes = async ({ params }) => {
  const { id } = await params;
  const room = await getRoomsById(id);

  
  
  
  
  return (
    <div>
      <RoomDetailesWrapper  room={room}  />
    </div>
  );
};

export default RoomDetailes;
