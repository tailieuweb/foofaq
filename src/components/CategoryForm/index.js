import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

//components mui
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
//helper
import { getCategory, AddCategory, UpdateCategory } from "../../helpers";

//classes
import useStyles from "./classes";

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
  console.log(category.name);
  return (
    <div>
      <h1> Categories Form</h1>

      <div className={classes.root}>
        <form>
          <TextField
            id="outlined-full-width"
            label="Name"
            style={{ margin: 8 }}
            placeholder="Name..."
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={category.name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-full-width"
            label="Description"
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
            startIcon={<SendIcon/>}
          >
            Send
          </Button>
        </form>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {notification}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CategoriesForm;
