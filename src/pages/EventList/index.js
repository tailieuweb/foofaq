import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

//  MUI components
import Skeleton from "@material-ui/lab/Skeleton";

// layout
import PageLayout from "../../common/PageLayout";

// components
import EventCard from "../../components/EventCard";
import EventSearchBar from "../../components/EventSearchBar";

// styles
const useStyles = makeStyles((theme) => ({
  skeletion: {
    margin: "1rem auto",
  },
}));

function EventList() {
  const classes = useStyles();

  const [events, setEvents] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        "https://5fc9a56e3c1c220016440eab.mockapi.io/events?page=1&limit=3"
      );
      setEvents(res.data);
    })();
  }, []);

  const handleSearch = async (eventName) => {
    setEvents(null);
    const res = await axios.get(
      `https://5fc9a56e3c1c220016440eab.mockapi.io/events?name=${eventName}&page=1&limit=3`
    );
    setEvents(res.data);
  };

  return (
    <PageLayout>
      <EventSearchBar handleSearch={handleSearch} />
      {events ? (
        events.map((event) => <EventCard key={event.id} event={event} />)
      ) : (
        <>
          <Skeleton
            className={classes.skeletion}
            variant="rect"
            width={1230}
            height={166}
          />
          <Skeleton
            className={classes.skeletion}
            variant="rect"
            width={1230}
            height={166}
          />
          <Skeleton
            className={classes.skeletion}
            variant="rect"
            width={1230}
            height={166}
          />
          <Skeleton
            className={classes.skeletion}
            variant="rect"
            width={1230}
            height={166}
          />
          <Skeleton
            className={classes.skeletion}
            variant="rect"
            width={1230}
            height={166}
          />
        </>
      )}
    </PageLayout>
  );
}

export default EventList;
