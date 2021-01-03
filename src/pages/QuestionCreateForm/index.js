//import react
import React from "react";

//import component
import NavigationBar from "../../partials/NavigationBar";
import QuestionForm from "../../components/QuestionForm";
import { Route, Switch } from "react-router-dom";

function QuestionCreateForm() {
  return (
    <NavigationBar>
      <Switch>
        <Route exact path="/forms/question" component={QuestionForm}></Route>{" "}
      </Switch>
    </NavigationBar>
  );
}

export default QuestionCreateForm;