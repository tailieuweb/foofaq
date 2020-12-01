import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import axios from 'axios';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.scss";

function QuestionForm(){
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  // const [editorState = EditorState.createEmpty(), setEditorState] = useState([]);
    const handleSubmit = (event) => {
      event.preventDefault();
      questionPost();
    }
    const questionPost = () => {
      axios.post("https://5fc48ee536bc790016343a0b.mockapi.io/questions", { title: title, tag: tag });
    }
    // const onEditorStateChange = () => {
    //   setEditorState(editorState);
    // };
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
                    onChange={(e) => {setTitle(e.target.value)}}
                    />
                  </div>
                  <label htmlFor="aroundEditorQuestion"><b>Nội dung</b></label>
                  <div className="aroundEditorQuestion" id="aroundEditorQuestion">
                    <Editor
                      // editorState={editorState}
                      wrapperClassName="demo-wrapper"
                      editorClassName="demo-editor"
                      // onEditorStateChange={onEditorStateChange}
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
                      onChange={(e) => {setTag(e.target.value)}}
                      />
                    </div>
                    <div className="aroundBtnQuestion">
                      <input type="submit" className="btn btn-success" value="Đăng"/>
                    </div>
                </div>
            </form>
      );
    }

export default QuestionForm;

