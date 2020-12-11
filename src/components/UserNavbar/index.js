import React, { useState, useEffect } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import { getOneUser } from "../../helpers/userAPI";
import "./index.scss";
function ProfileNavbar() {
  const [user, setUser] = useState({});
  useEffect(async () => {
    const data = await getOneUser();
    console.log("data user: ", data);
    setUser(data);
  }, []);
  return (
    <ul className="profile-header-tab nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/user-profile/profile"
          className="nav-link"
          data-toggle="tab"
        >
          Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/user-profile/activity"
          className="nav-link"
          data-toggle="tab"
        >
          Activity
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/user-profile/developer-story"
          className="nav-link"
          data-toggle="tab"
        >
          Developer Story
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/user-profile/editprofile"
          className="nav-link"
          data-toggle="tab"
        >
          Edit profile and settings
        </Link>
      </li>
    </ul>
  );
}
export default ProfileNavbar;
