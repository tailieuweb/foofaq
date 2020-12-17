import { React, useState } from "react";
import CategoriesGridView from "../../components/CategoriesGridView";
import { DeleteCategory, UpdateCategory } from "../../helpers";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

export default function CategoriesGridViewManager() {
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const deleteCategory = (id) => {
    var answer = window.confirm("Are you sure you want to delete it?");
    if (answer) {
      DeleteCategory(id)
        .then(function (response) {
          // handle success
          console.log("Successfully");
          setOpen(true);
          window.location.reload();
        })
        .catch(function (error) {
          // handle error
          setOpen(false);
        });
    } else {
      return;
    }
  };
  let columns = [
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <strong>
          <Link to={`/forms/categories/${params.getValue("id")}`}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => UpdateCategory(params.getValue("id"))}
            >
              UPDATE
            </Button>
          </Link>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() => deleteCategory(params.getValue("id"))}
          >
            DELETE
          </Button>
        </strong>
      ),
    },
  ];
  return (
    <>
      <Link to="/forms/categories">
        <Button variant="contained" color="primary" style={{ marginTop: 20 }}>
          Add Category
        </Button>
      </Link>
      <CategoriesGridView extraColumns={columns} />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Delete success!
        </Alert>
      </Snackbar>
    </>
  );
}
