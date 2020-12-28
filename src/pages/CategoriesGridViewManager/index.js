import { React, useState } from "react";
import { Link } from "react-router-dom";

//components
import CategoriesGridView from "../../components/CategoriesGridView";
import PageManagerLayout from "../../common/PageManagerLayout";
import { DeleteCategory, UpdateCategory } from "../../helpers";

//components mui
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddBoxIcon from "@material-ui/icons/AddBox";

//styles
import "./index.scss";
import { IconButton } from "@material-ui/core";

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
            <IconButton
              aria-label="update"
              variant="contained"
              color="primary"
              size="small"
              onClick={() => UpdateCategory(params.getValue("id"))}
            >
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton
            aria-label="delete"
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() => deleteCategory(params.getValue("id"))}
          >
            <DeleteIcon />
          </IconButton>
        </strong>
      ),
    },
  ];
  return (
    <PageManagerLayout>
      <Link to="/forms/categories">
        <Button
          variant="contained"
          color="primary"
          className="btn-add"
          startIcon={<AddBoxIcon />}
        >
          Add Category
        </Button>
      </Link>
      <CategoriesGridView extraColumns={columns} />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Delete success!
        </Alert>
      </Snackbar>
    </PageManagerLayout>
  );
}
