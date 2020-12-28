import React from "react";
import { Route } from "react-router-dom";
import PageLayout from "../../common/PageLayout";
import CategoriesGridView from "../../components/CategoriesGridView";

export default function QuestionCategoryList() {
  return (
    <>
      <PageLayout>
        <Route exact path="/categories/" component={CategoriesGridView}></Route>
      </PageLayout>
    </>
  );
}