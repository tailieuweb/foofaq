import React from "react";
import QuestionGridViewManager from "../../components/QuestionGridViewManager";
import { Route } from "react-router-dom";
import PageManagerLayout from "../../common/PageManagerLayout";
function QuestionGridManager(props) {
  return (
    <>
      <PageManagerLayout float={"left"}>
        <QuestionGridViewManager />
      </PageManagerLayout>
    </>
  );
}

export default QuestionGridManager;
