import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonBase, Grid, Paper, Typography } from "@material-ui/core";
import img from "../../images/et.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
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

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  Q12020 Events
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  27 Jan–06 Apr 2020, Global
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  All events with the exception of SaaStr 2020 that the Stack
                  Overflow team will be at in Q12020. Events are in the US and
                  London.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
