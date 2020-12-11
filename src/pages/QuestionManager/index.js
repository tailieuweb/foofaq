import React from "react";
import QuestionManager from "../../components/QuestionManager";
import { Route } from "react-router-dom";
import JobsManager from "../../components/JobsManager";
import EventsManager from "../../components/EventsManager";
import CategoriesManager from "../../components/CategoriesManager";
import HeaderAsideNavbar from "../../components/HeaderAsideNavbar";
import JobsGridViewManager from "../../components/JobsGridViewManager";
import EventsGridViewManager from "../../components/EventsGridViewManager";

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
          <Route path="/manager/questions" component={QuestionManager} />
          <Route path="/manager/jobs" component={JobsGridViewManager} />
          <Route path="/manager/events" component={EventsGridViewManager} />
          {/* <QuestionManager />
      <JobsManager />
      <EventsManager /> */}
        </div>
      </div>
    </div>
  );
}

export default Manager;
