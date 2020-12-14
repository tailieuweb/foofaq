import React from "react";
import { Route } from "react-router-dom";
import PageLayoutManager from "../../common/PageLayoutManager";
import CategoriesForm from "../../components/FormManager/Categories";
export default function CategoryEdit() {
  return (
    <>
      <PageLayoutManager>
        <Route path="/forms/categories/:id" component={CategoriesForm}></Route>
      </PageLayoutManager>
    </>
  );
}
