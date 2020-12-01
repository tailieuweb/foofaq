import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.scss";

class QuestionForm extends Component {
    state = {
      editorState: EditorState.createEmpty(),
    }
  
    onEditorStateChange = (editorState) => {
      this.setState({
        editorState,
      });
    };
    render() {
      const { editorState } = this.state;
      return (
            <form>
                <div className="questionForm">
                  <div class="form-group">
                    <label for="questionTitle"><b>Tiêu đề</b></label>
                    <input type="text" class="form-control" id="questionTitle" aria-describedby="questionTitle" placeholder="Nhập tiêu đề câu hỏi..."/>
                  </div>
                  <label for="aroundEditorQuestion"><b>Nội dung</b></label>
                  <div className="aroundEditorQuestion" id="aroundEditorQuestion">
                    <Editor
                      editorState={editorState}
                      wrapperClassName="demo-wrapper"
                      editorClassName="demo-editor"
                      onEditorStateChange={this.onEditorStateChange}
                      />
                    </div>
                    <div class="form-group">
                      <label for="questionTag"><b>Thẻ</b></label>
                      <input type="text" class="form-control" id="questionTag" aria-describedby="questionTag" placeholder="Nhập thẻ liên quan đến câu hỏi..."/>
                    </div>
                    <div className="aroundBtnQuestion">
                      <button type="button" className="btn btn-success">Đăng</button>
                    </div>
                </div>
            </form>
      );
    }
  }

export default QuestionForm;

