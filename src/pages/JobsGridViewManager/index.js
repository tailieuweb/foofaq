import React from "react";
import JobsGridViewManager from "../../components/JobsGridViewManager";
import PageManagerLayout from "../../common/PageManagerLayout";

const JobsGirdManager = () => {
  return (
    <PageManagerLayout float={"left"}>
      <JobsGridViewManager />
    </PageManagerLayout>
  );
};

export default JobsGirdManager;
