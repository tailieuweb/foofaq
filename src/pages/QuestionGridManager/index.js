import React from "react";
import QuestionGridViewManager from "../../components/QuestionGridViewManager";
import { Route } from "react-router-dom";

function QuestionGridManager(props) {
  return (
    <div>
      <Route path="/manager/questions" component={QuestionGridViewManager} />
    </div>
  );
}

export default QuestionGridManager;
