import React, { useState, useEffect } from "react";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import axios from "axios";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

import { useParams } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import draftToMarkdown from "draftjs-to-markdown";
import PageLayout from '../../common/PageLayout/index';
// import CategoriesInput from "../CategoriesInput";

//APIS
import { getQuesitonById } from "../../helpers";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function QuestionForm() {
  const [open, setOpen] = React.useState(false);
  const [question, setQuestion] = useState([]);
  const handleClose = () => {
    setOpen(false);
  };

  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");

  // const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    setEdittorStates(
      EditorState.createWithContent(
        ContentState.createFromBlockArray(
          convertFromHTML(`${question.content}`)
        )
      )
    );
  }, [question.content]);
  const [editorStates, setEdittorStates] = useState(EditorState.createEmpty());

  let content = draftToMarkdown(convertToRaw(editorStates.getCurrentContent()));

  const [nofi, setNofi] = useState("");
  let handleSubmit = (event) => {
    event.preventDefault();
  };
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const result = await getQuesitonById(id);
      setQuestion(result);
    })();
  }, [id]);
  if (id === undefined) {
    handleSubmit = (event) => {
      event.preventDefault();
      questionPost();
    };
    const questionPost = () => {
      axios
        .post("https://5fc48ee536bc790016343a0b.mockapi.io/questions", {
          title: title,
          tag: tag,
          content: content,
        })
        .then(function (response) {
          // handle success
          setTitle("");
          setTag("");
          console.log("POST Successfully");
          setNofi("POST Successfully");
          setOpen(true);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          setNofi("POST Failed");
          setOpen(true);
        });
    };
  }

  //Truong hop id co gia tri => PUT
  else {
    handleSubmit = (event) => {
      event.preventDefault();
      questionPut(id);
    };
    const questionPut = (id) => {
      axios
        .put("https://5fc48ee536bc790016343a0b.mockapi.io/questions/" + id, {
          title: title,
          tag: tag,
          content: content,
        })
        .then(function (response) {
          // handle success
          console.log("Successfully");
          setTitle("");
          setTag("");
          console.log("POST Successfully");
          setNofi("POST Successfully");
          setOpen(true);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          console.log(error);
          setNofi("POST Failed");
          setOpen(true);
        });
    };
  }

  async function getQuestion() {
    const response = await axios.get();
    return response.data;
  }

  const sampleMarkup = `${question.id}`;
  const blocksFromHTML = convertFromHTML(sampleMarkup);
  const state = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );

  console.log("question: " + question.content);
  return (
    <div>
      <PageLayout/>
      <form onSubmit={handleSubmit}>
        <div className="questionForm">
          <div className="form-group">
            <label htmlFor="questionTitle">
              <h1 >Form tạo bài viết mới</h1>
              <b>Tiêu đề</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="questionTitle"
              aria-describedby="questionTitle"
              placeholder="Nhập tiêu đề ..."
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              defaultValue={question.title}
            />
          </div>
          <label htmlFor="aroundEditorQuestion">
            <b>Nội dung</b>
          </label>
          <div className="aroundEditorQuestion" id="aroundEditorQuestion">
            <Editor
              editorState={editorStates}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={setEdittorStates}
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="questionTag">
              <b>Thẻ</b>
            </label> */}
            {/* <input
              type="text"
              className="form-control"
              id="questionTag"
              aria-describedby="questionTag"
              placeholder="Nhập thẻ liên quan đến câu hỏi..."
              defaultValue={question.tag}
              onChange={(e) => {
                setTag(e.target.value);
              }}
            /> */}
            {/* <CategoriesInput /> */}
          </div>
          <div className="aroundBtnQuestion">
            <input type="submit" className="btn btn-success" value="Đăng" />
          </div>
          
        </div>
      </form>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Post Successfully
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>{nofi}</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default QuestionForm;
