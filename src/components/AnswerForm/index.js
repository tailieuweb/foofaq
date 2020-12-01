import React, { Component } from "react";
//Editor
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//style
import "./index.scss";

//icons
import SaveIcon from "@material-ui/icons/Save";

class AnswerForm extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  render() {
    const { editorState } = this.state;
    return (
      <form>
        <div className="answerForm">
          <span className="btn btn-success answerText">Your Answers</span>
          <div className="aroundEditorAnswer">
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
            />
          </div>
          <div className="aroundBtnAnswer">
            <button type="button" className="btn btn-success">
              Save <SaveIcon />{" "}
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AnswerForm;
