//import react
import React, { useEffect, useState } from "react";

//import style
import "./index.scss";
import useStyles from "./classes";

//material
import Typography from "@material-ui/core/Typography";

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
  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState([]);
  let id = props.match.params.id;

  useEffect(() => {
    (async () => {
      const question = await getQuesitonById(id);
      setData(question);
    })();
  }, [id]);

  useEffect(() => {
    (async () => {
      const answersData = await getAnswers(id);
      setAnswers(answersData);
    })();
  }, [id]);

  return (
    <PageLayout>
      <QuestionInfoDetail question={data} className={classes.questionInfo} />
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
              {answers !== null ? (
                answers.map((answer) => (
                  <QuestionAnswerDetail key={answer.id} answer={answer} />
                ))
              ) : (
                <div />
              )}
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
