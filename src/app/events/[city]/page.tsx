import EventsList from "@/components/EventsList";
import Heading1 from "@/components/Heading1";
import { capitalizeFirstLetter } from "@/lib/utils";
import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export function generateMetadata({
  params: { city },
}: EventsPageProps): Metadata {
  return {
    title: `Events in ${capitalizeFirstLetter(city)} | Eventer`,
  };
}

const EventsPage = ({ params: { city } }: EventsPageProps) => {
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
      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
};

export default EventsPage;
