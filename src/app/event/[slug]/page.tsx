import { EventerEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type EventPageProps = {
  params: {
    slug: string;
  };
};
const EventPage = async ({ params: { slug } }: EventPageProps) => {
  const response = await fetch(process.env.EVENT_API + `/${slug}`);
  const event: EventerEvent = await response.json();

  return (
    <main className="min-h-screen w-full">
      <div className="w-full h-96 relative overflow-hidden flex flex-col items-center justify-center">
        <Image
          src={event.imageUrl}
          alt={`${event.name} photo`}
          fill={true}
          className="blur-xl -z-10"
        />
        <div className="z-10 flex gap-8 flex-wrap justify-center">
          <div className="border-accent border-solid border-[1px]  rounded-sm overflow-hidden">
            <Image
              src={event.imageUrl}
              alt={`${event.name} photo`}
              width={240}
              height={180}
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="opacity-60 text-sm">
              {new Date(event.date).toLocaleDateString("en-US", {
                dateStyle: "full",
              })}
            </p>
            <h2 className="text-4xl font-bold">{event.name}</h2>
            <p className="opacity-60">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <Link
              href={""}
              className="mt-auto w-full bg-accent/70 text-center p-2 rounded border-white/20 border-[1px] hover:border-white hover:bg-accent transition"
            >
              Get Tickets
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-12 flex-col pt-12 items-center justify-center">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h3 className="font-bold text-2xl">About this event</h3>
          <p className="text-center w-3/4 tracking-wider text-sm opacity-80 text-balance">
            {event.description}
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <h3 className="font-bold text-2xl">Location</h3>
          <p className="opacity-80">{event.location}</p>
        </div>
      </div>
    </main>
  );
};

export default EventPage;
