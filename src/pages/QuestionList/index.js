import React, { useState, useEffect } from "react";
import axios from "axios";

const QuestionList = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [userMessages, setUserMessages] = useState(null);
  const [userSetting, setUserSetting] = useState(null);

  useEffect(() => {
    (async () => {
      const user = await axios.get("http://localhost:8080/user/1");
      console.log(user.data);
      setUserInfo(user.data.user);
      setUserMessages(user.data.messages);
      setUserSetting(user.data.userSetting);
    })();
  }, []);

  return (
    <div>
      {/* User Info */}
      <h2>User Info</h2>
      <ul>{userInfo ? <li>{userInfo.name}</li> : "Loading..."}</ul>
      {/* USer Messages */}
      <h2>User Messages</h2>
      <ul>
        {userMessages
          ? userMessages.map((item) => (
              <li key={item.id}>
                {item.sender}: {item.content}
              </li>
            ))
          : "Loading..."}
      </ul>
      {/* USer Setting */}
      <h2>User Setting</h2>
      <ul>
        {userSetting
          ? Object.entries(userSetting).map(([key, value]) => {
              return (
                <li key={key}>
                  {key} : {value.toString()}
                </li>
              );
            })
          : "Loading..."}
      </ul>
    </div>
  );
};

export default QuestionList;
