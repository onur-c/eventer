import { EventerEvent } from "@/lib/types";
import React from "react";
import EventCard from "./EventCard";
import { delay } from "@/lib/utils";

type EventsListProps = {
  city: string;
};

const EventsList = async ({ city }: EventsListProps) => {
  const response = await fetch(process.env.EVENT_API + `?city=${city}`);
  const events: EventerEvent[] = await response.json();
  await delay(2000);

  return (
    <section className="flex flex-wrap p-12 items-center justify-center gap-16">
      {events.map((event) => {
        return <EventCard event={event} key={event.id} />;
      })}
    </section>
  );
};

export default EventsList;
