import React from "react";

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
    }
  };

  const handlerGoogleLogin = async (res) => {
    console.log(res);
    if (res.profileObj.name) {
      alert("Logged in successfully!");
    }
  };

  const handlerGithubLogin = async (res) => {
    console.log(res);
    if(res.code){
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
