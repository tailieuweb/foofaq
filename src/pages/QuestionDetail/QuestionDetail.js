//import react
import React from "react";

//import style
import "./QuestionDetail.scss";

//material
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

//components
import QuestionAnswerDetail from "../../components/QuestionAnswerDetail/QuestionAnswerDetail";
import QuestionInfoDetail from "../../components/QuestionInfoDetail/QuestionInfoDetail";
import AnswerForm from "../../components/AnswerForm/AnswerForm";

const QuestionDetail = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="Nav">
        <Paper>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Paper>
      </div>
      <QuestionInfoDetail />
      <QuestionAnswerDetail />
      <AnswerForm />
    </div>
  );
};
export default QuestionDetail;
