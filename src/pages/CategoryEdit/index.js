import React from "react";
import { Route } from "react-router-dom";
import PageManagerLayout from "../../common/PageManagerLayout";
import CategoriesForm from "../../components/CategoryForm";
export default function CategoryEdit() {
  return (
    <>
      <PageManagerLayout>
        <Route path="/forms/categories/:id" component={CategoriesForm}></Route>
      </PageManagerLayout>
    </>
  );
}
