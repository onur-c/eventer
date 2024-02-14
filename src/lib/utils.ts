import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";

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

export async function getEventsByCity(city: string) {
  // const response = await fetch(process.env.EVENT_API + `?city=${city}`);
  // const events: EventerEvent[] = await response.json();
  const events = await prisma.eventerEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalizeFirstLetter(city),
    },
    orderBy: {
      date: "asc",
    },
  });
  return events;
}

export async function getEvent(slug: string) {
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
}
