import React from "react";
import { Route } from "react-router-dom";
import PageLayoutManager from "../../common/PageLayoutManager";
import CategoryForm from "../../components/CategoryForm";

export default function CategoryEdit() {
  return (
    <>
      <PageLayoutManager>
        <Route exact path="/forms/category/" component={CategoryForm}></Route>
      </PageLayoutManager>
    </>
  );
}
