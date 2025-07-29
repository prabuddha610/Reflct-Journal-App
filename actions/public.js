"use server";

import { revalidateTag, unstable_cache } from "next/cache";



export const getDailyPrompt = unstable_cache(
  async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice", {
        cache: "no-store",
      });
      const data = await res.json();
      return data.slip.advice;
    } catch (error) {
      return {
        data: "What's on your mind today?",
      };
    }
  },
  ["daily-prompt"], // cache key
  {
    revalidate: 60, // 24 hours in seconds
    tags: ["daily-prompt"],
  }
);

// Optional: Function to force revalidate the cache
export async function revalidateDailyPrompt() {
  revalidateTag("daily-prompt");
}
