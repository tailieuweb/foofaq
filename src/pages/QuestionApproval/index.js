import React, { useState } from "react";
import QuestionApprovalCard from "../../components/QuestionApprovalCard";
import { Route } from "react-router-dom";
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
