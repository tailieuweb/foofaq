//import react
import React from "react";

//import component
import NavigationBar from "../../components/NavigationBar";
import QuestionForm from "../../components/QuestionForm";
import { Route } from "react-router-dom";
function QuestionCreateForm() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Route exact path="/form/" component={QuestionForm}></Route>{" "}
      <Route path="/form/:id" component={QuestionForm}></Route>{" "}
    </div>
  );
}

export default QuestionCreateForm;
