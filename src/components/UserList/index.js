import React from "react";
import "./style.css";
import { Avatar, Paper, Tabs, Tab, TextareaAutosize } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Navbar, Nav, FormControl, Form, Card, Button } from "react-bootstrap";
import "./style.css";
const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));
const Itemhome = (props) => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Questions</Nav.Link>
          <Nav.Link href="#features">Tags</Nav.Link>
        </Nav>
        <Form inline>
          <Navbar.Brand href="#home" style={{ display: "flex" }}>
            <Avatar className={classes.small}>H</Avatar>{" "}
            <span style={{ marginLeft: "5px", fontSize: "15px" }}>
              {" "}
              Username
            </span>
          </Navbar.Brand>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

      <div className="content" style={{ marginTop: "30px" }}>
        <Paper square>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Profile" />
            <Tab label="Activity" />
            <Tab label="Developer Story" />
            <Tab label="Edit profile and settings" />
          </Tabs>
        </Paper>
        <div
          className="edit-your-profile"
          style={{ marginLeft: "50px", marginTop: "30px" }}
        >
          <h4 className="your-profile">Edit your profile</h4>
          <h4 style={{ marginTop: "30px" }}>Public information</h4>
          <div className="form-edit-profile">
            <Card
              style={{
                width: "15rem",
                border: "none",
                margin: "0px 30px 30px 0px",
              }}
            >
              <Card.Img
                style={{
                  marginTop: "5px",
                  width: "100%",
                  height: "225px",
                }}
                variant="top"
                src="https://nartc.netlify.app/static/d142aa02b155c81406c2e60dda0d08c3/9d953/health_hack.png"
              />
              <Card.Body style={{ padding: "0px" }}>
                <Button
                  style={{
                    width: "100%",
                    borderRadius: "0px",
                  }}
                  variant="secondary"
                >
                  Change picture
                </Button>
              </Card.Body>
            </Card>

            <Form style={{ width: "40%" }}>
              <Form.Group controlId="dispalyName">
                <Form.Label>
                  <h5>Display Name:</h5>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>

              <Form.Group controlId="location">
                <Form.Label>
                  {" "}
                  <h5>Password:</h5>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter a location" />
              </Form.Group>

              <Form.Group controlId="title">
                <Form.Label>
                  {" "}
                  <h5>Title:</h5>
                </Form.Label>
                <Form.Control type="text" placeholder="No title has been set" />
              </Form.Group>
            </Form>
          </div>
          <div className="about-me">
            <h5 style={{ marginTop: "30px" }}>About me</h5>
            <TextareaAutosize
              style={{ width: "70%" }}
              aria-label=""
              rowsMin={6}
              placeholder=""
            />
          </div>

          <div className="web-presence">
            <h5 style={{ marginTop: "30px" }}>Web presence</h5>

            <Form style={{ width: "100%", marginTop: "30px" }}>
              <div style={{ display: "flex" }}>
                <Form.Group
                  controlId="dispalyName"
                  className="style-form-group"
                >
                  <Form.Label>
                    <h5>Website link:</h5>
                  </Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group controlId="location" className="style-form-group">
                  <Form.Label>
                    <h5>Twitter link of username:</h5>
                  </Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group controlId="title" className="">
                  <Form.Label>
                    <h5>GitHub link or username:</h5>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="No title has been set"
                  />
                </Form.Group>
              </div>
            </Form>
            <Form.Group controlId="location" className="style-form-group">
              <Form.Label>
                <h5>Fullname:</h5>
              </Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <div style={{ marginTop: "50px" }}>
              <Button variant="primary" style={{ marginRight: "10px" }}>
                Save profile
              </Button>
              <Button variant="primary">Cancel</Button>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};
export default Itemhome;
