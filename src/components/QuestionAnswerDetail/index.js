import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import Link from "../../common/CustomLink";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2% auto",
    flexGrow: 1,
    maxWidth: "89.5%",
    width: "89.5%",
    display: "block",
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
  buttonEdit: {
    float: "right",
    position: "relative",
    right: "2%",
    bottom: "43px",
    display: "block",
  },
}));

export default function MediaCard({ answer }) {
  const classes = useStyles();
  const { id, questionId, createdAt, content } = answer;

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
              {createdAt}
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
        <Link to={`/answer/edit/${questionId}/${id}`}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.buttonEdit}
          >
            Edit <EditIcon />
          </Button>
        </Link>
      </Paper>
    </div>
  );
}
