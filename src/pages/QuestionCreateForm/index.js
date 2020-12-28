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
        <Route exact path="/questionAdd/" component={QuestionForm}></Route>{" "}
        <Route path="/questionAdd/:id" component={QuestionForm}></Route>{" "}
      </Switch>
    </PageLayout>
  );
}

export default QuestionCreateForm;
