import { EventerEvent } from "@/lib/types";
import Image from "next/image";
import React from "react";

type EventCardProps = {
  event: EventerEvent;
};

const EventCard = ({ event }: EventCardProps) => {
  return (
    <div
      key={event.id}
      className="flex flex-col h-[480px] w-[320px]  rounded-md shadow-md shadow-black/20 hover:scale-105 transition overflow-hidden "
    >
      <Image
        src={event.imageUrl}
        alt={`${event.name} event picture`}
        height={200}
        width={320}
      />
      <div className="flex flex-col justify-center items-center flex-1">
        <h2>{event.name}</h2>
        <p>{event.organizerName}</p>
        <p>{event.location}</p>
      </div>
    </div>
  );
};

export default EventCard;
