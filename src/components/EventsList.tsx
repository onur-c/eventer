import { getEventsByCity } from "@/lib/utils";
import EventCard from "./EventCard";

type EventsListProps = {
  city: string;
};

const EventsList = async ({ city }: EventsListProps) => {
  const events = await getEventsByCity(city);

  return (
    <section className="flex flex-wrap p-12 items-center justify-center gap-16">
      {events.length === 0 && "No events found at the moment."}
      {events.map((event) => {
        return <EventCard event={event} key={event.id} />;
      })}
    </section>
  );
};

export default EventsList;
