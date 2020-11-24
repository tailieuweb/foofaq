// import
import FacebookLogin from "react-facebook-login";
import FacebookIcon from "../images/facebook_icon.svg";
import GooglewLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

// export
export const GoogleLogin = (props) => {
  const history = useHistory();

  //if (localStorage.getItem("accessToken")) return <Redirect to="/" />;
  return (
    <GooglewLogin
      clientId="257182584784-k2kdfsbii17muh4rirar6m5nhm7mueuc.apps.googleusercontent.com"
      render={(renderProps) => (
        <div onClick={renderProps.onClick} disabled={renderProps.disabled}>
          <span className="text">
            <Button variant="contained">Google</Button>
          </span>
        </div>
      )}
      buttonText="Login"
      onSuccess={props.handlerLogin}
      onFailure={props.handlerLogin}
      cookiePolicy={"single_host_origin"}
    />
  );
};

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

export const GithubLogin = () => {};
