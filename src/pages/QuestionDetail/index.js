//import react
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

//import style
import "./index.scss";
import useStyles from "./classes";

//material
import Typography from "@material-ui/core/Typography";
// import Skeleton from "@material-ui/lab/Skeleton";

//components
import QuestionAnswerDetail from "../../components/QuestionAnswerDetail";
import QuestionInfoDetail from "../../components/QuestionInfoDetail";
import AnswerForm from "../../components/AnswerForm";
import PageLayout from "../../common/PageLayout";
import { Grid } from "@material-ui/core";

//APIS
import { getQuesitonById, getAnswers } from "../../helpers";

const QuestionDetail = (props) => {
  const classes = useStyles();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  // const [categories, setCategories] = useState([]);
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

  // console.log(categories);
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
    <PageLayout>
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
    </PageLayout>
  );
};
export default QuestionDetail;
