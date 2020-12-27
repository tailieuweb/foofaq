import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { getUser } from "../../helpers/index";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { makeStyles } from "@material-ui/core/styles";
import { Form, Card, Button, Modal } from "react-bootstrap";

import PageLayout from "../../common/PageLayout/index";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const UpdatePost = (props) => {
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <PageLayout>
        <Card style={{ marginTop: "30px" }}>
          <Card.Header>Thêm bài viết</Card.Header>
          <Card.Body>
            <Card.Text>
              <div className="update-post">
                <Form style={{ width: "40%" }}>
                  <Form.Group controlId="dispalyName">
                    <Form.Label>
                      <h5>Title:</h5>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nhập tiêu đề bài viết"
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="about-me">
                <h5 style={{ marginTop: "30px" }}>Description:</h5>

                <CKEditor
                  style={{ height: "100px" }}
                  editor={ClassicEditor}
                  placeholder="Nhập mô tả bài viết"
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
              </div>
            </Card.Text>
            <div className="button-update-delete">
              <div>
                {" "}
                <Button variant="secondary" style={{ marginRight: "5px" }}>
                  Come Back
                </Button>
                <Button variant="danger" onClick={handleShow}>
                  Delete Post
                </Button>
              </div>
              <div>
                {" "}
                <Button variant="primary">Update Post</Button>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Thông báo</Modal.Title>
          </Modal.Header>
          <Modal.Body>Bạn có muốn xóa bài viết không</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Yes
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </PageLayout>
    </div>
  );
};
export default UpdatePost;
