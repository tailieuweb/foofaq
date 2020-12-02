import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

//  MUI components
import Container from "@material-ui/core/Container";
import Skeleton from "@material-ui/lab/Skeleton";

// components
import QuestionCard from "../../components/QuestionCard";
import AdvancedFilter from "../../components/AdvancedFilter";

// styles
const useStyles = makeStyles((theme) => ({
  skeletion: {
    margin: "0.5rem auto",
  },
}));

const QuestionList = () => {
  const classes = useStyles();

  const [questions, setQuestions] = useState(null);
  const [questionsRaw, setQuestionsRaw] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        "https://5fc48ee536bc790016343a0b.mockapi.io/questions?page=1&limit=1"
      );
      setQuestionsRaw(res.data);
    })();
  }, []);

  useEffect(() => {
    if (questionsRaw) {
      const questionProcessed = [];
      questionsRaw.map((question, index) => {
        const resCategories = axios.get(
          `https://5fc48ee536bc790016343a0b.mockapi.io/questions/${question.id}/categories`
        );
        const resAnswers = axios.get(
          `https://5fc48ee536bc790016343a0b.mockapi.io/questions/${question.id}/answers`
        );
        axios.all([resCategories, resAnswers]).then(
          axios.spread((...res) => {
            question.categories = res[0].data;
            question.answers = res[1].data;

            questionProcessed.push(question);
            if (index === questionsRaw.length - 1) {
              setQuestions(questionProcessed);
            }
          })
        );
        return null;
      });
    }
  }, [questionsRaw]);

  return (
    <Container maxWidth="lg">
      <AdvancedFilter />
      {questions ? (
        questions.map((question) => (
          <QuestionCard
            key={question.id}
            className={classes.skeletion}
            question={question}
          />
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
          <Skeleton
            className={classes.skeletion}
            variant="rect"
            width={800}
            height={200}
          />
        </>
      )}
    </Container>
  );
};

export default QuestionList;
