//import react
import React from "react";

//import style
import "./index.scss";

//material
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import UpIcon from "@material-ui/icons/ArrowDropUp";
import DownIcon from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

//images
import PersonAvatar from "../../images/Person-Avatar.png";

const QuestionAnswerDetail = () => {
  return (
    <div>
      <Grid container className="Answers" spacing={3}>
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
          {/* Answers The Question */}
          <Paper className="Box-Answers" elevation={3}>
            <div className="Answers-Group">
              <h3>Answers</h3>
            </div>
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
                <Paper elevation={3}>
                  <Grid container className="Answer-Info">
                    {/* User Info, Question Info */}
                    <Grid item xs={2}>
                      <Paper elevation={3}>
                        <div className="User-Info ">
                          <img alt="avatar" src={PersonAvatar} />
                          name: <br />
                          Date: <br />
                          Votes: <br />
                        </div>
                      </Paper>
                    </Grid>

                    <Grid item xs={10}>
                      <a className="Answer-Title" href="/">
                        Lorem ipsum dolor sit amet?
                      </a>
                      <div className="Answer-Detail">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
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
                <Paper elevation={3}>
                  <Grid container className="Answer-Info">
                    {/* User Info, Question Info */}
                    <Grid item xs={2}>
                      <Paper elevation={3}>
                        <div className="User-Info ">
                          <img alt="avatar" src={PersonAvatar} />
                          name: <br />
                          Date: <br />
                          Votes: <br />
                        </div>
                      </Paper>
                    </Grid>

                    <Grid item xs={10}>
                      <a className="Answer-Title" href="/">
                        Lorem ipsum dolor sit amet?
                      </a>
                      <div className="Answer-Detail">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default QuestionAnswerDetail;
