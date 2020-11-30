import React, { useState, useEffect } from "react";
// import axios from "axios";

import QuestionCard from "../../components/QuestionCard";

const QuestionList = () => {
  // const [userInfo, setUserInfo] = useState(null);
  // const [userMessages, setUserMessages] = useState(null);
  // const [userSetting, setUserSetting] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     const user = await axios.get("http://localhost:8080/user/1");
  //     console.log(user.data);
  //     setUserInfo(user.data.user);
  //     setUserMessages(user.data.messages);
  //     setUserSetting(user.data.userSetting);
  //   })();
  // }, []);

  return (
    <div>
      <QuestionCard />
    </div>
  );
};

export default QuestionList;
