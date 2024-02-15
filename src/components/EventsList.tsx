import { getEventsByCity } from "@/lib/utils";
import EventCard from "./EventCard";
import PageButtons from "./PageButtons";

type EventsListProps = {
  city: string;
  page?: number;
};

const EventsList = async ({ city, page = 1 }: EventsListProps) => {
  const { events, totalCount } = await getEventsByCity(city, page);
  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";
  return (
    <section className="flex flex-col">
      {events.length === 0 ? (
        "No events found at the moment."
      ) : (
        <>
          <div className="flex flex-wrap p-12 items-center justify-center gap-16">
            {events.map((event) => {
              return <EventCard event={event} key={event.id} />;
            })}
          </div>
          <PageButtons previousPath={previousPath} nextPath={nextPath} />
        </>
      )}
    </section>
  );
};

export default EventsList;
