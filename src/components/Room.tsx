import { useParams } from "react-router-dom";
import rooms from "./../data/rooms.json"; 

const Room = () => {
    const { roomPath } = useParams();  

   const room = rooms.find((room) => room.roomPath === roomPath); 

   if (!room) {
    return <h1>Room not found</h1>
   }

  return (
    <div>
        <h1>{ room.roomName }
            <p>{ room.unsolvedInstruction }</p>
        </h1>

        </div>
  )
}
export default Room;