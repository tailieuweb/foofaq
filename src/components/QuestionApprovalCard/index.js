import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import SearchBar from "../SearchBar";
import Button from "@material-ui/core/Button";
import "./index.scss";
import { DataGrid } from "@material-ui/data-grid";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import { green } from "@material-ui/core/colors";

//
import TextField from "@material-ui/core/TextField";

import { DialogDecline } from "../Dialog";

//
import { getQuestions, approveQuestion, declineQuestion } from "../../helpers";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  buttonr: {
    borderColor: green[500],
    marginRight: "20px",
    outline: "none",
  },
  pag: {
    marginBottom: "50px",
    width: "100%",
  },
  pagechill: {
    marginLeft: "30%",
  },
  checkIcon: {
    color: green[500],
    fontSize: 30,
  },
  buttonc: {
    borderColor: "red",
    outline: "none",
  },
  closeIcon: {
    fontSize: 30,
    fontWeight: "bold",
    cursor: "pointer",
    color: "red",
  },
  fillterDate: {
    marginBottom: "50px ",
    textAlign: "right",
    marginRight: "50px",
  },
  textField: { marginRight: "30px" },
  btnDate: { marginTop: "15px" },
}));

const Index = (props) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [openDecline, setOpenDeline] = useState(false);

  // const [page, setPage] = useState(1);

  const [decline, setDecline] = useState(false);
  const [questions, setQuestions] = useState([]);
  // const [all, setAll] = useState([]);
  // fillter Date
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  //search
  const [keyword, setKeyword] = useState("");
  const [key, setKey] = useState("");
  let perPage = 5;
  // const [dateQuestion, setDateQuestion] = useState("");
  // let count = Number(all.length) / perPage;
  let status = true;
  const [idRaw, setIdRaw] = useState("");
  //let title, content;
  // const [newest, setNewest] = useState("");
  // const [oldest, setOldest] = useState("");
  const [statusA, setStatusA] = useState("status=false");

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  //decline

  const handleClickDecline = (id) => {
    setDecline(true);
    setIdRaw(id);
  };
  const handleOpentDecline = () => {
    declineQuestion(idRaw)
      .then(function (response) {
        // handle success
        setOpenDeline(true);
        console.log("Delete Succecs");
        setDecline(false);

        window.location.reload();
      })
      .catch(function (error) {
        setOpen(false);
        console.log("err");
      });
  };
  const handleCloseDecline = () => {
    setDecline(false);
  };
  //approve
  const handleClickOpenApproval = (id) => {
    approveQuestion(id, status)
      .then(function (response) {
        setOpen(true);
        console.log("Successfully");

        window.location.reload();
      })
      .catch(function (error) {
        setOpen(false);
      });
  };

  useEffect(() => {
    (async () => {
      const questionData = await getQuestions(key, statusA);
      setQuestions(questionData);
    })();
  }, [key, statusA]);

  // searchBar
  const handleChangeSearch = (e) => {
    setKeyword(e.target.value);
  };
  const handleSearch = () => {
    if (keyword !== "") {
      setKey(keyword);
      setStatusA("");
    } else {
      setKey("");
      setStatusA("status=false");
    }
  };
  const dateFrom = moment(from).valueOf();
  const dateTo = moment(to).valueOf();
  // console.log("to: " + dateTo);
  // console.log("from: " + dateFrom);
  // console.log("- " + to - from);
  // dateQuestion;
  let dateProcessed = [];
  const date = () => {
    questions.map((q) => {
      const dateQuestion = moment(q.createdAt).valueOf();

      if (dateQuestion >= dateFrom && dateQuestion <= dateTo) {
        dateProcessed.push(q);
        console.log(dateProcessed);
        setQuestions(dateProcessed);
      }
    });
  };

  //console.log(dateQ);
  const handleDate = () => {
    date();
  };
  // console.log(questions);
  //const [rows, setRows] = useState([]);
  let rows = [...questions];

  // useEffect(() => {
  //   setRows(questions);
  // }, [questions]);
  const unFillter = () => {
    (async () => {
      const questionData = await getQuestions(key, statusA);
      setQuestions(questionData);
    })();
  };
  let columns = [
    {
      field: "id",
      headerName: "#ID",
      width: 70,
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
      renderCell: (params) => <strong></strong>,
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
      field: "action",
      headerName: "Action",
      width: 230,

      renderCell: (params) => (
        <>
          <strong>
            <Button
              onClick={() => {
                handleClickOpenApproval(params.getValue("id"));
              }}
              variant="contained"
              color="primary"
              size="small"
            >
              Approval
            </Button>

            <Button
              onClick={() => {
                handleClickDecline(params.getValue("id"));
              }}
              variant="contained"
              color="secondary"
              size="small"
              style={{ marginLeft: 16 }}
            >
              Decline
            </Button>
          </strong>
        </>
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

  // console.log(columns);
  return (
    <>
      <div>
        <div className="searchBar">
          <SearchBar
            handleChangeSearch={handleChangeSearch}
            handleSearch={handleSearch}
          />{" "}
        </div>
        <div className="infoadmin">
          <div className="user">
            <img
              className="avt"
              src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
              alt="user"
            />
            <div className="adminname">Admin 1</div>
          </div>
        </div>
        <div className="contentApproval">
          <div className="header-approve">
            <div className="row">
              <div className="col-md-6 col-12">
                <h4> QUESTION APPROVAL</h4>
              </div>
              <div className="col-md-6 col-12">
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
                    onChange={(e) => {
                      setFrom(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setTo(e.target.value);
                    }}
                  />
                  <Button
                    className={classes.btnDate}
                    onClick={handleDate}
                    variant="contained"
                  >
                    Fillter
                  </Button>{" "}
                  <Button
                    className={classes.btnDate}
                    onClick={unFillter}
                    variant="contained"
                  >
                    UnFillter
                  </Button>{" "}
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: "400px", width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10, 20]}
              pagination
              {...questions}
            />
          </div>
        </div>{" "}
      </div>
      <Snackbar open={open} autoHideDuration={800} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Approval success!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openDecline}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          Decline Success
        </Alert>
      </Snackbar>
      <DialogDecline
        decline={decline}
        handleCloseDecline={handleCloseDecline}
        handleOpentDecline={handleOpentDecline}
      />
    </>
  );
};

export default Index;
