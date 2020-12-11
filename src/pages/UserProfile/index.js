import React, { useState, useEffect } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import ProfileNavbar from "../../components/UserNavbar/index";
import ProfileContent from "../../components/UserProfileContent/index";
import UserDetailStoryFirst from "../../components/UserDetailStoryFirst/index";
import UserEditProfile from "../../components/UserEditProfile/index";
import UserProfile from "../../components/UserProfile/index";
import { getOneUser } from "../../helpers/userAPI";
import "./index.scss";
function Profile() {
  const [user, setUser] = useState({});
  useEffect(async () => {
    const data = await getOneUser();
    console.log("data user: ", data);
    setUser(data);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div id="content" className="content content-full-width">
            {/* begin profile */}
            <div className="profile">
              <div className="profile-header">
                {/* BEGIN profile-header-cover */}
                <div className="profile-header-cover" />
                {/* END profile-header-cover */}
                {/* BEGIN profile-header-content */}
                <div className="profile-header-content">
                  {/* BEGIN profile-header-img */}
                  <div className="profile-header-img">
                    <img src={user.user_avatar} alt="" />
                  </div>
                  {/* END profile-header-img */}
                  {/* BEGIN profile-header-info */}
                  <div className="profile-header-info">
                    <h4 className="m-t-10 m-b-5">{user.user_name}</h4>
                    <p className="m-b-10">{user.user_title}</p>
                    <Link to="/user-profile/editprofile" className="btn btn-sm btn-info mb-2">
                      Edit Profile
                    </Link>
                  </div>
                  {/* END profile-header-info */}
                </div>
                {/* END profile-header-content */}
                {/* BEGIN profile-header-tab */}
                <ProfileNavbar />
                {/* END profile-header-tab */}
              </div>
            </div>
            {/* end profile */}
            {/* begin profile-content */}
            <Route path="/user-profile/profile" component={UserProfile}></Route>
            <Route path="/user-profile/activity" component={ProfileContent}></Route>
            <Route path="/user-profile/developer-story" component={UserDetailStoryFirst}></Route>
            <Route path="/user-profile/editprofile" component={UserEditProfile}></Route>

            {/* end profile-content */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
