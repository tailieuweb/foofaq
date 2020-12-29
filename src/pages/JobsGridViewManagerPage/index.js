//import react
import React from "react";

//import component
import PageLayoutManager from "../../common/PageLayoutManager";
import JobsGridViewManager from "../../components/JobsGridViewManager";

function JobsGridViewPage() {
    return (
      <PageLayoutManager>
        <JobsGridViewManager/>
      </PageLayoutManager>
    );
  }
  
export default JobsGridViewPage;
  