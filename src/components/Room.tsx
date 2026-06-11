import { useParams } from "react-router-dom";

const Room = () => {
    const { roomPath } = useParams();   
  return (
    <div>
        <h1>{ roomPath }
        </h1>

        </div>
  )
}

export default Room;