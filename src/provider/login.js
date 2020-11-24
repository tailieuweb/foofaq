// import
import GoogleLogin from "react-google-login";
import { useHistory, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";

// export
export const GoogleWLogin = () => {
  const history = useHistory();

  const responseGoogle = (res) => {
    if (res.tokenObj) {
      localStorage.setItem("accessToken", res.tokenObj.access_token);
      history.replace("/");
      console.log(res);
    }
  };
  if (localStorage.getItem("accessToken")) return <Redirect to="/" />;
  return (
    <GoogleLogin
      clientId="257182584784-k2kdfsbii17muh4rirar6m5nhm7mueuc.apps.googleusercontent.com"
      render={(renderProps) => (
        <div onClick={renderProps.onClick} disabled={renderProps.disabled}>
          <span className="text">
            <Button variant="contained">
              <span>
                <svg width="15px" height="15px">
                  <g fill="none">
                    <path
                      d="M2.629 10.659A5.893 5.893 0 0 1 2 8c0-.956.226-1.858.629-2.659l2.065 1.544a3.487 3.487 0 0 0 0 2.23L2.629 10.66z"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M2.629 5.341C3.627 3.357 5.713 2 8.139 2c1.563 0 2.959.573 4.047 1.5L10.4 5.245a3.6 3.6 0 0 0-2.26-.79c-1.61 0-2.97 1.015-3.446 2.43L2.629 5.34z"
                      fill="#EA4335"
                    ></path>
                    <path
                      d="M2.628 10.657L4.692 9.11c.475 1.417 1.835 2.435 3.448 2.435 1.702 0 2.986-.845 3.293-2.318H8.14V6.91h5.72c.084.355.14.736.14 1.091 0 3.818-2.79 6-5.86 6-2.427 0-4.514-1.358-5.512-3.343z"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M12.141 12.506l-1.96-1.483a2.704 2.704 0 0 0 1.252-1.796H8.14V6.91h5.72c.084.355.14.736.14 1.091 0 1.956-.732 3.482-1.859 4.506z"
                      fill="#4285F4"
                    ></path>
                  </g>
                </svg>
              </span>{" "}
              Google
            </Button>
          </span>
        </div>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export const FacebookLogin = () => null;

export const GithubLogin = () => {};
