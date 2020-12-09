import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import Pagination from "@material-ui/lab/Pagination";
import { TableH, TableB } from "../../components/QuestionTable";

import Snackbar from "@material-ui/core/Snackbar";

import Link from "../../common/CustomLink";
// import QuestionApprovalCard from "../../components/QuestionApprovalCard";
import HeaderAsideNavbar from "../../components/HeaderAsideNavbar";
import SearchBar from "../../components/SearchBar";

// import QuestionManager from "../../components/QuestionManager/index";
// import QuestionApprovalDetail from "../../components/QuetionAprovalDetail";
import { getAllUser,getUserLimit, declineUser } from "../../helpers/userAPI";

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

function Index(props) {
  const classes = useStyles();
  const [keyword, setKeyword] = useState("");
  const [questions, setQuestion] = useState([]);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [pagQuestion, setPagQuestion] = useState([]);
  const [key, setKey] = useState("");
  let perPage = 5;
  let count = parseInt(pagQuestion.length) / perPage;

  const handleChange = (event, value) => {
    setPage(value);
  };
  console.log(Math.ceil(count));

  useEffect(() => {
    (async () => {
      const questionData = await getAllUser();
      setPagQuestion(questionData);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const questionData = await getUserLimit(key, page, perPage);
      setQuestion(questionData);
    })();
  }, [key, page, perPage]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const DeleteQuestion = (id) => {
    var answer = window.confirm("you definitely want to delete ");
    if (answer) {
      declineUser(id)
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

  const handleChangeSearch = (e) => {
    setKeyword(e.target.value);
  };
  const handleSearch = () => {
    setKey(keyword);
  };

  return (
    <div>
      <h1> User Manager </h1>
      <SearchBar
        handleChangeSearch={handleChangeSearch}
        handleSearch={handleSearch}
      ></SearchBar>
      <Link to="/form">
        {" "}
        <Button className={classes.btnadd} variant="contained" color="primary">
          Add
        </Button>
      </Link>
      <TableContainer className={classes.tablePa} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableH
            tt_id="#ID"
            tt_title="USERNAME"
            tt_update="UPDATE"
            tt_delete="DELETE"
          ></TableH>
          {questions.map((question) => (
            <TableB
              key={question.id}
              key_id={question.id}
              id={question.id}
              title={question.user_name}
              update={
                <Link to={"/form/" + question.id}>
                  <Button variant="contained" color="primary">
                    {" "}
                    Update{" "}
                  </Button>
                </Link>
              }
              delete={
                <Button
                  onClick={() => {
                    DeleteQuestion(question.id);
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

export default Index;
