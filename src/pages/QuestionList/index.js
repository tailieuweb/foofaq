import React from "react";
import { useHistory } from "react-router-dom";

const QuestionList = () => {
  const history = useHistory();
  function handleClick(e) {
    localStorage.removeItem("accessToken");
    history.replace("/login");
  }
  return (
    <div>
      <h1>Hello World</h1>
      <button
        onClick={handleClick}
      >Logout</button>
    </div>
  );
};

export default QuestionList;
