import React from "react";
import QuestionApprovalCard from "../../components/QuestionApprovalCard";
import PageManagerLayout from "../../common/PageManagerLayout";
const QuestionApproval = () => {
  return (
    <>
      <PageManagerLayout float={"left"}>
        <QuestionApprovalCard />
      </PageManagerLayout>
    </>
  );
};

export default QuestionApproval;
