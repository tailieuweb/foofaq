import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
//Editor
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToMarkdown from "draftjs-to-markdown";

//components
import PageLayout from "../../common/PageLayout";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//materia UI
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

//icons
import SaveIcon from "@material-ui/icons/Save";

//APIS
import { getAnswer, updateAnswer } from "../../helpers";

//create SnackBar to alert
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function AnswerEdit(props) {
  const history = useHistory();
  const [editorState, setEdittorState] = useState(EditorState.createEmpty());
  const [answer, setAnswer] = useState([]);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const questionId = props.match.params.qId;
  const answerID = props.match.params.id;

  let content = draftToMarkdown(convertToRaw(editorState.getCurrentContent()));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (content !== 1) {
      try {
        updateAnswer(questionId, answerID, content).then(function (reponse) {
          setOpenSuccess(true);
          console.log(content);
          history.replace(`/questions/${questionId}`);
        });
      } catch (error) {
        setErrorText(error + "");
        setOpenError(true);
      }
    } else {
      setErrorText("Post Failed");
      setOpenError(true);
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getAnswer(questionId, answerID);
      setAnswer(data);
    })();
  }, [questionId, answerID]);

  useEffect(() => {
    setEdittorState(
      EditorState.createWithContent(
        ContentState.createFromBlockArray(convertFromHTML(`${answer.content}`))
      )
    );
  }, [answer.content]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
    setOpenError(false);
  };

  return (
    <PageLayout>
      <form onSubmit={handleSubmit}>
        <div className="answerForm">
          <span className="btn btn-success answerText">Your Answers</span>
          <div className="aroundEditorAnswer">
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={setEdittorState}
            />
          </div>
          <div className="aroundBtnAnswer">
            <button type="submit" className="btn btn-success">
              Save <SaveIcon />{" "}
            </button>
          </div>
        </div>
      </form>
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {errorText}
        </Alert>
      </Snackbar>
    </PageLayout>
  );
}

export default AnswerEdit;
