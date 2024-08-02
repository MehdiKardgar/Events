//  This file is our route page, our home page,

import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummy-data";

export default function HomePage(params) {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
