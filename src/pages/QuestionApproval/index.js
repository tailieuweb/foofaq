import React, { useState } from "react";
import { Route } from "react-router-dom";
import QuestionApprovalCard from "../../components/QuestionApprovalCard";
import QuestionApprovalDetail from "../../components/QuetionAprovalDetail";
const index = () => {
  return (
    <div>
      <QuestionApprovalCard></QuestionApprovalCard>
      <Route path="/detailapproval" component={QuestionApprovalDetail}></Route>
    </div>
  );
};

export default index;
