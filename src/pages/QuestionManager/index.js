import React from "react";
import QuestionGridViewManager from "../../components/QuestionGridViewManager";
import { Route } from "react-router-dom";
import JobsManager from "../../components/JobsManager";
import EventsManager from "../../components/EventsManager";
import CategoriesManager from "../../components/CategoriesManager";
import HeaderAsideNavbar from "../../components/HeaderAsideNavbar";

function Manager(props) {
  return (
    <div>
      <div class="row">
        <div className="col-md-2">
          <HeaderAsideNavbar></HeaderAsideNavbar>
        </div>
        <div className="col-md-10">
          {/* <CategoriesManager /> */}
          <Route path="/manager/categories" component={CategoriesManager} />
          <Route
            path="/manager/questions"
            component={QuestionGridViewManager}
          />
          <Route path="/manager/jobs" component={JobsManager} />
          <Route path="/manager/events" component={EventsManager} />
          {/* <QuestionManager />
      <JobsManager />
      <EventsManager /> */}
        </div>
      </div>
    </div>
  );
}

export default Manager;
