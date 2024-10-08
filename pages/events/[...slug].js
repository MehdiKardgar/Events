// [...slug].js
//  slug route
//  it works when we enter more than one dynamic parameter after /events. e.g., /events/2020/8/13

import { Fragment } from "react";
import { useRouter } from "next/router";

import ResultsTitle from "@/components/events/results-title";
import EventList from "@/components/events/event-list";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";

import { getFilteredEvents } from "@/dummy-data";

export default function FilteredEventsPage(params) {
  const router = useRouter();

  const filterData = router.query.slug;
  // console.log(filterData);

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}
