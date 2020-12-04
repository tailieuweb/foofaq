//import react
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

//import style
import "./index.scss";

//components
import QuestionForm from "../../components/QuestionForm";

//material
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";

//material icon
import EditIcon from "@material-ui/icons/Edit";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import VisibilityIcon from "@material-ui/icons/Visibility";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
// import SaveIcon from "@material-ui/icons/Save";

//images
import PersonAvatar from "../../images/Person-Avatar.png";

//style
const useStyles = makeStyles((theme) => ({
  buttonEdit: {
    float: "right",
  },
  vote: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: "0.5rem 0.5rem 0 0",
    },
  },
  footerCard: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      margin: "0.5rem 0.5rem 0 0",
    },
    buttonView: {
      padding: "10px",
    },
  },
  buttonSave: {
    float: "right",
    marginRight: "10px",
  },
  views: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: "0.5rem 0.5rem 0 0",
    },
  },
}));

const QuestionInfoDetail = () => {
  //use state
  const [editMode, setEditMode] = React.useState(true);

  // change Mode function
  function changeMode() {
    setEditMode(!editMode);
  }

  //User Info Component
  function UserInfo() {
    return (
      <div>
        <Paper className="Box-Question" elevation={3}>
          <div className="User-Info">
            <img alt="avatar" src={PersonAvatar} />
            name: <br />
            Date:
            <Typography variant="body2" color="textSecondary" component="p">
              September 14, 2016
            </Typography>{" "}
            <br />
            Votes: <br />
          </div>
        </Paper>
      </div>
    );
  }

  // Question Info component
  function QuestionInfo() {
    return (
      <div>
        <Grid className="Question" container>
          <Grid item xs={2}>
            <UserInfo />
          </Grid>
          <Grid item xs={10}>
            {/* Question Details */}
            <Paper className="Box-Question" elevation={3}>
              <Grid container spacing={3}>
                <Grid item className={classes.vote}>
                  <IconButton aria-label="upvote">
                    <ArrowDropUpIcon />
                  </IconButton>
                  <Typography gutterBottom variant="h4">
                    0
                  </Typography>
                  <IconButton aria-label="downvote">
                    <ArrowDropDownIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={11}>
                  <Link gutterBottom variant="h5">
                    How to use classes to “control dreams”?
                  </Link>
                  <Typography variant="body2" color="textSecondary">
                    Background I have been playing around with Deep Dream and
                    Inceptionism, using the Caffe framework to visualize layers
                    of GoogLeNet, an architecture built for the Imagenet
                    project, a large visual...
                  </Typography>
                  {/* categories */}
                  <div className={classes.chips}>
                    <Chip label="JavaScript" clickable />
                    <Chip label="ReactJS" clickable />
                  </div>
                  <Grid container spacing={2} className={classes.footerCard}>
                    {/* views */}
                    <Grid item xs={12} sm className={classes.views}>
                      <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<VisibilityIcon />}
                        className={classes.buttonView}
                      >
                        69k Views
                      </Button>
                      <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<QuestionAnswerIcon />}
                        className={classes.buttonView}
                      >
                        96k Answer
                      </Button>
                    </Grid>
                    {/* user */}
                    <Grid item className={classes.views}>
                      <Button
                        variant="outlined"
                        color="primary"
                        className={classes.buttonEdit}
                        onClick={changeMode}
                      >
                        Edit <EditIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

  //Editor component
  function EditMode() {
    return (
      <div>
        <Grid className="Question" container>
          <Grid item xs={2}>
            <UserInfo />
          </Grid>
          <Grid item xs={10}>
            {/* Question Details */}
            <Paper className="Box-Question" elevation={3}>
              <QuestionForm />
              {/* <Button
                variant="outlined"
                color="primary"
                className={classes.buttonSave}
                onClick={changeMode}
              >
                Save <SaveIcon />{" "}
              </Button> */}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
  const classes = useStyles();
  return (
    <div>
      {/* Question Info, Edit Question Info */}
      {editMode ? <QuestionInfo /> : <EditMode />}
    </div>
  );
};
export default QuestionInfoDetail;
