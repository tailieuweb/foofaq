import React, { useState } from "react";
import { Route } from "react-router-dom";
import QuestionApprovalCard from "../../components/QuestionApprovalCard";
import QuestionApprovalDetail from "../../components/QuetionAprovalDetail";
const index = () => {
  return (
    <div>
      <Route path="/approval" component={QuestionApprovalCard}></Route>
      <Route path="/approvaldetail" component={QuestionApprovalDetail}></Route>
    </div>
  );
};

export default index;
