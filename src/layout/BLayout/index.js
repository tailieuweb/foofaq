import React, { Component, useState } from "react";
import { Route, Redirect,Link } from "react-router-dom";
import BHeader from "../../partials/BHeader/index";
import BSideBar from "../../partials/BSideBar/index";

import "./index.scss";

const BLayout = ({ children, ...rest }) => {
  return (
    <div className="container-blayout">
  {/* HEADER */}
    <BHeader/>
      <main>
        <div className="row">
          <div className="left col-lg-4">
            {/* SIDE BAR */}
            <BSideBar/>
          </div>
          <div className="right col-lg-8">
            <ul className="nav">
              <li>Gallery</li>
              <li>Collections</li>
              <li>Groups</li>
              <li> <Link to="/">Home</Link></li>
            </ul>
            <span className="follow">Follow</span>

            <div className="row gallery">
              {/* MAIN CONTENT */}
                {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
const BLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <BLayout>
          <Component {...routeProps} />
        </BLayout>
      )}
    />
  );
};

export default BLayoutRoute;
