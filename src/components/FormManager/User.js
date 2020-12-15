import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
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
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
  button: {
    margin: "10px auto",
  },
}));

const UserForm = () => {
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
    })();
  }, []);
  if (id === undefined) {
    handleSubmit = (event) => {
      event.preventDefault();
      AddUser(user_email, user_password, id, user_name).then(function (response) {
        setOpen(true);
        window.location.reload();
      }).catch(function (error) {
        console.log(error);
      });
    };
  } else {
    handleSubmit = (event) => {
      event.preventDefault();
      UpdateUser(id, user_name, user_password).then(function (response) {
        setOpen(true);
        window.location.reload();
      }).catch(function (error) {
        console.log(error);
      });
    };
  }
  console.log(user.user_name);

  return (
    <div>
      {/* Form Add user */}
      <h1> User Form</h1>

      <div className={classes.root}>
        <form>
          <TextField
            label="Name"
            style={{ margin: 8 }}
            placeholder="Name..."
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={user.user_name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            variant="outlined"
          />
          <TextField
            title="Password"
            label="PassWord"
            style={{ margin: 8 }}
            placeholder="password..."
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
          <TextField
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
        </form>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default UserForm;
