import React from "react";

//style
import useStyles from "./classes";

//material UI
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import IconButton from "@material-ui/core/IconButton";

export default function MediaCard({ answer }) {
  const classes = useStyles();
  const { content } = answer;
  function FormRow() {
    return (
      <Grid container spacing={1}>
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
              {content}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    );
  }
  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <FormRow />
      </Paper>
    </div>
  );
}
