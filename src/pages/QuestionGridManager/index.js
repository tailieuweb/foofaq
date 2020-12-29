import React from "react";
import QuestionGridViewManager from "../../components/QuestionGridViewManager";
import { Route } from "react-router-dom";
import PageLayoutManager from "../../common/PageLayoutManager";
function QuestionGridManager(props) {
  return (
    <>
      <PageLayoutManager float={"left"}>
        <QuestionGridViewManager />
      </PageLayoutManager>
    </>
  );
}

export default QuestionGridManager;
