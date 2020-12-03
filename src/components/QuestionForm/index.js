import React, { useEffect, useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import draftToMarkdown from 'draftjs-to-markdown';
import { Editor } from 'react-draft-wysiwyg';
import axios from 'axios';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.scss";

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
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
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
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

function QuestionForm({ id }) {

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const [title, setTitle] = useState("");

  const [tag, setTag] = useState("");

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  let content = draftToMarkdown(convertToRaw(editorState.getCurrentContent()));

  const [nofi, setNofi] = useState("");
  let handleSubmit = (event) => {
    event.preventDefault();
  }

  //Truong hop POST k co gia tri id (id duoc truyen null)
  if(id === null){
    handleSubmit = (event) => {
      event.preventDefault();
      questionPost();
    }
    const questionPost = () => {
      axios.post("https://5fc48ee536bc790016343a0b.mockapi.io/questions", { title: title, tag: tag, content: content })
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
    }
  }

  //Truong hop id co gia tri => PUT
  else{
    
  }
  
  async function getQuestion(){
    const response = await axios.get('https://5fc48ee536bc790016343a0b.mockapi.io/questions/12');
    return response.data;
  }

  const questionPut = () => {
    axios.put("https://5fc48ee536bc790016343a0b.mockapi.io/questions/12", { title: title, tag: tag, content: content })
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
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="questionForm">
        <div className="form-group">
          <label htmlFor="questionTitle"><b>Tiêu đề</b></label>
          <input type="text"
            className="form-control"
            id="questionTitle"
            aria-describedby="questionTitle"
            placeholder="Nhập tiêu đề câu hỏi..."
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>
        <label htmlFor="aroundEditorQuestion"><b>Nội dung</b></label>
        <div className="aroundEditorQuestion" id="aroundEditorQuestion">
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={setEditorState}
          />
        </div>
        <div className="form-group">
          <label htmlFor="questionTag"><b>Thẻ</b></label>
          <input type="text"
            className="form-control"
            id="questionTag"
            aria-describedby="questionTag"
            placeholder="Nhập thẻ liên quan đến câu hỏi..."
            value={tag}
            onChange={(e) => { setTag(e.target.value) }}
          />
        </div>
        <div className="aroundBtnQuestion">
          <input type="submit" className="btn btn-success" value="Đăng" />
        </div>
      </div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Post Successfully
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {nofi}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
}

export default QuestionForm;

