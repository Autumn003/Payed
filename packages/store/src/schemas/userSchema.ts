import { number, z } from "zod";

export const UserSchema = z.object({
    email: z.string().email().optional(),
    name: z.string().optional(),
    number: z.string().min(10).max(15),
    password: z.string().min(6),
});

export type UserType = z.infer<typeof UserSchema>;