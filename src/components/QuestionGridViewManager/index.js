import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import Link from "../../common/CustomLink";
import {
  getAllQuesiton,
  // getAnswer,
  declineQuestion,
  // pagCategories,
} from "../../helpers";
import SearchBar from "../SearchBar";
import moment from "moment";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import axios from "axios";
import { DialogDecline } from "../Dialog";
import PageLayoutManager from "../../common/PageLayoutManager";

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
  const [open, setOpen] = useState(false);
  const [idRaw, setIdRaw] = useState("");
  const [decline, setDecline] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [questionsRaw, setQuestionsRaw] = useState([]);
  const [questions, setQuestions] = useState([]);
  //const [questionDate, setQuestionDate] = useState([]);
  const [openDate, setOpenDate] = useState(false);

  const [rows, setRows] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [key, setKey] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    (async () => {
      const res = await getAllQuesiton(key);
      setQuestionsRaw(res);
    })();
  }, [key]);
  const handleChangeSearch = (e) => {
    setKeyword(e.target.value);
  };
  const handleSearch = () => {
    setKey(keyword);
  };

  useEffect(() => {
    if (questionsRaw) {
      const questionProcessed = [];
      questionsRaw.map((question, index) => {
        const resCategories = axios.get(
          `https://5fc48ee536bc790016343a0b.mockapi.io/questions/${question.id}/categories`
        );
        const resAnswers = axios.get(
          `https://5fc48ee536bc790016343a0b.mockapi.io/questions/${question.id}/answers`
        );
        axios.all([resCategories, resAnswers]).then(
          axios.spread((...res) => {
            question.categories = res[0].data;
            question.answers = res[1].data;

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

  // const handleDeleteQuestion = (id) => {
  //   declineQuestion(id)
  //     .then(function (response) {
  //       setOpen(true);
  //     })
  //     .catch(function (error) {
  //       // setOpen(false);
  //     });
  // };
  //   columns = extraColumns ? [...columns, ...extraColumns] : columns;
  //   rows = extraRows ? [...rows, ...extraRows] : rows;

  //delete

  const handleClickDecline = (id) => {
    setDecline(true);
    setIdRaw(id);
  };
  const handleOpentDecline = () => {
    declineQuestion(idRaw)
      .then(function (response) {
        // handle success
        console.log("Successfully");
        setDecline(false);
        setOpen(true);
        window.location.reload();

        // window.location.reload();
      })
      .catch(function (error) {
        console.log("ERR");
        setOpen(false);
      });
  };

  const handleCloseDecline = () => {
    setDecline(false);
  };

  const dateFrom = moment(from).valueOf();
  const dateTo = moment(to).valueOf();
  // console.log("to: " + dateTo);
  // console.log("from: " + dateFrom);
  // console.log("- " + to - from);
  // dateQuestion;
  let dateProcessed = [];
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
  const handleDateClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenDate(false);
  };
  const unFillter = () => {
    setRows(questions);
  };

  useEffect(() => {
    setRows(questions);
  }, [questions]);

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
      field: "categories",
      headerName: "Categories",
      width: 150,
      renderCell: (params) => (
        <strong>{params.value.map((v) => v.name + ",")}</strong>
      ),
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
      renderCell: (params) => (
        <>
          <strong>{params.value.length}</strong>
        </>
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
              handleClickDecline(params.getValue("id"));
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

  return (
    <PageLayoutManager>
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
        <div style={{ height: "400px", width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            {...questionsRaw}
          />
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Delete success
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
        handleOpentDecline={() => {
          handleOpentDecline();
        }}
      />
    </PageLayoutManager>
  );
}
export default QuestionGridViewManager;
