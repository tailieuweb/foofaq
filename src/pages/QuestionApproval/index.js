import React from "react";
//import { Route } from "react-router-dom";
import QuestionApprovalCard from "../../components/QuestionApprovalCard";
// import HeaderAsideNavbar from "../../components/HeaderAsideNavbar";
// import QuestionApprovalDetail from "../../components/QuetionAprovalDetail";
import PageManagerLayout from "../../common/PageManagerLayout";
const Index = () => {
  return (
    <PageManagerLayout float={"left"} display={"none"}>
      <QuestionApprovalCard />
      {/* <Route path="/approval/:id" component={QuestionApprovalDetail}></Route> */}
    </PageManagerLayout>
  );
};

export default Index;
