import { create } from "zustand"
import { OrderItem } from "./types"
import { Product } from "./generated/prisma/client"

interface Store {
  order: OrderItem[]
  addToOrder: (product: Product) => void
}

export const useStore = create<Store>((set) => ({
  order: [],
  addToOrder: (product) => {
    // Strip fields not needed in the order item; keep only id, name, price, etc.
    const {categoryId, image, ...data} = product
    
    set((state) => ({
      order: [...state.order, {
        ...data,
        quantity: 1,
        subtotal: 1 * product.price
      }]
    }))
  }
}))