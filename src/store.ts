import { create } from "zustand"
import { OrderItem } from "./types"
import { Product } from "./generated/prisma/client"

interface Store {
  order: OrderItem[]
  addToOrder: (product: Product) => void
  increaseQunatity: (id: Product['id']) => void
}

export const useStore = create<Store>((set, get) => ({
  order: [],
  addToOrder: (product) => {
    // Strip fields not needed in the order item; keep only id, name, price, etc.
    const {categoryId, image, ...data} = product
    let items : OrderItem[] = []

    if (get().order.find(item => item.id === data.id)) {
      items = get().order.map(item => item.id === data.id ? {
        ...item,
        quantity: item.quantity + 1,
        subtotal: item.price * (item.quantity + 1)
      } : item)
    } else {
      items = [...get().order, {
        ...data,
        quantity: 1,
        subtotal: 1 * product.price
      }]
    }

    set(() => ({
      order: items
    }))
  },
  increaseQunatity: (id) => {
    set((state) => ({
      order: state.order.map(item => item.id === id ? {
        ...item,
        quantity: item.quantity + 1,
        subtotal: item.price * (item.quantity + 1)
      } : item)
    }))
  }
}))