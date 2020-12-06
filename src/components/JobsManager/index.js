import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
// import Pagination from "@material-ui/lab/Pagination";
import { TableH, TableB } from "../../components/QuestionTable";
import Pagination from "@material-ui/lab/Pagination";

import Snackbar from "@material-ui/core/Snackbar";

import Link from "../../common/CustomLink";
// import QuestionApprovalCard from "../../components/QuestionApprovalCard";
// import HeaderAsideNavbar from "../../components/HeaderAsideNavbar";
// import SearchBar from "../../components/SearchBar";
import { deleteJob, getJobs, pagJobs } from "../../helpers";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tablePa: {
    marginTop: "50px",
    marginRight: "50px",
    paddingRight: "50px",
  },
  btnadd: {
    marginTop: "20px",
  },
  pagination: {
    margin: "20px auto",
    marginLeft: "25%",
  },
});
function JobsManager(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [key, setKey] = useState("");
  const [page, setPage] = useState(1);

  const [keyword, setKeyword] = useState("");
  const [pagJob, setPagJob] = useState([]);
  let perPage = 5;
  let count = parseInt(pagJob.length) / perPage;

  const handleChange = (event, value) => {
    setPage(value);
  };
  const handleChangeSearch = (e) => {
    setKeyword(e.target.value);
  };
  const handleSearch = () => {
    setKey(keyword);
  };

  useEffect(() => {
    (async () => {
      const jobData = await pagJobs();
      setPagJob(jobData);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const jobData = await getJobs(key, page, perPage);
      setJobs(jobData);
    })();
  }, [key, page, perPage]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const DeleteJobId = (id) => {
    var answer = window.confirm("you definitely want to delete ");
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
  return (
    <div>
      <h1>JOBS</h1>
      <TableContainer className={classes.tablePa} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableH
            tt_id="#ID"
            tt_title="TITLE"
            tt_update="UPDATE"
            tt_delete="DELETE"
          ></TableH>
          {jobs.map((job) => (
            <TableB
              key_id={job.id}
              id={job.id}
              title={job.name}
              update={
                <Link to={"/forms/job/" + job.id}>
                  <Button variant="contained" color="primary">
                    {" "}
                    Update{" "}
                  </Button>
                </Link>
              }
              delete={
                <Button
                  onClick={() => {
                    DeleteJobId(job.id);
                  }}
                  variant="contained"
                  color="secondary"
                >
                  {" "}
                  Delete{" "}
                </Button>
              }
            ></TableB>
          ))}
        </Table>
      </TableContainer>
      <Pagination
        className={classes.pagination}
        count={Math.ceil(count)}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        page={page}
        siblingCount={1}
        boundaryCount={1}
      />

      <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Delete success!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default JobsManager;
