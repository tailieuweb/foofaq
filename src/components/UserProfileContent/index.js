import React, { useState, useEffect } from "react";
import UserCardSummary from '../../components/UserCardSummary/index';
import { getOneUser } from "../../helpers/userAPI";
import "./index.scss";

function ProfileContent() {
  const [user, setUser] = useState({});
  useEffect(async () => {
    const data = await getOneUser();
    console.log("data user: ", data);
    setUser(data);
  }, []);
  return (
    <div className="profile-content">
      <div className="tab-content p-0">
            <UserCardSummary/>
      </div>
    </div>
  );
}
export default ProfileContent;
