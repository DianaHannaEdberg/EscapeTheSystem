import { useParams } from "react-router-dom";
import rooms from "../../data/rooms.json"; 
import items from "../../data/items.json";
import { useInventory, type Item } from "../InventoryContext.tsx"; 
import { useState } from "react";
import "./Room.css";


const Room = () => {



    const { roomPath } = useParams();  

    const { inventory, addItem } = useInventory();

    const [exitSolve, setExitSolve] = useState(false);

   const room = rooms.find(r => r.roomPath === roomPath); 

   if (!room) {
    return <h1>Room not found</h1>
   }


  let roomIsSolved = inventory.some( 
    (i) => i.id === room.itemToAdd);

    if (room.itemToAdd === null) {
      roomIsSolved = exitSolve;
    }

   const handleItemClick = (item: Item) => {
    if (item.id === room.itemToSolve && !roomIsSolved) {
      if (room.itemToAdd === null) {
        setExitSolve(true);
      } else {
      const reward = items.find(
        (i)=> i.id === room.itemToAdd);
 
      if (reward)
        addItem(reward)
        
    }
    }
  }
        let instruction = room.unsolvedInstruction;
        
        if (roomIsSolved) {
          instruction = room.solvedInstruction;
        }

        let image = room.unsolvedImage; 
        if (roomIsSolved) {
          image = room.solvedImage;
        }


  return (
    <div className="room">
        <h1>{ room.roomName }</h1>

        <p>{instruction}</p>
        <img src={image} alt={room.roomName} style={{ width: "300px" }} />

      

        <div className="inventory">
      
        {inventory.map((inventoryItem) => (

        <button 
        type="button"
        key={inventoryItem.id} 
        onClick={() => handleItemClick(inventoryItem)}
          className= {roomIsSolved && inventoryItem.id === room.itemToSolve 
          ? "used-item item-button" 
          : "item-button"}
          >
            <img 
            className="room-image" 
            src={inventoryItem.image} alt={inventoryItem.item} />
            <span>{inventoryItem.item}</span>

      
        </button>

      ))}
    </div>
        </div>
  )
}


  export default Room
