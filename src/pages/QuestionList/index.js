import React from "react";
import { Redirect } from "react-router-dom";

const QuestionList = () => {
  if (!localStorage.getItem("accessToken")) return <Redirect to="/login" />;

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default QuestionList;
