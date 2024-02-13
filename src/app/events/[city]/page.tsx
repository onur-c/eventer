import EventsList from "@/components/EventsList";
import Heading1 from "@/components/Heading1";
import { EventerEvent } from "@/lib/types";

type EventsPageProps = {
  params: {
    city: string;
  };
};

const EventsPage = async ({ params: { city } }: EventsPageProps) => {
  const response = await fetch(process.env.EVENT_API + `?city=${city}`);
  const events: EventerEvent[] = await response.json();

  return (
    <main className="min-h-screen flex flex-col items-center py-20">
      <Heading1>
        {city === "all" ? (
          "All Events"
        ) : (
          <>
            Events in <span className="capitalize">{city}</span>
          </>
        )}
      </Heading1>
      <EventsList events={events} />
    </main>
  );
};

export default EventsPage;
