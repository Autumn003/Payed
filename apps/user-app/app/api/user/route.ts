import { NextResponse } from "next/server";
import db from "@repo/db/client";

export const GET = async () => {
    await db.user.create({
        data: {
            email: "asd",
            name: "adsads",
            number: "0000000000",
            password: "12345678"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}