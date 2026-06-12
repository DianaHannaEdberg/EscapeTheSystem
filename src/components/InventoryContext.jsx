import { createContext, useContext, useState } from 'react'
import items from '../data/items.json'

export const InventoryContext = createContext()

const uvLight = items.find(i => i.id === 1) 

export function InventoryProvider({ children }) {
  const [inventory, setInventory] = useState([uvLight])

  const addItem = (item) => {
    setInventory(prev => [...prev, item])
  }

  return (
    <InventoryContext.Provider value={{ inventory, addItem }}>
      {children}
    </InventoryContext.Provider>
  )
}


export function useInventory() {
  return useContext(InventoryContext)
}
