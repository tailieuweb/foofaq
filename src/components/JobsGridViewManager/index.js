import React, { useState } from "react";
import { Button } from "@material-ui/core";
import JobsGridView from "../JobsGridView";
import Link from "../../common/CustomLink";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { deleteJob } from "../../helpers";
import "./index.scss";

export default function JobsGridViewManager() {
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const DeleteJobId = (id) => {
    var answer = window.confirm("You definitely want to delete ");
    if (answer) {
      deleteJob(id)
        .then(function (response) {
          // handle success
          console.log("Successfully");
          setOpen(true);
          window.location.reload();
        })
        .catch(function (error) {
          // handle error
          setOpen(false);
        });
    } else {
      return;
    }
  };

  let columns = [
    {
      field: "action",
      headerName: "Actions",
      headerAlign: "center",
      width: 200,
      renderCell: (params) => (
        <strong>
          <Link to={"/forms/job/" + params.getValue("id")}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={() => {}}
            >
              <EditIcon />
            </Button>
          </Link>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() => {
              DeleteJobId(params.getValue("id"));
            }}
          >
            <DeleteIcon />
          </Button>
        </strong>
      ),
    },
  ];

  return (
    <>
      <div className="aroundAddJob">
        <Link to={"/forms/job/"}>
          <Button variant="contained" color="primary" startIcon={<AddBoxIcon />}>
          </Button>
        </Link>
      </div>
      <JobsGridView extraColumns={columns} />
      <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Delete success!
        </Alert>
      </Snackbar>
    </>
  );
}
