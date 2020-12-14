import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Cookies from "js-cookie";

// layout
import PageLayout from "../../common/PageLayout";

//  MUI components
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
        "https://5fc48ee536bc790016343a0b.mockapi.io/questions?page=1&limit=3"
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
        // for test
        // const resCategories = null;
        // const resAnswers = null;

        axios.all([resCategories, resAnswers]).then(
          axios.spread((...res) => {
            question.categories = res[0].data;
            question.answers = res[1].data;

            // for test
            // question.categories = ['javascript', 'react'];
            // question.answers = [1, 2, 3, 4, 5];

            question.voteUp = Cookies.get(`voteUp-${question.id}`) === 'true'
              ? true
              : false;
            question.voteDown = Cookies.get(`voteDown-${question.id}`) === 'true'
              ? true
              : false;

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

  const handleSearch = (params) => {
    (async () => {
      const res = await axios.get(
        `https://5fc48ee536bc790016343a0b.mockapi.io/questions?${params}&page=1&limit=3`
      );
      setQuestionsRaw(res.data);
    })();
  };

  const increasePoint = (id) => {
    const question = questions.find((item) => item.id === id);
    const index = questions.indexOf(question);

    let voteUp = false;
    let voteDown = false;

    if (Cookies.get(`voteDown-${question.id}`) === 'true') {
      Cookies.remove(`voteDown-${question.id}`);
    } else {
      Cookies.set(`voteUp-${question.id}`, true);
      voteUp = true;
    }

    setQuestions([
      ...questions.slice(0, index),
      {
        ...question,
        point: question.point + 1,
        voteUp: voteUp,
        voteDown: voteDown,
      },
      ...questions.slice(index + 1),
    ]);

    axios.put(
      `https://5fc48ee536bc790016343a0b.mockapi.io/questions/${question.id}`,
      {
        ...question,
        point: question.point + 1,
      }
    );
  };

  const decreasePoint = (id) => {
    const question = questions.find((item) => item.id === id);
    const index = questions.indexOf(question);

    let voteUp = false;
    let voteDown = false;

    if (Cookies.get(`voteUp-${question.id}`) === 'true') {
      Cookies.remove(`voteUp-${question.id}`);
    } else {
      Cookies.set(`voteDown-${question.id}`, true);
      voteDown = true;
    }

    setQuestions([
      ...questions.slice(0, index),
      {
        ...question,
        point: question.point - 1,
        voteUp: voteUp,
        voteDown: voteDown,
      },
      ...questions.slice(index + 1),
    ]);

    axios.put(
      `https://5fc48ee536bc790016343a0b.mockapi.io/questions/${question.id}`,
      {
        ...question,
        point: question.point - 1,
      }
    );
  };

  return (
    <PageLayout maxWidth="lg">
      <AdvancedFilter handleSearch={handleSearch} />
      {questions ? (
        questions.map((question) => (
          <QuestionCard
            key={question.id}
            className={classes.skeletion}
            question={question}
            increasePoint={increasePoint}
            decreasePoint={decreasePoint}
            voteUp={question.voteUp}
            voteDown={question.voteDown}
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
    </PageLayout>
  );
};

export default QuestionList;
