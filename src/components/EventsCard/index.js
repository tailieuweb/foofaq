import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonBase, Grid, Paper, Typography } from "@material-ui/core";
import { allEvent } from "../../helpers/helper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();
  const [events, setEvents] = useState("");
  useEffect(() => {
    (async () => {
      const EventData = await allEvent();
      setEvents(EventData);
      console.log(EventData);
    })();
  }, []);
  console.log(events);
  return (
    <div className={classes.root}>
      {events ? (
        events.map((event) => (
          <Paper className={classes.paper} key={event.id}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src={event.image}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="h5">
                      {event.name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      {event.date.slice(0, 10)}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      {event.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ))
      ) : (
        <label>Failed</label>
      )}
    </div>
  );
}
