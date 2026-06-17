import { createContext, useContext, useState, type ReactNode } from 'react'
import items from '../data/items.json'

export type Item = {
  id: number
  item: string
  description: string
  image: string
}

type InventoryContextType = {
  inventory: Item[]
  addItem: (item: Item) => void
}

export const InventoryContext = createContext<InventoryContextType | undefined>(undefined)

const uvLight = items.find(i => i.id === 1)

export function InventoryProvider({ children }: { children: ReactNode }) {

  const [inventory, setInventory] = useState<Item[]>(uvLight ? [uvLight] : [])

  const addItem = (item: Item) => {

    setInventory((currentInventory) => {
      if (currentInventory.some((inventoryItem) => inventoryItem.id === item.id)) {
        return currentInventory
      }

      return [...currentInventory, item]
    })

  }


  return (
    <InventoryContext.Provider value={{ inventory, addItem }}>
      {children}
    </InventoryContext.Provider>
  )
}


export function useInventory() {
  const context = useContext(InventoryContext)

  if (!context) {
    throw new Error('useInventory must be used inside InventoryProvider')
  }

  return context
};
