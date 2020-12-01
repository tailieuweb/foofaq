import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import HeaderAsideNavbar from "../HeaderAsideNavbar";
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

import Pagination from "@material-ui/lab/Pagination";

//
import { getQuestions, approveQuestion, declineQuestion } from "../../helpers";
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
}));

const Index = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      setOpen(false);
    }
  };
  let title, content;
  let status = true;

  const [decline, setDecline] = useState(false);
  const [questions, setQuestions] = useState([]);
  //decline
  const handleClickOpenDecline = (id) => {
    declineQuestion(id);
    setDecline(false);
  };
  const handleClickDecline = () => {
    setDecline(true);
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
  let id = 1;
  useEffect(() => {
    (async () => {
      const questionData = await getQuestions();
      setQuestions(questionData);
    })();
  }, []);
  questions.map((q) => {
    if (status === true) {
      console.log(q);
    }
  });
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          {" "}
          <HeaderAsideNavbar></HeaderAsideNavbar>
        </div>
        <div className="col-md-10">
          {" "}
          <div className="searchBar">
            <SearchBar></SearchBar>
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
                    <div className="total">Total: 1</div>
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
                console.log("hehehe" + question);

                return (
                  <div className="question-list">
                    <div className="app-dec">
                      <Button
                        variant="outlined"
                        style={{
                          borderColor: green[500],
                          marginRight: "20px",
                          outline: "none",
                        }}
                        onClick={() => {
                          handleClickOpenApproval(question.id);
                        }}
                      >
                        <CheckIcon
                          style={{
                            color: green[500],
                            fontSize: 30,
                          }}
                        ></CheckIcon>
                      </Button>
                      <Button
                        variant="outlined"
                        style={{
                          borderColor: "red",
                          outline: "none",
                        }}
                        onClick={() => {
                          handleClickDecline();
                        }}
                      >
                        <CloseIcon
                          style={{
                            fontSize: 30,
                            fontWeight: "bold",
                            cursor: "pointer",
                            color: "red",
                          }}
                          color="action"
                        ></CloseIcon>
                      </Button>
                    </div>
                    <div className="row">
                      <div className="col-md-10 col-12">
                        <div className="question-content">
                          <Link id="abs" to={"/detailapproval/" + question.id}>
                            <h5 className="question-title">{title}</h5>
                          </Link>
                          <p className="question-des">{content}</p>
                        </div>
                      </div>
                      <div clasName="col-md-2  col-12">
                        <div className="user-question">
                          <div className="question-time"> Asked 5 days ago</div>
                          <img
                            className="avt"
                            src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
                            alt="user"
                          />
                          <div className="username">User 1</div>
                        </div>
                      </div>
                    </div>
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
        </div>
      </div>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </div>
  );
};

export default Index;
