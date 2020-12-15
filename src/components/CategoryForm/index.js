import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { getCategory, AddCategory, UpdateCategory } from "../../helpers";
import "./index.scss";
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

const CategoriesForm = () => {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
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
      const questionData = await getCategory(id);
      setCategory(questionData);
    })();
  }, []);
  if (id === undefined) {
    handleSubmit = (event) => {
      event.preventDefault();
      AddCategory(name, des)
        .then(function (response) {
          setOpen(true);
          window.location.reload();
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
  } else {
    handleSubmit = (event) => {
      event.preventDefault();
      UpdateCategory(id, name, des)
        .then(function (response) {
          setOpen(true);
          window.location.reload();
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
  }
  // const [names, setNames] = useState([]);
  // useEffect(() => {
  //   setNames(category.name);
  // }, [category.name]);
  // console.log(category.name);
  return (
    <>
      <div className="form-edit">
        <h1> Categories Form</h1>
        <input
          id="outlined-full-width"
          label="Name"
          className="form-control"
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
          defaultValue={category.name}
          variant="outlined"
        />

        <input
          id="outlined-full-width"
          label="Description"
          className="form-control"
          style={{ margin: 8 }}
          placeholder="Description..."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => {
            setDes(e.target.value);
          }}
          defaultValue={category.description}
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
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            This is a success message!
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default CategoriesForm;
