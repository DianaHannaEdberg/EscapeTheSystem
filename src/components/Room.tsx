import { useParams } from "react-router-dom";
 import rooms from "./../data/rooms.json"; 

const Room = () => {
    const { roomPath } = useParams();  

   const room = rooms.find((room) => room.roomPath === roomPath); 
  return (
    <div>
        <h1>{ roomPath }
        </h1>

        </div>
  )
}
export default Room;