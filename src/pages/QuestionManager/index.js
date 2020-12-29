import React from "react";
import { Route } from "react-router-dom";
import HeaderAsideNavbar from "../../components/HeaderAsideNavbar";
import UserManager from '../../pages/UserManager/index';
import FormManager from "../FormManager/index";
function Manager(props) {
  return (
    <div>
      <div class="row">
        <div className="col-md-2">
          <HeaderAsideNavbar></HeaderAsideNavbar>
        </div>
        <div className="col-md-10">
          <Route path="/manager/user" component={UserManager} />
          <Route path="/manager/add-user/" component={FormManager}></Route>
          <Route path="/manager/edit/" component={FormManager}></Route>
        </div>
      </div>
    </div>
  );
}

export default Manager;
