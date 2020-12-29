import React from "react";
import PageManagerLayout from "../../common/PageManagerLayout";
import QuestionGridViewManager from "../../components/QuestionGridViewManager";

const QuestionGirdManager = () => {
  return (
    <>
      <PageManagerLayout float={"left"}>
        <QuestionGridViewManager />
      </PageManagerLayout>{" "}
    </>
  );
};

export default QuestionGirdManager;
