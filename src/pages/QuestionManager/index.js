import React from "react";
import { Route } from "react-router-dom";
import HeaderAsideNavbar from "../../components/HeaderAsideNavbar";
import UserManager from '../../components/UserManager/index';

function Manager(props) {
  return (
    <div>
      <div class="row">
        <div className="col-md-2">
          <HeaderAsideNavbar></HeaderAsideNavbar>
        </div>
        <div className="col-md-10">
          <Route path="/manager/user" component={UserManager} />
        </div>
      </div>
    </div>
  );
}

export default Manager;
