import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// components
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

// icons
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import VisibilityIcon from "@material-ui/icons/Visibility";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

// custom style
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "0.5rem",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
  },
  vote: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: "0.5rem 0.5rem 0 0",
    },
  },
  views: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: "0.5rem 0.5rem 0 0",
    },
  },
  inline: {
    display: "inline",
  },
  buttonView: {
    height: "50px",
  },
  footerCard: {
    display: "flex",
    alignItems: "center",
  },
}));

const QuestionCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
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
          {/* content */}
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Link gutterBottom variant="h5">
                  How to use classes to “control dreams”?
                </Link>
                <Typography variant="body2" color="textSecondary">
                  Background I have been playing around with Deep Dream and
                  Inceptionism, using the Caffe framework to visualize layers of
                  GoogLeNet, an architecture built for the Imagenet project, a
                  large visual...
                </Typography>
                {/* categories */}
                <div className={classes.chips}>
                  <Chip label="JavaScript" clickable />
                  <Chip label="ReactJS" clickable />
                </div>
                {/* views and answer */}
                <Grid container spacing={2} className={classes.footerCard}>
                  {/* views */}
                  <Grid item xs={12} sm className={classes.views}>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<VisibilityIcon />}
                      className={classes.buttonView}
                    >
                      69k Views
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<QuestionAnswerIcon />}
                      className={classes.buttonView}
                    >
                      96k Answer
                    </Button>
                  </Grid>
                  {/* user */}
                  <Grid item className={classes.views}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="MaiaVictor"
                          src="/static/images/avatar/1.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="MaiaVictor"
                        secondary={"asked Mar 7 '18 at 22:44"}
                      />
                    </ListItem>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default QuestionCard;

