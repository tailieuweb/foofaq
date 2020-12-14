import React from "react";
import CategoriesForm from "../../components/FormManager/Categories";
import JobsForm from "../../components/FormManager/Jobs";
import EventFrom from "../../components/FormManager/Event";
import HeaderAsideNavbar from "../../components/HeaderAsideNavbar";
import PageLayout from "../../common/PageLayout";

import { Route } from "react-router-dom";

function FormManager(props) {
  return (
    <PageLayout>
      <div className="row">
        <div className="col-md-2">
        </div>
        <div className="col-md-10">
          <Route path="/forms/job/:id" component={JobsForm}></Route>{" "}
        </div>
      </div>
    </PageLayout>
  );
}

export default FormManager;
