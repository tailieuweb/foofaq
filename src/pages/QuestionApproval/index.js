import React from "react";
import QuestionApprovalCard from "../../components/QuestionApprovalCard";
import { Route, Switch } from "react-router-dom";
//import QuestionApprovalDetail from "../../components/QuetionAprovalDetail";
const index = () => {
  return (
    <div>
      <Switch>
        <Route path="/approval" component={QuestionApprovalCard}></Route>

        {/* <Route
          path="/detailapproval"
          component={QuestionApprovalDetail}
        ></Route> */}
      </Switch>
    </div>
  );
};

export default index;
