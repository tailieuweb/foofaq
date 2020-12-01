import React, { useState, useEffect } from "react";
import HeaderAsideNavbar from "../HeaderAsideNavbar";
import SearchBar from "../SearchBar";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import "./index.scss";
import { questionApprovalDetail } from "../../helpers";
import { useParams } from "react-router-dom";
function Index(props) {
  const [decline, setDecline] = React.useState(false);
  const [feedback, setFeedback] = React.useState(false);
  const [question, setQuestion] = useState("");
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const questionData = await questionApprovalDetail(id);
      setQuestion(questionData);
    })();
  }, []);

  const handleClickOpenDecline = () => {
    setDecline(true);
  };
  const handleClickOpenApproval = () => {};
  const handleClickOpenFeedBack = () => {
    setFeedback(true);
  };

  const handleFeedBack = () => {
    setFeedback(false);
  };
  const handleCloseDecline = () => {
    setDecline(false);
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <HeaderAsideNavbar></HeaderAsideNavbar>
        </div>
        <div className="col-md-10">
          <div className="qs-header">
            <div className="search-bar">
              {" "}
              <SearchBar></SearchBar>{" "}
            </div>
            <div className="user">
              <div className="username">admin</div>

              <img
                className="avt"
                src="https://lh3.googleusercontent.com/proxy/-p8WnJ_vLGzHF7p71K-I9Lm57Mvc6ex4tCbp-i5rjXi4bgtG6UTUOsTGt9_JM6IjDxZBgICaFwCxjbK2Axw65-6b-Ws2fejNPOEfOKz6LA"
                alt="user"
              />
            </div>{" "}
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
        </div>
      </div>
    </div>
  );
}

export default Index;
