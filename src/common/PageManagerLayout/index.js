import React from "react";
import HeaderAsideNavbar from "../../components/HeaderAsideNavbar";
const PageManagerLayout = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <HeaderAsideNavbar />
        </div>
        <div className="col-md-10">{props.children}</div>
      </div>
    </>
  );
};

export default PageManagerLayout;