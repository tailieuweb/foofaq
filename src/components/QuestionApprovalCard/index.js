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
import axios from "axios";

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
  //dialog
  const [open, setOpen] = useState(false);
  const [openDecline, setOpenDeline] = useState(false);
  const [decline, setDecline] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  //get Questions
  const [questions, setQuestions] = useState([]);
  const [questionsRaw, setQuestionsRaw] = useState([]);
  // fillter Date
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  //search
  const [keyword, setKeyword] = useState("");
  const [key, setKey] = useState("");

  const [idRaw, setIdRaw] = useState("");
  //status
  const [statusA, setStatusA] = useState("status=false");
  let status = true;
  // row in material-ui
  const [rows, setRows] = useState([]);
  const dateFrom = moment(from).valueOf();
  const dateTo = moment(to).valueOf();
  let dateProcessed = [];
  const handleClose = (event, reason) => {
    setOpen(false);
    setOpenDeline(false);
  };
  const handleCloseDecline = () => {
    setDecline(false);
  };
  const handleDateClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenDate(false);
  };
  //get question
  //get questions
  useEffect(() => {
    (async () => {
      const questionData = await getQuestions(key, statusA);
      setQuestionsRaw(questionData);
    })();
  }, [key, statusA]);

  useEffect(() => {
    if (questionsRaw) {
      const questionProcessed = [];
      questionsRaw.map((question, index) => {
        const resCategories = axios.get(
          `https://5fc48ee536bc790016343a0b.mockapi.io/questions/${question.id}/categories`
        );

        axios.all([resCategories]).then(
          axios.spread((...res) => {
            question.categories = res[0].data;

            questionProcessed.push(question);
            if (index === questionsRaw.length - 1) {
              setQuestions(questionProcessed);
            }
          })
        );
        return null;
      });
    }
  }, [questionsRaw]);

  useEffect(() => {
    setRows(questions);
  }, [questions]);

  //decline
  //get id for decline
  const handleClickDecline = (id) => {
    setDecline(true);
    setIdRaw(id);
  };
  //display dialog decline
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

  //approve
  const handleClickOpenApproval = (id) => {
    approveQuestion(id, status)
      .then(function (response) {
        console.log("Successfully");
        setRows([...questions]);
        setOpen(true);
        //  window.location.reload();
      })
      .catch(function (error) {
        setOpen(false);
      });
  };

  //search bar
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
  // fillter date

  const date = () => {
    if (dateFrom < dateTo) {
      questions.map((q) => {
        const dateQuestion = moment(q.createdAt).valueOf();

        if (dateQuestion >= dateFrom && dateQuestion <= dateTo) {
          dateProcessed.push(q);
          console.log(dateProcessed);
          setRows(dateProcessed);
        } else {
          setRows(dateProcessed);
        }
      });
    } else {
      setOpenDate(true);
      return;
    }
  };

  //console.log(dateQ);
  const handleDate = () => {
    date();
  };

  const unFillter = () => {
    (async () => {
      setRows(questions);
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
      field: "categories",
      headerName: "Categories",
      width: 150,
      renderCell: (params) => (
        <strong>{params.value.map((cate) => cate.name + " ")}</strong>
      ),
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
        {/* <div className="infoadmin">
          <div className="user">
            <img
              className="avt"
              src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
              alt="user"
            />
            <div className="adminname">Admin 1</div>
          </div>
        </div> */}
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
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
      <Snackbar
        open={openDate}
        autoHideDuration={6000}
        onClose={handleDateClose}
      >
        <Alert onClose={handleDateClose} severity="error">
          Wrong date
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
