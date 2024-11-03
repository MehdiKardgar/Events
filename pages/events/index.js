// index.js
// a route for all events

import { Fragment } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import EventsSearch from "@/components/events/events-search";
import EventList from "@/components/events/event-list";

import { getAllEvents } from "@/helpers/api-util";

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
      <Head>
        <title>All my events</title>
      </Head>

      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>

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
