import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL as string);

interface CacheValue {
    message: string; // Add other properties as needed
}

// Update your function definition
export const setCache = async <T extends CacheValue>(key: string, value: T, ttl = 3600): Promise<void> => {
    try {
        await redis.set(key, JSON.stringify(value), 'EX', ttl);
    } catch (error) {
        console.log("Error setting cache: ", error);
    }
};

// export const setCache = async <T>(key: string, value: Text, ttl = 3600): Promise<void> => {
//     try {
//         await redis.set(key, JSON.stringify(value), 'EX', ttl);
//     } catch (error) {
//         console.log("Error setting cache: ", error);
//     }
// };

export const getCache = async <T>(key: string): Promise<T | null> => {
    try {
        const data = await redis.get(key);
        return data ? JSON.parse(data) as T : null
    } catch (error) {
        console.log("Error getting cache: ", error);
        return null;
    }
};

export default redis;   