import React from "react";
import QuestionGridViewManager from "../../components/QuestionGridViewManager";
import { Route, Link } from "react-router-dom";
// import JobsManager from "../../components/JobsManager";
// import EventsManager from "../../components/EventsManager";
// import CategoriesManager from "../../components/CategoriesManager";
import HeaderAsideNavbar from "../../components/HeaderAsideNavbar";
import JobsGridViewManager from "../../components/JobsGridViewManager";
import EventsGridViewManager from "../../components/EventsGridViewManager";
import CategoriesGridViewManager from "../../components/CategoriesGridViewManager";
import SearchBar from "../../components/SearchBar";
import Button from "@material-ui/core/Button";
function Manager(props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <HeaderAsideNavbar></HeaderAsideNavbar>
        </div>
        <div className="col-md-10">
          {/* <CategoriesManager /> */}
          <SearchBar></SearchBar>
          <Link to={`/form/`}>
            <Button
              style={{ margin: "30px" }}
              variant="contained"
              color="primary"
              size="small"
            >
              Add
            </Button>
          </Link>
          <Route
            path="/manager/categories"
            component={CategoriesGridViewManager}
          />
          <Route
            path="/manager/questions"
            component={QuestionGridViewManager}
          />
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
