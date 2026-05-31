import { z } from "zod"

export const OrderSchame = z.object({
  name: z.string().min(1, 'Tu nombre es obligatorio'),

})