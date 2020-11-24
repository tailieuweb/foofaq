// import
import React from 'react';
import GitHubLogin from 'react-github-login';
import FacebookLogin from "react-facebook-login";
import FacebookIcon from "../images/facebook_icon.svg";
import GithubIcon from "../images/github_icon.png"

// export
export const GoogleLogin = () => null;

export const FacebBookLogin = (props) => {
  return (
    <FacebookLogin
      appId="187968122879403"
      textButton="FACEBOOK"
      fields="name,email,picture"
      callback={props.responseFacebook}
      render={() => (
        <button className="gg-login-btn">
          <span
            className="icon"
            style={{
              backgroundImage: `url(${FacebookIcon})`,
            }}
          ></span>
          <span className="text">Facebook</span>
        </button>
      )}
    />
  );
};


export const GithubLogin = (props) => {
 
  return(
    <GitHubLogin clientId="25b42705135af0bdf314"
      redirectUri=""
      onSuccess={props.resGithub}
      onFailure={props.resGithub}
      className="git-login-btn"
      buttonText="Github"
      />
    );
};
