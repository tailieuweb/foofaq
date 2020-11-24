import React from "react";
// import FacebookLogin from "react-facebook-login";
// import GoogleLogin from "react-google-login";
// import { useHistory, Redirect } from "react-router-dom";
// Components
import { FacebookLogin, GoogleLogin } from "../../provider/login";

// styles
import "./index.scss";

// images
// import GoogleIcon from "../../images/google_icon.svg";
// import FacebookIcon from "../../images/facebook_icon.svg";
// import InputLogin from "./InputLogin";

const Login = () => {
  // const history = useHistory();

  const handlerFacebookLogin = async (res) => {
    if (res.status !== "unknown") {
      console.log(res);
      alert("Logged in successfully!");
    }
  };

  const handlerGoogleLogin = async (res) => {
    if (res.profileObj.name) {
      console.log(res);
      alert("Logged in successfully!");
    }
  };

  return (
    <div className="LoginContainer">
      <div className="LoginWrapper">
        <div className="LeftSection"></div>
        <div className="RightSection">
          <h2 className="LoginTitle">Login With</h2>
          {/* Google */}
          <GoogleLogin handlerLogin={handlerGoogleLogin} />
          {/* Facebook */}
          <FacebookLogin handlerLogin={handlerFacebookLogin} />
          {/* Github */}
        </div>
      </div>
    </div>
  );
};

export default Login;
