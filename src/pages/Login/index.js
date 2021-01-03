import React from "react";
import axios from "axios";

// Components
import LoginProvider from "../../provider/login";

// styles
import "./index.scss";

const Login = () => {
  //const history = useHistory();

  const handlerFacebookLogin = async (res) => {
    console.log(res);
    if (res.status !== "unknown") {
      alert("Logged in successfully!");
      axios.post("api/auth/login", {
        email: res.email,
        username: res.username,
        fullname: res.fullname,
      });
    }
  };

  const handlerGoogleLogin = async (res) => {
    console.log(res);
    if (res.profileObj.name) {
      alert("Logged in successfully!");
      axios.post("api/auth/login", {
        email: res.email,
        username: res.username,
        fullname: res.fullname,
      });
    }
  };

  const handlerGithubLogin = async (res) => {
    console.log(res);
    if (res.code) {
      alert("Logged in successfully!");
      axios.post("api/auth/login", {
        email: res.email,
        username: res.username,
        fullname: res.fullname,
      });
    }
  };

  return (
    <div className="LoginContainer">
      <div className="LoginWrapper">
        <div className="LeftSection"></div>
        <div className="RightSection">
          <h2 className="LoginTitle">Login With</h2>
          {/* Google */}
          <LoginProvider type="gg" handlerLogin={handlerGoogleLogin} />
          {/* Facebook */}
          <LoginProvider type="fb" handlerLogin={handlerFacebookLogin} />
          {/* Github */}
          <LoginProvider type="git" handlerLogin={handlerGithubLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
