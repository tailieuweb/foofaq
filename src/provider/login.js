// import
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import GitHubLogin from 'react-github-login';

// icon
import GoogleIcon from "../images/google_icon.svg";
import FacebookIcon from "../images/facebook_icon.svg";
import GithubIcon from "../images/githubicon.svg";

// export
export const GoogleLoginProvider = (props) => {
  return (
    <GoogleLogin
      clientId="257182584784-k2kdfsbii17muh4rirar6m5nhm7mueuc.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={props.handlerLogin}
      onFailure={props.handlerLogin}
      cookiePolicy={"single_host_origin"}
      render={(renderProps) => (
        <button
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          className="gg-login-btn"
        >
          <span className="icon-wrapper">
            <span
              className="icon"
              style={{
                backgroundImage: `url(${GoogleIcon})`,
              }}
            ></span>
          </span>
          <span className="text">Google</span>
        </button>
      )}
    />
  );
};

export const FacebookLoginProvider = (props) => {
  return (
    <FacebookLogin
      appId="187968122879403"
      textButton="FACEBOOK"
      fields="name,email,picture"
      callback={props.handlerLogin}
      render={(renderProps) => (
        <button
          className="fb-login-btn"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <span className="icon-wrapper">
            <span
              className="icon"
              style={{
                backgroundImage: `url(${FacebookIcon})`,
              }}
            ></span>
          </span>
          <span className="text">Facebook</span>
        </button>
      )}
    />
  );
};

export const GithubLoginProvider = (props) => {
  return(
    <GitHubLogin clientId="25b42705135af0bdf314"
      redirectUri=""
      scope="repo"
      onSuccess={props.handlerLogin}
      onFailure={props.handlerLogin}
      className="git-login-btn"
    >
      <span className="icon-wrapper">
        <span
          className="icon"
          style={{
            backgroundImage: `url(${GithubIcon})`,
          }}
        ></span>
      </span>
      <span className="text">Github</span>
    </GitHubLogin>
    );
};

const LoginProvider = ({ type, handlerLogin }) => {
  switch (type) {
    case "gg":
    case "google":
      return <GoogleLoginProvider handlerLogin={handlerLogin} />;
    case "fb":
    case "facebook":
      return <FacebookLoginProvider handlerLogin={handlerLogin} />;
    case "git":
    case "github":
      return <GithubLoginProvider handlerLogin={handlerLogin} />;
  }
};

export default LoginProvider;
