import React, { useState, useEffect } from "react";
import HeaderAsideNavbar from "../HeaderAsideNavbar";
import SearchBar from "../SearchBar";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import "./index.scss";

//api
import {
  questionApprovalDetail,
  approveQuestion,
  declineQuestion,
} from "../../helpers";

import { useParams } from "react-router-dom";
import { DialogDecline, DialogFeedback } from "../Dialog";
function Index() {
  const [open, setOpen] = React.useState(false);

  const [decline, setDecline] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const [question, setQuestion] = useState("");
  const { id } = useParams();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    (async () => {
      const questionData = await questionApprovalDetail(id);
      setQuestion(questionData);
    })();
  }, []);
  console.log(decline);
  const handleClickOpenDecline = () => {
    setDecline(true);
  };
  let status = true;

  const handleClickOpenApproval = () => {
    approveQuestion(id, status)
      .then(function (response) {
        setOpen(true);
        // window.location.reload();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  const handleClickOpenFeedBack = () => {
    setFeedback(true);
  };

  const handleFeedBack = () => {
    setFeedback(false);
  };
  const handleCloseDecline = () => {
    setDecline(false);
  };
  const handleOpentDecline = () => {
    declineQuestion(id)
      .then(function (response) {
        setDecline(false);
        // window.location.reload();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  const handleOpenFeedBack = () => {
    declineQuestion(id)
      .then(function (response) {
        setFeedback(false);
        // window.location.reload();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <div>
      <div className="qs-header">
        <div className="search-bar">
          {" "}
          <SearchBar></SearchBar>{" "}
        </div>
        {/* <div className="user">
          <div className="username">admin</div>

          <img
            className="avt"
            src="https://lh3.googleusercontent.com/proxy/-p8WnJ_vLGzHF7p71K-I9Lm57Mvc6ex4tCbp-i5rjXi4bgtG6UTUOsTGt9_JM6IjDxZBgICaFwCxjbK2Axw65-6b-Ws2fejNPOEfOKz6LA"
            alt="user"
          />
        </div>{" "} */}
        <div className="question-h">PENDING POST</div>
        <div className="question-time"> Ask 5 month ago</div>
      </div>
      <div className="question-detail">
        <hr />
        <h4 className="question-title">{question.title}</h4>
        <div className="question-des">
          <p>{question.content}</p>
          <div className="user">
            <div className="question-time-detail">
              {" "}
              asked Jun 26 '15 at 17:38{" "}
            </div>
            <div className="username">User 1</div>

            <img
              className="avt"
              src="https://lh3.googleusercontent.com/proxy/-p8WnJ_vLGzHF7p71K-I9Lm57Mvc6ex4tCbp-i5rjXi4bgtG6UTUOsTGt9_JM6IjDxZBgICaFwCxjbK2Axw65-6b-Ws2fejNPOEfOKz6LA"
              alt="user"
            />
          </div>{" "}
        </div>
      </div>
      <div className="other-btn">
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickOpenApproval}
          style={{
            marginRight: "10px",
            padding: "10px",
            outline: "none",
          }}
        >
          Approve
        </Button>
        <Button
          variant="contained"
          onClick={handleClickOpenDecline}
          style={{
            marginRight: "10px",
            padding: "10px",
            outline: "none",
          }}
        >
          Decline
        </Button>
        <Button
          variant="contained"
          onClick={handleClickOpenFeedBack}
          style={{
            marginRight: "10px",
            padding: "10px",
            outline: "none",
          }}
        >
          Decline post an give feedback
        </Button>
      </div>
      <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
      <DialogDecline
        handleCloseDecline={handleCloseDecline}
        handleOpentDecline={handleOpentDecline}
        decline={decline}
      ></DialogDecline>
      <DialogFeedback
        feedback={feedback}
        handleFeedBack={handleFeedBack}
        handleOpenFeedBack={handleOpenFeedBack}
      ></DialogFeedback>
    </div>
  );
}

export default Index;
