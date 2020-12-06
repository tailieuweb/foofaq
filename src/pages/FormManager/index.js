import React from "react";
// import CategoriesForm from "../../components/FormManager/Categories";
// import JobsForm from "../../components/FormManager/Jobs";
import EventFrom from "../../components/FormManager/Event";

import { Route } from "react-router-dom";

function FormManager(props) {
  return (
    <div>
      {/* <Route exact path="/forms/categories/" component={CategoriesForm}></Route>
      <Route
        path="/forms/categories/:id"
        component={CategoriesForm}
      ></Route>{" "} */}
      <Route exact path="/forms/event/" component={EventFrom}></Route>{" "}
      <Route path="/forms/event/:id" component={EventFrom}></Route>{" "}
    </div>
  );
}

export default FormManager;
