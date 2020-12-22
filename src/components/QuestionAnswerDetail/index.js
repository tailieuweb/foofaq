import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

//custom Link
import Link from "../../common/CustomLink";

//material UI
import Skeleton from "@material-ui/lab/Skeleton";
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
import DoneIcon from "@material-ui/icons/Done";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

//APIS
import { getAnswers } from "../../helpers";
import { useParams } from "react-router-dom";

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
  doneIcon: {
    width: "100%",
    height: "50px",
    color: "green",
    display: "block",
    position: "relative",
    top: "24%",
  },
}));
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function MediaCard(props) {
  const classes = useStyles();
  const [answers, setAnswers] = useState([]);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [errorText, setErrorText] = useState("");

  let { id } = useParams();
  useEffect(() => {
    (async () => {
      const answersData = await getAnswers(id);
      setAnswers(answersData);
    })();
  }, [id]);

  const increaseVoteAnswer = (id) => {
    const answer = answers.find((item) => item.id === id);
    const index = answers.indexOf(answer);

    // console.log(answer);
    let voteUpAnswer = false;
    let voteDownAnswer = false;
    if (Cookies.get(`voteDownAnswer-${answer.id}`) === "true") {
      Cookies.remove(`voteDownAnswer-${answer.id}`);
    } else {
      Cookies.set(`voteUpAnswer-${answer.id}`, true);
      voteUpAnswer = true;
    }
    if (answer.point === undefined) {
      answer.point = 0;
    }
    setAnswers([
      ...answers.slice(0, index),
      {
        ...answer,
        point: answer.point + 1,
        voteUp: voteUpAnswer,
        voteDown: voteDownAnswer,
      },
      ...answers.slice(index + 1),
    ]);

    axios.put(
      `https://5fc48ee536bc790016343a0b.mockapi.io/questions/${answer.questionId}/answers/${answer.id}`,
      {
        point: answer.point + 1,
        voteUp: voteUpAnswer,
        voteDown: voteDownAnswer,
      }
    );
  };
  const decreaseVoteAnswer = (id) => {
    const answer = answers.find((item) => item.id === id);
    const index = answers.indexOf(answer);

    // console.log(answer);
    let voteUpAnswer = false;
    let voteDownAnswer = false;
    if (Cookies.get(`voteUpAnswer-${answer.id}`) === "true") {
      Cookies.remove(`voteUpAnswer-${answer.id}`);
    } else {
      Cookies.set(`voteDownAnswer-${answer.id}`, true);
      voteDownAnswer = true;
    }
    if (answer.point === undefined) {
      answer.point = 0;
    }
    setAnswers([
      ...answers.slice(0, index),
      {
        ...answer,
        point: answer.point - 1,
        voteUp: voteUpAnswer,
        voteDown: voteDownAnswer,
      },
      ...answers.slice(index + 1),
    ]);

    axios.put(
      `https://5fc48ee536bc790016343a0b.mockapi.io/questions/${answer.questionId}/answers/${answer.id}`,
      {
        point: answer.point - 1,
        voteUp: voteUpAnswer,
        voteDown: voteDownAnswer,
      }
    );
  };
  const exactlyAnswer = (id) => {
    const answer = answers.find((item) => item.id === id);
    const index = answers.indexOf(answer);
    const exists = answers.find((item) => item.exact === true);
    if (exists) {
      setErrorText("The correct answer is already exists");
      setOpenError(true);
    } else {
      setAnswers([
        ...answers.slice(0, index),
        {
          ...answer,
          exact: true,
        },
        ...answers.slice(index + 1),
      ]);
      axios.put(
        `https://5fc48ee536bc790016343a0b.mockapi.io/questions/${answer.questionId}/answers/${answer.id}`,
        {
          exact: true,
        }
      );
      setOpenSuccess(true);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
    setOpenError(false);
  };

  return (
    <div className={classes.root}>
      {answers ? (
        answers.map((item) => (
          <Paper key={item.createdAt} elevation={3}>
            <Grid container spacing={1}>
              <Grid item xs={1}>
                {item.exact ? <DoneIcon className={classes.doneIcon} /> : <></>}
              </Grid>

              <Grid item xs={1}>
                <Grid item className={classes.vote}>
                  <IconButton
                    aria-label="upvote"
                    disabled={item.voteUp}
                    onClick={() => increaseVoteAnswer(item.id)}
                  >
                    <ArrowDropUpIcon />
                  </IconButton>
                  <Typography gutterBottom variant="h4">
                    {item.point}
                  </Typography>
                  <IconButton
                    aria-label="downvote"
                    disabled={item.voteDown}
                    onClick={() => decreaseVoteAnswer(item.id)}
                  >
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
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.createdAt}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={7}>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.content}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
            <Link to={`/answer/edit/${item.questionId}/${item.id}`}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.buttonEdit}
              >
                Edit <EditIcon />
              </Button>
            </Link>
            <Button
              variant="outlined"
              color="secondary"
              disabled={item.exact}
              className={classes.buttonEdit}
              onClick={() => exactlyAnswer(item.id)}
            >
              EXACT <DoneIcon />
            </Button>
          </Paper>
        ))
      ) : (
        <>
          <Skeleton
            className={classes.skeletion}
            variant="rect"
            width={800}
            height={200}
          />
          <Skeleton
            className={classes.skeletion}
            variant="rect"
            width={800}
            height={200}
          />
        </>
      )}
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {errorText}
        </Alert>
      </Snackbar>
    </div>
  );
}
