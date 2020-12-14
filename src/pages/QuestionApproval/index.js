import React from "react";
import { Route } from "react-router-dom";
import QuestionApprovalCard from "../../components/QuestionApprovalCard";
import HeaderAsideNavbar from "../../components/HeaderAsideNavbar";
import QuestionApprovalDetail from "../../components/QuetionAprovalDetail";
const Index = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <HeaderAsideNavbar></HeaderAsideNavbar>
        </div>
        <div className="col-md-10">
          <Route exact path="/approval" component={QuestionApprovalCard} />
          <Route
            path="/approval/:id"
            component={QuestionApprovalDetail}
          ></Route>
        </div>
      </div>
    </div>
  );
};

export default Index;
