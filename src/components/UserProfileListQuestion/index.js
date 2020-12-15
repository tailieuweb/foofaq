import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

//  MUI components
import Container from "@material-ui/core/Container";
import Skeleton from "@material-ui/lab/Skeleton";

// components
import QuestionCard from "../QuestionCard";
import UserPagination from "../UserPagination/index";

// styles
const useStyles = makeStyles((theme) => ({
  skeletion: {
    margin: "0.5rem auto",
  },
}));

const QuestionList = () => {
  const classes = useStyles();

  const [questions, setQuestions] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        "https://5fc4b01136bc790016343d03.mockapi.io/api/v1/users/2"
      );
      setQuestions(res.data.list_answers);
    })();
  }, []);
  return (
    <Container maxWidth="lg">
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
      <UserPagination totalPage={1} />
    </Container>
  );
};

export default QuestionList;
