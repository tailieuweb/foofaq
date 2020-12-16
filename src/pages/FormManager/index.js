import React from "react";
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
            path="/forms/adduser/"
            component={UserForm}
          ></Route>
          <Route path="/forms/update/:id" component={UserForm}></Route>{" "}
        </div>
      </div>
    </div>
  );
}

export default FormManager;
