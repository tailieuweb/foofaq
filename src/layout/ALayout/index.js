import React, { Component, useState } from "react";
import { Route, Redirect } from "react-router-dom";
//  MUI components
import Container from "@material-ui/core/Container";
//import component
import NavigationBar from "../../components/NavigationBar/index";
import "./index.scss";

const ALayout = ({ children, ...rest }) => {
  return (
    <>
      <NavigationBar />
      <Container>{children}</Container>
    </>
  );
};
const ALayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <ALayout>
          <Component {...routeProps} />
        </ALayout>
      )}
    />
  );
};

export default ALayoutRoute;
