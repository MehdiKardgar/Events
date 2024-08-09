// a route for all events

import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/dummy-data";

export default function AllEventsPage(params) {
  const events = getAllEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}
