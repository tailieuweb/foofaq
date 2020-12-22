import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

import "./Jos.scss";
import { getEvent, addEvent, updateEvent } from "../../helpers";

import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import Link from "../../common/CustomLink";
// import { set } from "js-cookie";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));
function Events(props) {
  const [nofi, setNofi] = useState("");
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  // name, description, type, area, company, experience, role
  const [event, setEvent] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  let date;
  let { id } = useParams();

  let handleSubmit = (event) => {
    event.preventDefault();
  };

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const checkValueEmpty = () => {
    if (name.length == "" || description.length == "") {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    setName(event.name);
    setDescription(event.description);
    setImage(event.image);
  }, [event]);
  useEffect(() => {
    (async () => {
      const eventData = await getEvent(id);
      setEvent(eventData);
    })();
  }, [id]);
  if (id === undefined) {
    handleSubmit = (event) => {
      if (checkValueEmpty() == true) {
        setOpen(true);
        setNofi("Failed");
      } else {
        event.preventDefault();
        addEvent(name, image, date, description)
          .then(function (response) {
            setOpen(true);
            //window.location.reload();
            setNofi("Successfully");
          })
          .catch(function (error) {
            // handle error
            console.log(error);
            setOpen(true);
            setNofi("Failed");
          });
      }
    };
  } else {
    handleSubmit = (event) => {
      if (checkValueEmpty() == true) {
        setOpen(true);
        setNofi("Failed");
      } else {
        event.preventDefault();
        updateEvent(id, name, image, date, description)
          .then(function (response) {
            setOpen(true);
            //window.location.reload();
            setNofi("Successfully");
          })
          .catch(function (error) {
            // handle error
            console.log(error);
            setOpen(true);
            setNofi("Failed");
          });
      }
    };
  }
  console.log(event.name);
  return (
    <div>
      <h1>Event Form</h1>
      <ul className="form-style-1">
        <li>
          <label>
            Event Name <span className="required">*</span>
          </label>
          <input
            type="text"
            name="field1"
            className="field-divided"
            placeholder="name"
            defaultValue={event.name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />{" "}
        </li>

        <li>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Upload
            </Button>
          </label>
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
            onChange={(e) => {
              setImage(e.target.value);
            }}
            required
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </li>

        <li>
          <label>
            Description <span className="required">*</span>
          </label>
          <textarea
            name="field5"
            id="field5"
            className="field-long field-textarea"
            defaultValue={event.description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          />
        </li>
        <li>
          <Button onClick={handleSubmit} variant="outlined" color="primary">
            {" "}
            Send
          </Button>
        </li>
      </ul>

      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar> */}

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Notification
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>{nofi}</Typography>
        </DialogContent>
        <DialogActions>
          <Link to={"/manager/events"}>
            <Button autoFocus onClick={handleClose} color="primary">
              OK
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Events;
