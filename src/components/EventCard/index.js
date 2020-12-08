import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "1rem auto",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  coverWrapper: {
    padding: theme.spacing(1),
  },
  cover: {
    width: 150,
    height: 150,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

function EventCard({ event }) {
  const classes = useStyles();

  const { imageUri, name, date, place, description } = event;

  return (
    <Card className={classes.root}>
      <div className={classes.coverWrapper}>
        <CardMedia className={classes.cover} image={imageUri} title={name} />
      </div>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {`${date.split("T")[0]}, ${place}`}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}

export default EventCard;
