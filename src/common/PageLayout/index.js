import React from "react";

//  MUI components
import Container from "@material-ui/core/Container";

//import component
import NavigationBar from "../../components/NavigationBar";

const PageLayout = (props) => {
  return (
    <>
      <NavigationBar />
      {props.outsideContainer}
      <Container maxWidth="lg">{props.children}</Container>
    </>
  );
};

export default PageLayout;
