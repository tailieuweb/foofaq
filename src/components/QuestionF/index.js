import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import IconButton from "@material-ui/core/IconButton";
const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    flexGrow: 1,
    maxWidth: 800,
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  userAnswerInfo: {
    backgroundColor: "#D5E8D4",
  },
  vote: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 30,
  },
}));

export default function MediaCard() {
  const classes = useStyles();
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={1}>
          <Grid item className={classes.vote}>
            <IconButton aria-label="upvote">
              <ArrowDropUpIcon />
            </IconButton>
            <Typography gutterBottom variant="h4">
              0
            </Typography>
            <IconButton aria-label="downvote">
              <ArrowDropDownIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <CardContent className={classes.userAnswerInfo}>
            <Avatar alt="Cindy Baker" src="" />
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              September 14, 2016
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={8}>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Paper elevation={3}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
