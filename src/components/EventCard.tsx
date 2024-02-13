import { EventerEvent } from "@/lib/types";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type EventCardProps = {
  event: EventerEvent;
};

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Link href={`/event/${event.slug}`}>
      <div
        key={event.id}
        className="flex flex-col h-[380px] w-[320px]  rounded-md shadow-md shadow-black/20 hover:scale-105 transition overflow-hidden relative "
      >
        <Image
          src={event.imageUrl}
          alt={`${event.name} event picture`}
          height={200}
          width={320}
        />
        <div className="flex flex-col gap-2 flex-1 p-2 justify-center items-center relative">
          <p className="flex gap-1 text-sm font-extralight opacity-70 ">
            <MapPin strokeWidth={1} />
            {event.location}
          </p>
          <p className="italic">By {event.organizerName}</p>
          <h2 className="text-3xl font-bold text-center">{event.name}</h2>
        </div>
        <div className="absolute top-2 right-0 bg-accent h-12 w-12 rounded-full text-sm flex items-center justify-center flex-col font-bold">
          <p>
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p>
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
