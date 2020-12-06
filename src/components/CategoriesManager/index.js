import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
// import Pagination from "@material-ui/lab/Pagination";
import { TableH, TableB } from "../../components/QuestionTable";
import Pagination from "@material-ui/lab/Pagination";

import Snackbar from "@material-ui/core/Snackbar";

import Link from "../../common/CustomLink";
// import QuestionApprovalCard from "../../components/QuestionApprovalCard";
// import HeaderAsideNavbar from "../../components/HeaderAsideNavbar";
import SearchBar from "../../components/SearchBar";
import { getCategories, DeleteCategory, pagCategories } from "../../helpers";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tablePa: {
    marginTop: "50px",
    marginRight: "50px",
    paddingRight: "50px",
  },
  btnadd: {
    marginTop: "20px",
  },
  pagination: {
    margin: "20px auto",
    marginLeft: "25%",
  },
});
function CategoriesManager(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const [page, setPage] = useState(1);
  const [key, setKey] = useState("");
  const [keyword, setKeyword] = useState("");
  const [pagCat, setPagCat] = useState([]);
  let perPage = 5;
  let count = parseInt(pagCat.length) / perPage;

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    (async () => {
      const categoryData = await getCategories(key, page, perPage);
      setCategories(categoryData);
    })();
  }, [key, page, perPage]);
  useEffect(() => {
    (async () => {
      const categoryData = await pagCategories();
      setPagCat(categoryData);
    })();
  }, []);
  const handleChangeSearch = (e) => {
    setKeyword(e.target.value);
  };
  const handleSearch = () => {
    setKey(keyword);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const DeleteCategoryID = (id) => {
    var answer = window.confirm("you definitely want to delete ");
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
  return (
    <div>
      <h1> Categories </h1>
      <SearchBar
        handleChangeSearch={handleChangeSearch}
        handleSearch={handleSearch}
      />
      <Link to="/forms/categories">
        <Button variant="contained" color="primary">
          Add
        </Button>
      </Link>
      <TableContainer className={classes.tablePa} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableH
            tt_id="#ID"
            tt_title="TITLE"
            tt_update="UPDATE"
            tt_delete="DELETE"
          ></TableH>
          {categories.map((cat) => (
            <TableB
              key_id={cat.id}
              id={cat.id}
              title={cat.name}
              update={
                <Link to={"/forms/categories/" + cat.id}>
                  <Button variant="contained" color="primary">
                    {" "}
                    Update{" "}
                  </Button>
                </Link>
              }
              delete={
                <Button
                  onClick={() => {
                    DeleteCategoryID(cat.id);
                  }}
                  variant="contained"
                  color="secondary"
                >
                  {" "}
                  Delete{" "}
                </Button>
              }
            ></TableB>
          ))}
        </Table>
      </TableContainer>

      <Pagination
        className={classes.pagination}
        count={Math.ceil(count)}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        page={page}
        siblingCount={1}
        boundaryCount={1}
      />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Delete success!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default CategoriesManager;
