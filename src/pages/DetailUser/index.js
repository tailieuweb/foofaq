import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import {} from "@material-ui/core/styles";
import {} from "react-bootstrap";

import PageLayout from "../../common/PageLayout/index";
import HeaderUser from "./components/HeaderUser";
import ContentUser from "./components/ContentUser";
import FooterUser from "./components/FooterUser";
import TopPostUser from "./components/TopPostUser";

const DetailUser = (props) => {
  return (
    <div>
      <div className="tabs">
        <div className="tabs-left">
          {" "}
          <div className="profile border-tabs">
            {" "}
            <Link to="/about" className="none-css-tabs">
              Profile
            </Link>
          </div>
          <div className="activity border-tabs background-tabs">
            {" "}
            <Link to="/about" className="none-css-tabs">
              Activity
            </Link>
          </div>
          <div className="developer-story border-tabs background-tabs">
            <Link to="/about" className="none-css-tabs">
              Developer Story
            </Link>
          </div>
        </div>
        <div className="tabs-right">
          <div className="meta">
            {" "}
            <Link to="/about" className="meta-network">
              <i class="fas fa-users" style={{ color: "black" }}></i> Meta user
            </Link>
          </div>

          <div className="network">
            {" "}
            <Link to="/about" className="meta-network">
              <i class="fas fa-address-card"></i> Network profile
            </Link>
          </div>
        </div>
      </div>
      <HeaderUser />
      <ContentUser />
      <TopPostUser />
      <FooterUser />
    </div>
  );
};
export default DetailUser;
