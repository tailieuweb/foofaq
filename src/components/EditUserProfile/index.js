import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { getUser } from "../../helpers/index";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextareaAutosize } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Form, Card, Button } from "react-bootstrap";

import PageLayout from "../../common/PageLayout/index";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const Itemhome = (props) => {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const userData = await getUser();

      setUsers(userData);
    })();
  }, []);

  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();

  return (
    <div>
      <PageLayout>
        <div className="content" style={{ marginTop: "30px" }}>
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
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    defaultValue={user.username}
                  />
                </Form.Group>

                <Form.Group controlId="location">
                  <Form.Label>
                    {" "}
                    <h5>Location:</h5>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter a location"
                    defaultValue={user.location}
                  />
                </Form.Group>

                <Form.Group controlId="title">
                  <Form.Label>
                    {" "}
                    <h5>Title:</h5>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="No title has been set"
                    defaultValue={user.title}
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="about-me">
              <h5 style={{ marginTop: "30px" }}>About me</h5>

              <CKEditor
                style={{ height: "100px" }}
                editor={ClassicEditor}
                data={user.description}
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
                    <Form.Control
                      type="text"
                      placeholder=""
                      defaultValue={user.website_link}
                    />
                  </Form.Group>

                  <Form.Group controlId="location" className="style-form-group">
                    <Form.Label>
                      <h5>Twitter link of username:</h5>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      defaultValue={user.twitter_link}
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="title"
                    className=""
                    className="style-form-group"
                  >
                    <Form.Label>
                      <h5>GitHub link or username:</h5>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="No title has been set"
                      defaultValue={user.github_link}
                    />
                  </Form.Group>
                </div>
              </Form>
              <Form.Group controlId="location" className="style-form-group">
                <Form.Label>
                  <h5>Fullname:</h5>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  defaultValue={user.fullname}
                />
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
      </PageLayout>
    </div>
  );
};
export default Itemhome;
