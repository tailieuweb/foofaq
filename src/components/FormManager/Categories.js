import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { Link, useHistory, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { getCategory, AddCategory, UpdateCategory } from "../../helpers";
import "./Categories.scss";
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
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [notification, setNotification] = useState("");
  let { id } = useParams();
  let history = useHistory();

  let handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const checkValueEmpty = () => {
    if (name.length == "" || des.length == "") {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    (async () => {
      const questionData = await getCategory(id);
      setCategory(questionData);
    })();
  }, []);

  if (id === undefined) {
    handleSubmit = (event) => {
      if (checkValueEmpty() == true) {
        setOpen(true);
        setNotification("Add Failed!!");
      } else {
        event.preventDefault();
        AddCategory(name, des).then(function (response) {
          setOpen(true);
          setNotification("Add Successefully!");
          window.location.reload();
        });
      }
    };
  } else {
    handleSubmit = (event) => {
      if (checkValueEmpty() == true) {
        setOpen(true);
        setNotification("Update Failed!!");
      } else {
        event.preventDefault();
        UpdateCategory(id, name, des).then(function (response) {
          setOpen(true);
          window.alert("Updated successfully!");
          history.push("/manager/categories");
        });
      }
    };
  }

  // const [names, setNames] = useState([]);
  // useEffect(() => {
  //   setNames(category.name);
  // }, [category.name]);
  // console.log(category.name);
  return (
    <div>
      <div className="form-edit mr-auto ml-auto">
        <h1> Categories Form</h1>
        <input
          id="outlined-full-width"
          label="Name"
          className="form-control"
          style={{ margin: 8 }}
          placeholder="Name..."
          margin="normal"
          variant="outlined"
          onChange={(e) => {
            setName(e.target.value);
          }}
          defaultValue={category.name}
          required
        />
        <textarea
          id="outlined-full-width"
          label="Description"
          className="form-control"
          style={{ margin: 8 }}
          placeholder="Description..."
          margin="normal"
          variant="outlined"
          onChange={(e) => {
            setDes(e.target.value);
          }}
          defaultValue={category.description}
          required
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
            {notification}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default CategoriesForm;
