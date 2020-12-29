import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./Jos.scss";
import { getJob, addJobs, updateJobs } from "../../helpers";

import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import SendIcon from "@material-ui/icons/Send";

import Link from "../../common/CustomLink";

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


function Jobs(props) {
  const [nofi, setNofi] = useState("");
  const [open, setOpen] = React.useState(false);
  // name, description, type, area, company, experience, role
  const [job, setJob] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [area, setArea] = useState("");
  const [company, setCompany] = useState("");
  const [experience, setExperience] = useState("");
  const [role, setRole] = useState("");
  let { id } = useParams();

  let handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    (async () => {
      const questionData = await getJob(id);
      setJob(questionData);
    })();
  }, []);

  const check = () => {
    if(name.length == "" || description.length == "" || type.length == "" || area.length == "" || company.length == "" || experience.length == "" || role.length == "")
    {
      return true;
    }
    else{
      return false
    }
  }

  if (id === undefined) {
    handleSubmit = (event) => {
      if(check() == true){
        setOpen(true);
        setNofi("Failed");
      }
      else{
        event.preventDefault();
        addJobs(name, description, type, area, company, experience, role)
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
      if(check() == true){
        setOpen(true);
        setNofi("Failed");
      }
      else{
        event.preventDefault();
        updateJobs(id, name, description, type, area, company, experience, role)
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
      };
    }
  }
  return (
    <div>
      <h1>Jobs Form</h1>
      <ul className="form-style-1">
        <li>
          <label>
            Jobs Name <span className="required">*</span>
          </label>
          <input
          required
            type="text"
            name="field1"
            className="field-divided"
            placeholder="name"
            defaultValue={job.name}
            onChange={(e) => {
              setName(e.target.value);
            }} 
          />{" "}
        </li>
        <li>
          <label>
            Type <span className="required">*</span>
          </label>
          <input
            type="text"
            name="field3"
            className="field-long"
            defaultValue={job.type}
            onChange={(e) => {
              setType(e.target.value);
            }} required
          />
        </li>
        <li>
          <label>
            Area <span className="required">*</span>
          </label>
          <input
            type="text"
            name="field3"
            className="field-long"
            defaultValue={job.area}
            onChange={(e) => {
              setArea(e.target.value);
            }} required
          />
        </li>
        <li>
          <label>
            Company <span className="required">*</span>
          </label>
          <input
            type="text"
            name="field3"
            className="field-long"
            defaultValue={job.company}
            onChange={(e) => {
              setCompany(e.target.value);
            }} required
          />
        </li>
        <li>
          <label>
            experience <span className="required">*</span>
          </label>
          <input
            type="text"
            name="field3"
            className="field-long"
            defaultValue={job.experience}
            onChange={(e) => {
              setExperience(e.target.value);
            }} required
          />
        </li>

        <li>
          <label>
            Role <span className="required">*</span>
          </label>
          <input
            type="text"
            name="field3"
            className="field-long"
            defaultValue={job.role}
            onChange={(e) => {
              setRole(e.target.value);
            }} 
            required
          />
        </li>

        <li>
          <label>
            Description <span className="required">*</span>
          </label>
          <textarea
            name="field5"
            id="field5"
            className="field-long field-textarea"
            defaultValue={job.description}
            onChange={(e) => {
              setDescription(e.target.value);
            }} 
            required
          />
        </li>
        <li>
          <Button onClick={handleSubmit} variant="outlined" color="primary" startIcon={<SendIcon />}>
            {/* {" "}
            Send */}
          </Button>
        </li>
      </ul>

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
          <Link to={"/manager/jobs"}>
            <Button autoFocus onClick={handleClose} color="primary">
              OK
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
      
    </div>
  );
}

export default Jobs;
