import React from "react";
import { Route } from "react-router-dom";
import PageManagerLayout from "../../common/PageManagerLayout";
import CategoryForm from "../../components/CategoryForm";

export default function CategoryEdit() {
  return (
    <>
      <PageManagerLayout >
        <Route exact path="/forms/categories/" component={CategoryForm}></Route>
      </PageManagerLayout>
    </>
  );
}
