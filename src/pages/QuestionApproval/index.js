import React from "react";
import { Route, Switch } from "react-router-dom";
import QuestionApprovalCard from "../../components/QuestionApprovalCard";
import HeaderAsideNavbar from "../../components/HeaderAsideNavbar";
// import QuestionManager from "../../components/QuestionManager/index";
//import QuestionApprovalDetail from "../../components/QuetionAprovalDetail";
const Index = () => {
  return (
    <div>
      <div class="row">
        <div className="col-md-2">
          <HeaderAsideNavbar></HeaderAsideNavbar>
        </div>
        <div className="col-md-10">
          <Switch>
            <Route path="/approval" component={QuestionApprovalCard} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Index;
