//import react
import React, { useEffect, useState } from "react";

//import style
import "./index.scss";
import { makeStyles } from "@material-ui/core/styles";

//material
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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
}));

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
    <div>
      <div className="Nav">
        <Paper>
          <NavigationBar />
        </Paper>
      </div>
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
    </div>
  );
};
export default QuestionDetail;
