import React from "react";
import CategoriesForm from "../../components/FormManager/Categories";
import JobsForm from "../../components/FormManager/Jobs";
import EventForm from "../../components/FormManager/Event";
import PageLayout from "../../common/PageLayout";

import { Route } from "react-router-dom";

function FormManager(props) {
  return (
    <PageLayout>
      <Route exact path="/forms/categories/" component={CategoriesForm}></Route>
      <Route
        path="/forms/categories/:id"
        component={CategoriesForm}
      ></Route>{" "}
      <Route exact path="/forms/job/" component={JobsForm}></Route>
      <Route path="/forms/job/:id" component={JobsForm}></Route>{" "}
      <Route exact path="/forms/event/" component={EventForm}></Route>{" "}
      <Route path="/forms/event/:id" component={EventForm}></Route>{" "}
    </PageLayout>
  );
}

export default FormManager;
