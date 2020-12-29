//import react
import React from "react";

//import component
import PageManagerLayout from "../../common/PageManagerLayout";
import JobsGridViewManager from "../../components/JobsGridViewManager";

function JobsGridViewPage() {
    return (
      <PageManagerLayout float={"left"}>
        <JobsGridViewManager/>
      </PageManagerLayout>
    );
  }
  
export default JobsGridViewPage;
  