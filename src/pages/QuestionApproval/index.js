import React from "react";
import { Route } from "react-router-dom";
import QuestionApprovalCard from "../../components/QuestionApprovalCard";
import HeaderAsideNavbar from "../../components/HeaderAsideNavbar";
import QuestionApprovalDetail from "../../components/QuetionAprovalDetail";
import PageLayoutManager from "../../common/PageLayoutManager";
const Index = () => {
  return (
    <PageLayoutManager>
      <div className="col-md-10">
        <Route exact path="/approval" component={QuestionApprovalCard} />
        <Route path="/approval/:id" component={QuestionApprovalDetail}></Route>
      </div>
    </PageLayoutManager>
  );
};

export default Index;
