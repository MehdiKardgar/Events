// a route for all events

import { Fragment } from "react";

import EventsSearch from "@/components/events/events-search";
import EventList from "@/components/events/event-list";

import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";

export default function AllEventsPage(params) {
  const events = getAllEvents();

  const router = useRouter();
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
