//hook call api:
import React, { useState, useEffect } from "react";
import { API_ONE_USERSTORY } from "../../helpers/index";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
// import Imgavatar from "../../images/stack.png";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";

const index = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },

  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },

  input: {
    display: "none",
  },
  root: {
    width: "30%",
    maxWidth: 360,

    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ImageAvatars() {
  const classes = index();
  const [user, setUser] = useState({});

  const displaynameEl1 = React.useRef(null);
  const titleE1 = React.useRef(null);
  const fullnameEl1 = React.useRef(null);
  const ImgavatarEl1 = React.useRef(null);
  const liveE1 = React.useRef(null);
  const twiterE1 = React.useRef(null);
  const WebsiteE1 = React.useRef(null);
  const GitHubE1 = React.useRef(null);
  //Method: Get
  useEffect(() => {
    fetch(`${API_ONE_USERSTORY}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        //  console.log(response);
        setUser(response);
      })
      .catch((error) => console.log(error));
  }, []);
  const HandleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API_ONE_USERSTORY}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        displayname: displaynameEl1.current.value,
        fullname: fullnameEl1.current.value,
        avatar: ImgavatarEl1.current.value,
        title: titleE1.current.value,
        live: liveE1.current.value,
        twiter: twiterE1.current.value,
        Website: WebsiteE1.current.value,
        GitHub: GitHubE1.current.value,
      }),
    }).then((response) => {
      console.log(response);
    });
    
  };
  return (
    <div className="alert alert-info container">
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Typography component="div">
            {/* <div className={classes.root}>
              <Avatar
                alt="Remy Sharp"
                src={user.avatar}
                className={classes.large}
              />
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                ref={ImgavatarEl1}
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="black" component="span">
                  Upload
                </Button>
              </label>
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </div> */}
            <div>
              <br />
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputDisplay">Display name</label>
                    <input
                      className="form-control"
                      id="inputDisplay"
                      defaultValue={user.displayname}
                      ref={displaynameEl1}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      <i className="fas fa-exclamation"></i> How you appear to
                      other users on the Stack Overflow QvsA Network..
                    </small>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputFullname">Full name</label>
                    <input
                      className="form-control"
                      id="inputFullname"
                      defaultValue={user.fullname}
                      ref={fullnameEl1}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      <i className="fas fa-exclamation"></i> How you appear to
                      employers, your private Teams, and to other users when you
                      share your Developer Story.
                    </small>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputTitle">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputTitle"
                    placeholder="What? you current position?"
                    defaultValue={user.title}
                    ref={titleE1}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputDisplay">Where you live</label>
                    <input
                      className="form-control"
                      id="inputDisplay"
                      placeholder="Curent Location"
                      defaultValue={user.live}
                      ref={liveE1}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputFullname">Twiter</label>
                    <label
                      className="sr-only"
                      htmlFor="inlineFormInputGroupUsername2"
                    ></label>
                    <div className="input-group mb-2 mr-sm-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fab fa-twitter"></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroupUsername2"
                        placeholder="Profile link or usemame"
                        defaultValue={user.twiter}
                        ref={twiterE1}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputDisplay">Website</label>
                    <label
                      className="sr-only"
                      htmlFor="inlineFormInputGroupUsername2"
                    ></label>
                    <div className="input-group mb-2 mr-sm-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fas fa-cogs"></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroupUsername2"
                        placeholder="http://example.org/"
                        defaultValue={user.Website}
                        ref={WebsiteE1}
                      />
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputFullname">GitHub</label>
                    <label
                      className="sr-only"
                      htmlFor="inlineFormInputGroupUsername2"
                    ></label>
                    <div className="input-group mb-2 mr-sm-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fab fa-github"></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroupUsername2"
                        placeholder="Profile link or usemame"
                        defaultValue={user.GitHub}
                        ref={GitHubE1}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <br />
                  <div className="alert">
                    <ButtonGroup
                      orientation="vertical"
                      color="primary"
                      aria-label="vertical contained primary button group"
                      variant="contained"
                    >
                      {/* <Button onClick={HandleSubmit} Link>
                        Save
                      </Button> */}
                      <Link
                        to={`/Edit-Profile`}
                        type="submit"
                        className="btn btn-primary"
                        Link
                      >
                        Save
                      </Link>
                    </ButtonGroup>
                    <ButtonGroup
                      orientation="vertical"
                      color="primary"
                      aria-label="vertical contained primary button group"
                      variant="text"
                    >
                      <Button>Cancel</Button>
                    </ButtonGroup>
                  </div>
                </div>
              </form>
            </div>
          </Typography>
        </Container>
      </React.Fragment>
    </div>
  );
}
