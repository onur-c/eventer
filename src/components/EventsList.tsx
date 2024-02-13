import { EventerEvent } from "@/lib/types";
import React from "react";
import EventCard from "./EventCard";

type EventsListProps = {
  events: EventerEvent[];
};

const EventsList = ({ events }: EventsListProps) => {
  return (
    <section className="flex flex-wrap p-12 items-center justify-center gap-16">
      {events.map((event) => {
        return <EventCard event={event} key={event.id} />;
      })}
    </section>
  );
};

export default EventsList;
