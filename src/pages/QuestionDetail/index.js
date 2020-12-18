//import react
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

//import style
import "./index.scss";
import { makeStyles } from "@material-ui/core/styles";

//material
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
// import Skeleton from "@material-ui/lab/Skeleton";

//components
import QuestionAnswerDetail from "../../components/QuestionAnswerDetail";
import QuestionInfoDetail from "../../components/QuestionInfoDetail";
import AnswerForm from "../../components/AnswerForm";
import NavigationBar from "../../components/NavigationBar";
import { Grid } from "@material-ui/core";

//APIS
import { getQuesitonById, getAnswers } from "../../helpers";

//style
const useStyles = makeStyles((theme) => ({
  questionInfo: {
    margin: "5%",
  },
  answerDetail: {
    margin: "5%",
    border: "1px solid #ced4da",
    width: "89.5%",
    borderRadius: " 15px",
    position: "relative",
  },
  answersText: {
    position: "absolute",
    top: "-5%",
    left: "1%",
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "5px 15px",
    borderRadius: "5px",
  },
  skeletion: {
    margin: "0.5rem auto",
  },
}));

const QuestionDetail = (props) => {
  const classes = useStyles();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  let id = props.match.params.id;

  useEffect(() => {
    (async () => {
      const question = await getQuesitonById(id);
      setQuestions(question);
    })();
  }, [id]);

  useEffect(() => {
    (async () => {
      const answersData = await getAnswers(id);
      setAnswers(answersData);
    })();
  }, [id]);

  let answersCount = 0;

  if (answers.length) {
    answersCount = parseInt(answers.length);
  }

  const increaseVote = () => {
    let voteUpQuestion = false;
    let voteDownQuestion = false;
    if (Cookies.get(`voteDownQuestion-${questions.id}`) === "true") {
      Cookies.remove(`voteDownQuestion-${questions.id}`);
    } else {
      Cookies.set(`voteUpQuestion-${questions.id}`, true);
      voteUpQuestion = true;
    }

    setQuestions({
      ...questions,
      point: questions.point + 1,
      voteUp: voteUpQuestion,
      voteDown: voteDownQuestion,
    });
    axios
      .put(
        `https://5fc48ee536bc790016343a0b.mockapi.io/questions/${questions.id}`,
        {
          ...questions,
          point: questions.point + 1,
          voteUp: voteUpQuestion,
          voteDown: voteDownQuestion,
        }
      )
      .then(console.log(questions));
  };
  const decreaseVote = () => {
    let voteUpQuestion = false;
    let voteDownQuestion = false;
    if (Cookies.get(`voteUpQuestion-${questions.id}`) === "true") {
      Cookies.remove(`voteUpQuestion-${questions.id}`);
    } else {
      Cookies.set(`voteDownQuestion-${questions.id}`, true);
      voteDownQuestion = true;
    }

    setQuestions({
      ...questions,
      point: questions.point - 1,
      voteUp: voteUpQuestion,
      voteDown: voteDownQuestion,
    });
    axios
      .put(
        `https://5fc48ee536bc790016343a0b.mockapi.io/questions/${questions.id}`,
        {
          ...questions,
          point: questions.point - 1,
          voteUp: voteUpQuestion,
          voteDown: voteDownQuestion,
        }
      )
      .then(console.log(questions));
  };

  return (
    <div>
      <div className="Nav">
        <Paper>
          <NavigationBar />
        </Paper>
      </div>
      <QuestionInfoDetail
        answersCount={answersCount}
        question={questions}
        className={classes.questionInfo}
        increaseVote={increaseVote}
        decreaseVote={decreaseVote}
      />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} className={classes.answerDetail}>
              <Typography
                className={classes.answersText}
                variant="subtitle1"
                gutterBottom
              >
                Answers
              </Typography>
              <QuestionAnswerDetail />
            </Grid>
            <Grid item xs={12}>
              <AnswerForm />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default QuestionDetail;
