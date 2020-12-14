import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import Link from "../../common/CustomLink";
import { getAllQuesiton, declineQuestion } from "../../helpers";
import SearchBar from "../SearchBar";
import moment from "moment";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles((theme) => ({
  fillterDate: {
    marginBottom: "50px ",
    textAlign: "right",
    marginRight: "50px",
  },
  textField: { marginRight: "50px" },
  btnDate: { marginTop: "15px" },
}));
function QuestionGridViewManager() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  let columns = [
    {
      field: "id",
      headerName: "#ID",

      width: 150,

      renderCell: (params) => <strong>{params.value}</strong>,
    },
    {
      field: "title",
      headerName: "Title",
      width: 150,
      renderCell: (params) => <strong>{params.value}</strong>,
    },
    {
      field: "content",
      headerName: "Content",
      width: 150,
      renderCell: (params) => <strong>{params.value}</strong>,
    },

    {
      field: "tag",
      headerName: "Categories",
      width: 150,
      renderCell: (params) => <strong>{params.value}</strong>,
    },
    {
      field: "point",
      headerName: "Vote",
      width: 150,
      renderCell: (params) => <strong>{params.value}</strong>,
    },
    {
      field: "views",
      headerName: "Views",
      width: 150,
      renderCell: (params) => <strong>{params.value}</strong>,
    },
    {
      field: "answers",
      headerName: "Answers",
      width: 150,
      renderCell: (params) => <strong>5</strong>,
    },
    {
      field: "createdAt",
      headerName: "Date",
      width: 150,
      renderCell: (params) => <strong>{moment(params.value).fromNow()}</strong>,
    },
    {
      field: "users",
      headerName: "Author",
      width: 150,
      renderCell: (params) => <strong> Black Panther </strong>,
    },

    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        if (params.value === true) {
          return (
            <strong
              style={{
                color: "Green",
              }}
            >
              Approval
            </strong>
          );
        } else {
          return (
            <strong
              style={{
                color: "red",
              }}
            >
              Not Approval
            </strong>
          );
        }
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 180,

      renderCell: (params) => (
        <strong>
          <Link to={`/form/${params.getValue("id")}`}>
            <Button variant="contained" color="primary" size="small">
              EDIT
            </Button>
          </Link>
          <Button
            onClick={() => {
              handleDeleteQuestion(params.getValue("id"));
            }}
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginLeft: 16 }}
          >
            DELETE
          </Button>
        </strong>
      ),
    },
    // {
    //   field: "detail",
    //   headerName: "Internship diary ",
    //   width: 150,
    //   renderCell: (params) => (
    //     <strong>
    //       {" "}
    //       <Link to={`/detail/${params.getValue("id")}`}> See detail</Link>{" "}
    //     </strong>
    //   ),
    // },
  ];

  const [data, setData] = useState([]);
  const [rows, setRows] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [key, setKey] = useState("");

  useEffect(() => {
    (async () => {
      const question = await getAllQuesiton(key);
      setData(question);
    })();
  }, [key]);

  useEffect(() => {
    setRows(data);
    console.log(data);
  }, [data]);

  const handleDeleteQuestion = (id) => {
    declineQuestion(id)
      .then(function (response) {
        setOpen(true);
      })
      .catch(function (error) {
        // setOpen(false);
      });
  };
  //   columns = extraColumns ? [...columns, ...extraColumns] : columns;
  //   rows = extraRows ? [...rows, ...extraRows] : rows;
  const handleChangeSearch = (e) => {
    setKeyword(e.target.value);
  };
  const handleSearch = () => {
    setKey(keyword);
  };
  return (
    <>
      <div>
        <SearchBar
          handleChangeSearch={handleChangeSearch}
          handleSearch={handleSearch}
        ></SearchBar>
        <Link to={`/form/`}>
          <Button
            style={{ margin: "50px" }}
            variant="contained"
            color="primary"
            size="small"
          >
            Add question
          </Button>
        </Link>
        <h3>Question Manager </h3>
        <div className={classes.fillterDate}>
          <TextField
            id="date"
            label="From "
            type="date"
            defaultValue="2020-12-06"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            // onChange={(e) => {
            //   setFrom(e.target.value);
            // }}
          />
          <TextField
            id="date"
            label="To "
            type="date"
            defaultValue="2020-12-07"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            // onChange={(e) => {
            //   setTo(e.target.value);
            // }}
          />
          <Button className={classes.btnDate} variant="contained">
            Fillter
          </Button>{" "}
        </div>
        <div style={{ height: "400px", width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            {...data}
          />
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Delete success
        </Alert>
      </Snackbar>
    </>
  );
}
export default QuestionGridViewManager;
