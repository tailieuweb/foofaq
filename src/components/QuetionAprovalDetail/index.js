import React from "react";
import HeaderAsideNavbar from "../HeaderAsideNavbar";
import SearchBar from "../SearchBar";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Link from "../../common/CustomLink";

import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import "./index.scss";

function Index(props) {
  const [open, setOpen] = React.useState(false);
  const [decline, setDecline] = React.useState(false);
  const [feedback, setFeedback] = React.useState(false);

  const handleClickOpenApproval = () => {
    setOpen(true);
  };
  const handleClickOpenDecline = () => {
    setDecline(true);
  };
  const handleClickOpenFeedBack = () => {
    setFeedback(true);
  };
  const handleClose = () => {
    setOpen(false);
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
            <h4 className="question-title">Quetion 1</h4>
            <div className="question-des">
              <p>
                Văn học theo cách nói chung nhất, là bất kỳ tác phẩm nào bằng
                văn bản. Hiểu theo nghĩa hẹp hơn, thì văn học là dạng văn bản
                được coi là một hình thức nghệ thuật, hoặc bất kỳ một bài viết
                nào được coi là có giá trị nghệ thuật hoặc trí tuệ, thường là do
                cách thức triển khai ngôn ngữ theo những cách khác với cách sử
                dụng bình thường. Trong các định nghĩa hiện đại hơn, văn học bao
                hàm cả các văn bản được nói ra hoặc được hát lên (văn học truyền
                miệng). Sự phát triển trong công nghệ in ấn đã cho phép phân
                phối và phát triển các tác phẩm chữ viết, và tạo ra loại văn học
                điện tử. Văn học có thể phân loại thành: hư cấu hoặc phi hư cấu
                (theo nội dung), và thơ hoặc văn xuôi (theo hình thức). Thể loại
                văn xuôi có thể phân loại tiếp thành tiểu thuyết, truyện ngắn và
                kịch bản. Các tác phẩm văn học có thể được phân loại theo từng
                giai đoạn lịch sử được nhắc đến, hoặc một số thể loại nội dung
                hoặc hành văn đặc thù (bi kịch, hài kịch, lãng mạn, gợi
                tình,...)
              </p>
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

      {/* feedback */}
      <Dialog
        open={feedback}
        onClose={handleFeedBack}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Decline post an give feedback
        </DialogTitle>
        <DialogContent>
          <DialogContentText>You can feedback here.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Feedback"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFeedBack} color="primary">
            Cancel
          </Button>
          <Button onClick={handleFeedBack} color="primary">
            Feedback
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Index;
