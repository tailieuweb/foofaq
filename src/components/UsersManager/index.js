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
import SearchBar from "../../components/SearchBar";
import { getListUsers, DeleteListUser, pagListUSers } from "../../helpers";
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

function USersManager() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);

  const [page, setPage] = useState(1);
  const [key, setKey] = useState("");
  const [keyword, setKeyword] = useState("");
  const [pagUser, setPagUser] = useState([]);
  let perPage = 5;
  let count = parseInt(pagUser.length) / perPage;

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    (async () => {
      const userData = await getListUsers(key, page, perPage);
      setUsers(userData);
    })();
  }, [key, page, perPage]);
  useEffect(() => {
    (async () => {
      const userData = await pagListUSers();
      setPagUser(userData);
    })();
  }, []);
  const handleChangeSearch = (e) => {
    setKeyword(e.target.value);
  };
  const handleSearch = () => {
    setKey(keyword);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const DeleteListUser = (id) => {
    var answer = window.confirm("you definitely want to delete ");
    if (answer) {
      DeleteListUser(id)
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
      <h1> List Users </h1>
      <SearchBar
        handleChangeSearch={handleChangeSearch}
        handleSearch={handleSearch}
      />
      <Link to="/forms/users">
        <Button variant="contained" color="primary">
          Add User
        </Button>
      </Link>
      <TableContainer className={classes.tablePa} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableH
            tt_id="#ID"
            tt_title="TITLE"
            tt_update="UPDATE"
            tt_delete="DELETE"
          ></TableH>
          {users.map((us) => (
            <TableB
              key_id={us.id}
              id={us.id}
              title={us.name}
              update={
                <Link to={"/forms/users/" + us.id}>
                  <Button variant="contained" color="primary">
                    {" "}
                    Update{" "}
                  </Button>
                </Link>
              }
              delete={
                <Button
                  onClick={() => {
                    DeleteUserID(us.id);
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

export default USersManager;
