import React from "react";
import HeaderAsideNavbar from "../../partials/HeaderAsideNavbar";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  headersideBar: (propsS) => ({
    width: "18%",
    float: propsS.float,
    display: propsS.display,
  }),

  bodySideBar: (propsS) => ({
    float: propsS.float,
    width: "75%",
    marginLeft: "50px",
  }),
});

const PageLayoutManager = (props) => {
  const propsS = { float: `${props.float}`, display: props.display };
  const classes = useStyles(propsS);

  return (
    <>
      <div className="headerSidebNavbar">
        <div className={classes.headersideBar}>
          <HeaderAsideNavbar />
        </div>
        <div className={classes.bodySideBar}>{props.children}</div>
      </div>
    </>
  );
};

export default PageLayoutManager;
