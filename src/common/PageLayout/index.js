import React from "react";

//  MUI components
import Container from "@material-ui/core/Container";

//import component
import NavigationBar from "../../partials/NavigationBar";

const PageLayout = (props) => {
  return (
    <>
      {!props.hideNavbar ? <NavigationBar /> : null}
      {props.outsideTopContainer}
      <Container maxWidth="lg">{props.children}</Container>
      {props.outsideBottomContainer}
    </>
  );
};

export default PageLayout;
