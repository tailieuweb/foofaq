import React from "react";

//CKEeditor
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

//material
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

//style
import "./index.scss";

//render
const AnswerForm = () => {
  return (
    <div>
      <Grid container className="Add-Answers">
        <Paper className="Editor" elevation={3}>
          <Grid item xs={12}>
            <div className="Your-Answer">
              <h3>Your Answers</h3>
            </div>
            <CKEditor
              editor={ClassicEditor}
              data=""
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </Grid>
        </Paper>
        <Button variant="contained" color="primary" className="Btn-Send">
          Send
        </Button>
      </Grid>
    </div>
  );
};
export default AnswerForm;
