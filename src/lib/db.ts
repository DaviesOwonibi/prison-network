import { Redis } from "@upstash/redis";

export const db = new Redis({
	url: "https://welcomed-tortoise-34184.upstash.io",
	// url: process.env.UPSTASH_REDIS_REST_URL,
	token: process.env.UPSTASH_REDIS_REST_TOKEN,
});
