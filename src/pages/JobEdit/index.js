import React from "react";
import JobsForm from "../../components/FormManager/Jobs";
import PageLayout from "../../common/PageLayout";

import { Route } from "react-router-dom";

function JobEdit(props) {
  return (
    <PageLayout>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <Route path="/forms/job/:id" component={JobsForm}></Route>{" "}
        </div>
      </div>
    </PageLayout>
  );
}

export default JobEdit;
