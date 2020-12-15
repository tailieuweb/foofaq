import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

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

const QuestionCard = ({ question }) => {
  const classes = useStyles();

  const {
    title,
    description
  } = question;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          {/* content */}
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Link gutterBottom variant="h5">
                  {title}
                </Link>
                <Typography variant="body2" color="textSecondary">
                  {description.length <= 150
                    ? description
                    : description.slice(0, 150) + "..."}
                </Typography>
              
               
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default QuestionCard;
