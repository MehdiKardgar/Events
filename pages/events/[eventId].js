//  page for a single event

import { useRouter } from "next/router";
import { Fragment } from "react";

import { getEventById } from "@/dummy-data";

import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";

export default function EventDetailPage(params) {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>This page doesn't exist.</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

// {
//   id: "e1",
//   title: "Programming for everyone",
//   description:
//     "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
//   location: "Somestreet 25, 12345 San Somewhereo",
//   date: "2021-05-12",
//   image: "images/coding-event.jpg",
//   isFeatured: false,
// }
