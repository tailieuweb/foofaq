//import react
import React from "react";

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

//style
const useStyles = makeStyles((theme) => ({
  answerDetail: {
    margin: "0px",
    border: "1px solid #ced4da",
    width: "89.5%",
    borderRadius: " 15px",
    position: "relative",
  },
  answersText: {
    position: "absolute",
    top: "-10%",
    left: "1%",
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "5px 15px",
    borderRadius: "5px",
  },
}));

const QuestionDetail = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="Nav">
        <Paper>
          <NavigationBar />
        </Paper>
      </div>
      <QuestionInfoDetail />
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={10}>
          <Grid container>
            <Grid item className={classes.answerDetail}>
              <Typography
                className={classes.answersText}
                variant="subtitle1"
                gutterBottom
              >
                Answers
              </Typography>
              <QuestionAnswerDetail />
            </Grid>
            <Grid item>
              <AnswerForm />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default QuestionDetail;
