import React from "react";
import CategoriesForm from "../../components/FormManager/Categories";
import JobsForm from "../../components/FormManager/Jobs";
import EventFrom from "../../components/FormManager/Event";
import HeaderAsideNavbar from "../../components/HeaderAsideNavbar";
import UserForm from "../../components/FormManager/User"
import { Route } from "react-router-dom";

function FormManager(props) {
  return (
    <div>
      <div class="row">
        <div className="col-md-2">
          <HeaderAsideNavbar></HeaderAsideNavbar>
        </div>
        <div className="col-md-10">
          <Route
            exact
            path="/forms/categories/"
            component={CategoriesForm}
          ></Route>
          <Route
            exact
            path="/forms/adduser/"
            component={UserForm}
          ></Route>
          <Route
            path="/forms/categories/:id"
            component={CategoriesForm}
          ></Route>{" "}
          <Route exact path="/forms/job/" component={JobsForm}></Route>
          <Route path="/forms/job/:id" component={JobsForm}></Route>{" "}
          <Route exact path="/forms/event/" component={EventFrom}></Route>{" "}
          <Route path="/forms/event/:id" component={EventFrom}></Route>{" "}
        </div>
      </div>
    </div>
  );
}

export default FormManager;
