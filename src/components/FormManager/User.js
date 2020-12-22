import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { getUser, AddUser, UpdateUser } from "../../helpers/userAPI";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  input: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
  button: {
    margin: "10px auto",
  },
}));

function UserForm(props) {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  const [user, setUser] = useState([]);
  const [user_name, setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  let { id } = useParams();

  let handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  useEffect(() => {
    (async () => {
      const user = await getUser(id);
      setUser(user);
      console.log("day ka L ", user);
    })();
  }, []);
  if (id === undefined) {
    handleSubmit = (event) => {
      event.preventDefault();
      AddUser(id, user_email, user_password, user_name)
        .then(function (response) {
          setOpen(true);
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  } else {
    handleSubmit = (event) => {
      event.preventDefault();
      UpdateUser(id, user_name, user_password)
        .then(function (response) {
          setOpen(true);
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  }
  console.log(user.user_name);

  return (
    <div>
      <h1> User Form</h1>

      <div className={classes.root}>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputName"
              aria-describedby="emailHelp"
              placeholder="Name..."
              onChange={(e) => {
                setName(e.target.value);
              }}
              defaultValue={user.user_name}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your name with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password..."
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              defaultValue={user.user_password}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
             
              aria-describedby="emailHelp"
              placeholder="email...."
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              defaultValue={user.user_email}
              variant="outlined"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Send
          </Button>
        
        </form>
        {/* <form>
          <input
            label="Name"
            style={{ margin: 8 }}
            placeholder="Name..."
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              setName(e.target.value);
            }}
          
            defaultValue={user.user_name}
            variant="outlined"
          />
          <input
            title="Password"
            label="PassWord"
            style={{ margin: 8 }}
            placeholder="Password..."
         
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            defaultValue={user.user_password}
            variant="outlined"
          />
          
          <input
            label="Email"
            style={{ margin: 8 }}
            placeholder="Email..."
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            defaultValue={user.user_email}
            variant="outlined"
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Send
          </Button>
        </form> */}
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default UserForm;
