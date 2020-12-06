import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
// import Pagination from "@material-ui/lab/Pagination";
import { TableH, TableB } from "../../components/QuestionTable";

import Snackbar from "@material-ui/core/Snackbar";
import Pagination from "@material-ui/lab/Pagination";

import Link from "../../common/CustomLink";
// import QuestionApprovalCard from "../../components/QuestionApprovalCard";
// import HeaderAsideNavbar from "../../components/HeaderAsideNavbar";
import SearchBar from "../../components/SearchBar";
import { deleteEvent, getEvents, pagEnvent } from "../../helpers";
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
function EventManager(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [events, setEvent] = useState([]);
  const [page, setPage] = useState(1);
  const [key, setKey] = useState("");
  const [keyword, setKeyword] = useState("");
  const [pagEvent, setPagEvents] = useState([]);
  let perPage = 5;
  let count = parseInt(pagEvent.length) / perPage;

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    (async () => {
      const eventData = await pagEnvent();
      setPagEvents(eventData);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const eventData = await getEvents(keyword, page, perPage);
      setEvent(eventData);
    })();
  }, [keyword, page, perPage]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleChangeSearch = (e) => {
    setKeyword(e.target.value);
  };
  const handleSearch = () => {
    setKey(keyword);
  };
  const DeleteEvent = (id) => {
    var answer = window.confirm("you definitely want to delete ");
    if (answer) {
      deleteEvent(id)
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
      <h1>Events</h1>
      <SearchBar
        handleChangeSearch={handleChangeSearch}
        handleSearch={handleSearch}
      />
      <TableContainer className={classes.tablePa} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableH
            tt_id="#ID"
            tt_title="NAME"
            tt_update="UPDATE"
            tt_delete="DELETE"
          ></TableH>
          {events.map((event) => (
            <TableB
              key_id={event.id}
              id={event.id}
              title={event.name}
              update={
                <Link to={"/forms/event/" + event.id}>
                  <Button variant="contained" color="primary">
                    {" "}
                    Update{" "}
                  </Button>
                </Link>
              }
              delete={
                <Button
                  onClick={() => {
                    DeleteEvent(event.id);
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

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Delete success!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default EventManager;
