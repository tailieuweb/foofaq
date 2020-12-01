import React, { useState } from "react";
import HeaderAsideNavbar from "../HeaderAsideNavbar";

import SearchBar from "../SearchBar";
import Button from "@material-ui/core/Button";
import "./index.scss";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { green } from "@material-ui/core/colors";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Link from "../../common/CustomLink";

const Index = (props) => {
  const [open, setOpen] = React.useState(false);
  const [decline, setDecline] = React.useState(false);

  const handleClickOpenApproval = () => {
    setOpen(true);
  };
  const handleClickOpenDecline = () => {
    setDecline(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseDecline = () => {
    setDecline(false);
  };

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
                src="https://lh3.googleusercontent.com/proxy/-p8WnJ_vLGzHF7p71K-I9Lm57Mvc6ex4tCbp-i5rjXi4bgtG6UTUOsTGt9_JM6IjDxZBgICaFwCxjbK2Axw65-6b-Ws2fejNPOEfOKz6LA"
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

            <div className="question-list">
              <div className="app-dec">
                <Button
                  variant="outlined"
                  style={{
                    borderColor: green[500],
                    marginRight: "20px",
                    outline: "none",
                  }}
                  onClick={handleClickOpenApproval}
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
                  onClick={handleClickOpenDecline}
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
                    <Link id="abs" to="/detailapproval">
                      <h5 className="question-title">Quetion 1</h5>
                    </Link>
                    <p className="question-des">
                      {" "}
                      Vũ Trọng Phụng (1912-1939) là một nhà văn, nhà báo nổi
                      tiếng của Việt Nam vào đầu thế kỷ 20. Tuy thời gian cầm
                      bút rất ngắn ngủi, với tác phẩm đầu tay là truyện ngắn
                      Chống nạng lên đường đăng trên Ngọ báo vào năm 1930, ông
                      đã để lại một kho tác phẩm đáng kinh ngạc: hơn 30 truyện
                      ngắn, 9 tập tiểu thuyết, 9 tập phóng sự, 7 vở kịch, cùng
                      một bản dịch vở kịch từ tiếng Pháp, một số bài viết phê
                      bình, .{" "}
                    </p>
                  </div>
                </div>
                <div clasName="col-md-2  col-12">
                  <div className="user-question">
                    <div className="question-time"> Asked 5 days ago</div>
                    <img
                      className="avt"
                      src="https://lh3.googleusercontent.com/proxy/-p8WnJ_vLGzHF7p71K-I9Lm57Mvc6ex4tCbp-i5rjXi4bgtG6UTUOsTGt9_JM6IjDxZBgICaFwCxjbK2Axw65-6b-Ws2fejNPOEfOKz6LA"
                      alt="user"
                    />
                    <div className="username">User 1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure to approve ?"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Approve
          </Button>
        </DialogActions>
      </Dialog>
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
          <Button onClick={handleCloseDecline} color="primary">
            Disagree
          </Button>
          <Button onClick={handleCloseDecline} color="primary" autoFocus>
            Decline
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Index;
