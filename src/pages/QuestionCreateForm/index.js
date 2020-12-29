//import react
import React from "react";

//import component
import PageLayout from "../../common/PageLayout";
import QuestionForm from "../../components/QuestionForm";
import { Route, Switch } from "react-router-dom";

function QuestionCreateForm() {
  return (
    <PageLayout>
      <Switch>
        <Route path="/forms/question/:id" component={QuestionForm}></Route>{" "}
      </Switch>
    </PageLayout>
  );
}

export default QuestionCreateForm;
