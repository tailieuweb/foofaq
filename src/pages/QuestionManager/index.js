import React from "react";
import QuestionManager from "../../components/QuestionManager";
import { Route } from "react-router-dom";
import JobsManager from "../../components/JobsManager";
import EventsManager from "../../components/EventsManager";
import CategoriesManager from "../../components/CategoriesManager";

function Manager(props) {
  return (
    <div>
      <CategoriesManager />
      <QuestionManager />
      <JobsManager />
      <EventsManager />
    </div>
  );
}

export default Manager;
