import React, { useState } from "react";
import { useParams } from "react-router-dom";
//Editor
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToMarkdown from "draftjs-to-markdown";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//style
import "./index.scss";

//materia UI
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

//icons
import SaveIcon from "@material-ui/icons/Save";

//APIS
import { addAnswers } from "../../helpers";

//create SnackBar to alert
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function AnswerForm() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const { id } = useParams();

  let content = draftToMarkdown(convertToRaw(editorState.getCurrentContent()));

  const handleSubmit = (event) => {
    event.preventDefault();

    if (content.length !== 1) {
      try {
        addAnswers(id, content).then(function (reponse) {
          setEditorState(EditorState.createEmpty());
          setOpenSuccess(true);
          console.log(content);
          window.location.reload();
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

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
    setOpenError(false);
  };

  // onSubmit = (event) => {
  //   event.preventDefault();
  //   const answerPost = await addAnswers()
  // }

  // answerPost = () => {
  //   axios.post("https://5fc48ee536bc790016343a0b.mockapi.io/",{questionID, date, content})
  // }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="answerForm">
          <span className="btn btn-success answerText">Your Answers</span>
          <div className="aroundEditorAnswer">
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={setEditorState}
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
    </div>
  );
}

export default AnswerForm;
