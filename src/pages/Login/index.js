import React from "react";
// import FacebookLogin from "react-facebook-login";
// import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import { FacebBookLogin, GithubLogin} from "../../provider/login";
// styles
import "./index.scss";
import { GitHub } from "@material-ui/icons";

// images
// import GoogleIcon from "../../images/google_icon.svg";
// import FacebookIcon from "../../images/facebook_icon.svg";
// import InputLogin from "./InputLogin";

const Login = () => {
  const history = useHistory();

  const responseFacebook = async (res) => {
    if (res.status !== "unknown") {
      // localStorage.setItem("accessToken", res.accessToken);
      history.replace("/");
      console.log(res);
      alert("Logged in successfully!");
    }
  };
  const resGithub = (response) => {
    console.log(response)
  };
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
          {/* Google */}
          {/* Code Google Login here */}
          <FacebBookLogin responseFacebook={responseFacebook} />
          {/* Github */}
          {/* Code Github Login here */}
          <GithubLogin resGithub={resGithub}/>
        </div>
      </div>
    </div>
  );
};

export default Login;
