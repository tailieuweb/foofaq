//import react
import React from "react";

//import style
import "./QuestionInfoDetail.scss";

//CKEeditor
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

//material
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

//material icon
import UpIcon from "@material-ui/icons/ArrowDropUp";
import DownIcon from "@material-ui/icons/ArrowDropDown";
import EditIcon from "@material-ui/icons/Edit";

//images
import PersonAvatar from "../../images/Person-Avatar.png";

const QuestionInfoDetail = () => {
  return (
    <div>
      <Grid className="Question" container spacing={3}>
        {/* User Info, Question Info */}
        <Grid item xs={2}>
          <Paper className="Box-Question" elevation={3}>
            <div className="User-Info">
              <img alt="avatar" src={PersonAvatar} />
              name: <br />
              Date: <br />
              Votes: <br />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          {/* Question Details */}
          <Paper className="Box-Question" elevation={3}>
            <Grid container spacing={3}>
              <Grid item xs={1}>
                <div className="Votes">
                  <h5 className="Votes-Results">11</h5>
                  <ButtonGroup
                    orientation="vertical"
                    color="primary"
                    aria-label="vertical contained primary button group"
                    variant="contained"
                    className="GroupBtnVote"
                  >
                    <Button className="Btn-Votes">
                      <UpIcon />
                    </Button>
                    <Button className="Btn-Votes">
                      <DownIcon />
                    </Button>
                  </ButtonGroup>
                </div>
              </Grid>
              <Grid item xs={11}>
                <a className="Question-Title" href="/">
                  Lorem ipsum dolor sit amet?
                </a>
                <div className="Question-Detail">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  {/* <CKEditor
                    editor={ClassicEditor}
                    data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum."
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
                  /> */}
                </div>
                <Button className="Btn-Edit">
                  Edit <EditIcon />
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default QuestionInfoDetail;
