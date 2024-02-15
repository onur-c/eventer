import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";
import { z } from "zod";
import { unstable_cache } from "next/cache";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function delay(ms: number) {
  await new Promise((res) => {
    setTimeout(res, ms);
  });
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getEventsByCity = unstable_cache(
  async (city: string, page = 1) => {
    // const response = await fetch(process.env.EVENT_API + `?city=${city}`);
    // const events: EventerEvent[] = await response.json();
    const events = await prisma.eventerEvent.findMany({
      where: {
        city: city === "all" ? undefined : capitalizeFirstLetter(city),
      },
      orderBy: {
        date: "asc",
      },
      take: 6,
      skip: (page - 1) * 6,
    });

    let totalCount =
      city === "all"
        ? await prisma.eventerEvent.count()
        : await prisma.eventerEvent.count({
            where: {
              city: capitalizeFirstLetter(city),
            },
          });
    return { events, totalCount };
  }
);

export const getEvent = unstable_cache(async (slug: string) => {
  // const response = await fetch(process.env.EVENT_API + `/${slug}`);
  // const event: EventerEvent = await response.json();
  const event = await prisma.eventerEvent.findUnique({
    where: {
      slug,
    },
  });
  if (!event) {
    return notFound();
  }

  return event;
});

export const pageNumberSchema = z.number().int().positive().optional();
