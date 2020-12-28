import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { getCategory, AddCategory, UpdateCategory } from "../../helpers";

//classes 
import useStyles from "./classes";
const CategoriesForm = () => {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  const [category, setCategory] = useState([]);
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

export default CategoriesForm;
