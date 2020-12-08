import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="container">
        <h1>Add User</h1>
        <div>
          <TextField
            id="outlined-password-input"
            label="name"
            type="name"
            autoComplete="current-name"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="outlined-password-input"
            label="phone"
            type="phone"
            autoComplete="current-phone"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="outlined-password-input"
            label="email"
            type="email"
            autoComplete="current-email"
            variant="outlined"
          />
        </div>
        <Button variant="contained" color="primary">
          Send
        </Button>
      </div>
    </form>
  );
}
