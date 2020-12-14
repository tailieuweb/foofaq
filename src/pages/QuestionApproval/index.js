import React from "react";
import { Route } from "react-router-dom";
import QuestionApprovalCard from "../../components/QuestionApprovalCard";
import HeaderAsideNavbar from "../../components/HeaderAsideNavbar";
const QuestionApproval = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <HeaderAsideNavbar></HeaderAsideNavbar>
        </div>
        <div className="col-md-10">
          <Route exact path="/approval" component={QuestionApprovalCard} />
        </div>
      </div>
    </div>
  );
};

export default QuestionApproval;
