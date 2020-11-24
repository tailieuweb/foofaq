import React from "react";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
// import GoogleLogin from "react-google-login";
// import { useHistory, Redirect } from "react-router-dom";

// styles
import "./index.scss";
import { GoogleWLogin } from "../../provider/login";
// images
// import GoogleIcon from "../../images/google_icon.svg";
// import FacebookIcon from "../../images/facebook_icon.svg";
// import InputLogin from "./InputLogin";

const Login = () => {
  // const history = useHistory();

  // const responseFacebook = async (res) => {
  //   if (res.status !== "unknown") {
  //     localStorage.setItem("accessToken", res.accessToken);
  //     history.replace("/");
  //     console.log(res);
  //   }
  // };

  // const responseGoogle = async (res) => {
  //   if (res.profileObj.name) {
  //     localStorage.setItem("accessToken", res.accessToken);
  //     history.replace("/");
  //     console.log(res);
  //   }
  // };

  // if (localStorage.getItem("accessToken")) return <Redirect to="/" />;

  return (
    <div className="LoginContainer">
      <div className="LoginWrapper">
        <div className="LeftSection"></div>
        <div className="RightSection">
          <h2 className="LoginTitle">Login With</h2>

          <GoogleWLogin></GoogleWLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
