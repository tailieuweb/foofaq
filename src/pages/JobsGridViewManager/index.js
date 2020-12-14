import React, { useState } from "react";
import { Button } from "@material-ui/core";
import JobsGridView from "../../components/JobsGridView";
import Link from "../../common/CustomLink";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { deleteJob } from "../../helpers";

import PageLayoutManager from "../../common/PageLayoutManager";

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
      field: "id",
      headerName: "Actions",
      headerAlign: "center",
      width: 200,
      renderCell: (params) => (
        <strong>
          <Link to={"/forms/job/" + params.value}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() => {
              
            }}
          >
            UPDATE
          </Button>
          </Link>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() => {
              DeleteJobId(params.value);
          }}
          >
            DELETE
          </Button>
        </strong>
      ),
    },
  ];

  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <PageLayoutManager></PageLayoutManager>
        </div>
        <div className="col-md-10">
          <JobsGridView extraColumns={columns} />
          <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Delete success!
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}
