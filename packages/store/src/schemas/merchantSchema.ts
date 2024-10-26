import { z } from "zod";
import { AuthType } from "@prisma/client";

export const MerchantSchema = z.object({
    email: z.string().email(),
    name: z.string().optional(),
    auth_type: z.enum([AuthType.google]), // Enum validation
});

export type MerchantType = z.infer<typeof MerchantSchema>;