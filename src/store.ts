import { create } from "zustand"
import { OrderItem } from "./types"
import { Product } from "./generated/prisma/client"
import { products } from "@/prisma/data/products"

interface Store {
  order: OrderItem[]
  addToOrder: (product: Product) => void
}

export const useStore = create<Store>(() => ({
  order: [],
  addToOrder: (product) => {
    console.log('Agregando', product)
  }
}))