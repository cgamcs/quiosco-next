"use server"

import { OrderSchame } from "@/src/schema"

export async function createOrder(data: unknown) {
  const result = OrderSchame.safeParse(data)

  if (!result.success) {
    return {
      errors: result.error.issues
    }
  }
}