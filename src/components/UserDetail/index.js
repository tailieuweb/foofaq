import React, { useState, useEffect } from "react";
import { API_GET_ONE_USER } from "../../helpers/index";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`${API_GET_ONE_USER}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        //  console.log(response);
        setUser(response);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(user);
  return (
    <div className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="alert alert-primary" role="alert">
              <div className="card">
                <img
                  width="164"
                  height="264"
                  src={user.user_avatar}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    1<span>REPUTATION</span>{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h2 className="name-user">{user.user_name}</h2>
            <p className="text-user">(Your about me is currently blank.)</p>
            <p style={{ textDecoration: "underline" }}>
              <a href="/users/edit/14697063">Click here to edit</a>
            </p>
          </div>
          <div className="col-md-4">
            <ul className="icon-detail">
              <li>
                {" "}
                <i className="fas fa-history" /> Member for 9 days
              </li>
              <li>
                {" "}
                <i className="fas fa-eye"> </i> 0 profile views
              </li>
              <li>
                {" "}
                <i className="far fa-clock"></i> Last seen 5 mins ago
              </li>
              <li>
                {" "}
                <i className="far fa-calendar-alt"> </i> Visited 4 days, 3
                consecutive
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
