import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import SearchBar from "../SearchBar";
import Button from "@material-ui/core/Button";
import "./index.scss";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { green } from "@material-ui/core/colors";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Link from "../../common/CustomLink";
//
import Pagination from "@material-ui/lab/Pagination";

//
import { DialogDecline } from "../Dialog";

//
import {
  allQuestion,
  getQuestions,
  approveQuestion,
  declineQuestion,
} from "../../helpers";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  buttonr: {
    borderColor: green[500],
    marginRight: "20px",
    outline: "none",
  },
  pag: {
    marginBottom: "50px",
    width: "100%",
  },
  pagechill: {
    marginLeft: "30%",
  },
  checkIcon: {
    color: green[500],
    fontSize: 30,
  },
  buttonc: {
    borderColor: "red",
    outline: "none",
  },
  closeIcon: {
    fontSize: 30,
    fontWeight: "bold",
    cursor: "pointer",
    color: "red",
  },
}));

const Index = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [page, setPage] = useState(1);

  const [decline, setDecline] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [all, setAll] = useState([]);

  //search
  const [keyword, setKeyword] = useState("");
  const [key, setKey] = useState("");
  let perPage = 5;

  let count = Number(all.length) / perPage;
  let status = true;
  let title, content;

  const handleChange = (event, value) => {
    setPage(value);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      setOpen(false);
    }
  };

  //decline
  const handleClickOpenDecline = (id) => {
    setDecline(false);
  };

  const handleClickDecline = (id) => {
    if (window.confirm("Decline ?")) {
      declineQuestion(id);
    } else {
      return;
    }
  };
  const handleCloseDecline = () => {
    setDecline(false);
  };
  //approve
  const handleClickOpenApproval = (id) => {
    approveQuestion(id, status);
    setOpen(true);
  };
  //get question
  useEffect(() => {
    (async () => {
      const questionData = await getQuestions(page, perPage, key);
      setQuestions(questionData);
    })();
  }, [page, perPage, key]);

  // searchBar

  const handleChangeSearch = (e) => {
    setKeyword(e.target.value);
  };
  const handleSearch = () => {
    setKey(keyword);
  };

  useEffect(() => {
    (async () => {
      const questionData = await allQuestion();
      setAll(questionData);
    })();
  }, []);

  return (
    <div>
      <div className="searchBar">
        <SearchBar
          handleChangeSearch={handleChangeSearch}
          handleSearch={handleSearch}
        />{" "}
      </div>
      <div className="infoadmin">
        <div className="user">
          <img
            className="avt"
            src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
            alt="user"
          />
          <div className="adminname">Admin 1</div>
        </div>
      </div>
      <div className="contentApproval">
        <div className="header-approve">
          <div className="row">
            <div className="col-md-6 col-12">
              <h4> QUESTION APPROVAL</h4>
            </div>
            <div className="col-md-6 col-12">
              <div className="col-rgt">
                {" "}
                <div className="total">Total: {all.length}</div>
                <Button className="btn-fill" variant="contained">
                  Newest Fist
                </Button>
                <Button className="btn-fill" variant="contained">
                  Oldest Fist
                </Button>
              </div>
            </div>
          </div>
        </div>
        {questions.map((question) => {
          if (question.status === false) {
            title = question.title;
            content = question.content;

            return (
              <div className="question-list">
                <div className="app-dec">
                  <Button
                    variant="outlined"
                    className={classes.buttonr}
                    onClick={() => {
                      handleClickOpenApproval(question.id);
                    }}
                  >
                    <CheckIcon className={classes.checkIcon}></CheckIcon>
                  </Button>
                  <Button
                    className={classes.buttonc}
                    variant="outlined"
                    onClick={() => {
                      handleClickDecline(question.id);
                    }}
                  >
                    <CloseIcon
                      className={classes.closeIcon}
                      color="action"
                    ></CloseIcon>
                  </Button>

                  <Dialog
                    open={decline}
                    onClose={handleCloseDecline}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Are you sure to decline ?"}
                    </DialogTitle>

                    <DialogActions>
                      <Button
                        onClick={() => {
                          handleCloseDecline();
                        }}
                        color="primary"
                      >
                        Disagree
                      </Button>
                      <Button
                        onClick={() => {
                          handleClickOpenDecline(question.id);
                        }}
                        color="primary"
                        autoFocus
                      >
                        Decline
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
                <div className="row">
                  <div className="col-md-10 col-12">
                    <div className="question-content">
                      <Link id="abs" to={"/approval/" + question.id}>
                        <h5 className="question-title">{title}</h5>
                      </Link>
                      <p className="question-des">{content}</p>
                    </div>
                  </div>
                  <div clasName="col-md-2  col-12">
                    <div className="user-question">
                      <div className="question-time">
                        {" "}
                        {`asked ${moment(question.createdAt).fromNow()}`}
                      </div>
                      <img
                        className="avt"
                        src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
                        alt="user"
                      />
                      <div className="username">User 1</div>
                    </div>
                  </div>
                </div>

                <Snackbar
                  open={open}
                  autoHideDuration={200}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="success">
                    This is a success message!
                  </Alert>
                </Snackbar>
              </div>
            );
          }
        })}
      </div>
      <div className={classes.pag}>
        <Pagination
          className={classes.pagechill}
          count={Math.ceil(count)}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          page={page}
          siblingCount={1}
          boundaryCount={1}
        />
      </div>{" "}
    </div>
  );
};

export default Index;
