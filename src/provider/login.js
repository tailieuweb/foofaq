// import
import FacebookLogin from "react-facebook-login";
import FacebookIcon from "../images/facebook_icon.svg";

// export
export const GoogleLogin = () => null;

export const FacebBookLogin = (props) => {
  return (
    <FacebookLogin
      appId="187968122879403"
      textButton="FACEBOOK"
      fields="name,email,picture"
      callback={props.handlerLogin}
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

export const GithubLogin = () => null;
