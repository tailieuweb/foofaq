// import
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

export const FacebookLogin = () => null;

export const GithubLogin = () => {};
