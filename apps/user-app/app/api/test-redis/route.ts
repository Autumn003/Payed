import { NextResponse } from 'next/server';
import { setCache, getCache } from "@repo/store/redisClient"


export const POST = async(req: Request) => {
  try {
      // Set a test cache item
      await setCache("testKey", { message: "Hello, Redis!" }, 60); // Cache expires in 60 seconds

      // Retrieve the test cache item
      const cachedData = await getCache<{ message: string }>("testKey");

      return NextResponse.json({ cachedData });
  } catch (error) {
      return NextResponse.json({ error: "Redis test failed" }, { status: 500 });
  }
}

// You can add more methods (GET, PUT, DELETE) as needed
export const GET = async(req: Request) => {
  try {
      const cachedData = await getCache<{ message: string }>("testKey");
      return NextResponse.json({ cachedData });
  } catch (error) {
      return NextResponse.json({ error: "Redis test failed" }, { status: 500 });
  }
}