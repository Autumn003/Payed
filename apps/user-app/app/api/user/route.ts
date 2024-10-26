import { NextResponse } from "next/server";
import {UserSchema, UserType} from "@repo/store/userSchema";
import db from "@repo/db/client";
import { z } from "zod";

export const GET = async () => {
    await db.user.create({
        data: {
            email: "ajgfsd",
            name: "adjggfjsads",
            number: "00550000000",
            password: "12345678"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}

export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        const validatedUser: UserType = UserSchema.parse(body); // Validate input

        // Create user in database
        const user = await db.user.create({
            data: {
                email: validatedUser.email,
                name: validatedUser.name,
                number: validatedUser.number,
                password: validatedUser.password, // Ensure this is hashed before storing
            },
        });

        return NextResponse.json(user);
    } catch (error) {
        if (error instanceof z.ZodError) {
            // If the error is a Zod error, extract the validation errors
            return NextResponse.json({ errors: error.errors }, { status: 400 });
        }

        // For other errors
        return NextResponse.json({ error: "User creation failed" }, { status: 500 });
    }
};