import React from "react";
import { Route, Link as ReactRouterLink } from "react-router-dom";
import { createPath } from "history";

const Link = ({ to, replace, ...props }) => (
  <Route path={typeof to === "string" ? to : createPath(to)} exact>
    {({ match }) => (
      <ReactRouterLink {...props} to={to} replace={replace || !!match} />
    )}
  </Route>
);

Link.propTypes = ReactRouterLink.propTypes;
Link.defaultProps = ReactRouterLink.defaultProps;

export default Link;
