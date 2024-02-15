import EventsList from "@/components/EventsList";
import Heading1 from "@/components/Heading1";
import { capitalizeFirstLetter, pageNumberSchema } from "@/lib/utils";
import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";
import type { ReadonlyURLSearchParams } from "next/navigation";

type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params: { city } }: Props): Metadata {
  return {
    title: `Events in ${capitalizeFirstLetter(city)} | Eventer`,
  };
}

const EventsPage = ({ params: { city }, searchParams }: EventsPageProps) => {
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) throw new Error("Invalid page number");

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
      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
};

export default EventsPage;
