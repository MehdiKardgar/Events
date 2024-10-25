// index.js
// a route for all events

import { Fragment } from "react";

import EventsSearch from "@/components/events/events-search";
import EventList from "@/components/events/event-list";

import { getAllEvents } from "@/helpers/api-util";
import { useRouter } from "next/router";

export default function AllEventsPage(props) {
  const router = useRouter();

  const events = props.events;

  // const router = useRouter();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}/abc`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
