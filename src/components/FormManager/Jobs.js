import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./Jos.scss";
import { getJob, addJobs, updateJobs } from "../../helpers";

function Jobs(props) {
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
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    (async () => {
      const questionData = await getJob(id);
      setJob(questionData);
    })();
  }, []);
  if (id === undefined) {
    handleSubmit = (event) => {
      event.preventDefault();
      addJobs(name, description, type, area, company, experience, role)
        .then(function (response) {
          setOpen(true);
          //window.location.reload();
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
  } else {
    handleSubmit = (event) => {
      event.preventDefault();
      updateJobs(id, name, description, type, area, company, experience, role)
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
  return (
    <div>
      <h1>Jobs Form</h1>
      <ul className="form-style-1">
        <li>
          <label>
            Jobs Name <span className="required">*</span>
          </label>
          <input
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
            }}
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
            }}
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
            }}
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
            }}
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
          />
        </li>
        <li>
          <Button onClick={handleSubmit} variant="outlined" color="primary">
            {" "}
            Send
          </Button>
        </li>
      </ul>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Jobs;
