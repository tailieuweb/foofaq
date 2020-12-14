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
          <Route exact path="/forms/job/" component={JobsForm}></Route>
    </PageLayout>
  );
}

export default FormManager;
