import { useParams } from "react-router-dom";
import rooms from "./../data/rooms.json"; 
import items from "../data/items.json";
import { useInventory } from "./InventoryContext"; 


const Room = () => {
    const { roomPath } = useParams();  

    const { inventory, addItem } = useInventory();

   const room = rooms.find(r => r.roomPath === roomPath); 

   if (!room) {
    return <h1>Room not found</h1>
   }


  const roomIsSolved = inventory.some( 
    (i) => i.id === room.itemToAdd);

   const handleItemClick = (item) => {
    if (item.id === room.itemToSolve && !roomIsSolved) {
      const reward = items.find(
        (i)=> i.id === room.itemToAdd);


      if (reward)
        addItem(reward)
    }
  }
        let instruction = room.unsolvedInstruction;
        
        if (roomIsSolved) {
          instruction = room.solvedInstruction;
        }

  return (
    <div>
        <h1>{ room.roomName }</h1>

        <p>{instruction}</p>

        <div>
      
        {inventory.map((inventoryItem) => (

        <button key={inventoryItem} 
        onClick={() => handleItemClick(inventoryItem)}>

          {inventoryItem.item}
        </button>

      ))}
    </div>
        </div>
  )
}


  export default Room