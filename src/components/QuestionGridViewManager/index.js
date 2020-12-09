import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import Link from "../../common/CustomLink";
import { getAllQuesiton, declineQuestion } from "../../helpers";
import SearchBar from "../SearchBar";
import moment from "moment";

function QuestionGridViewManager() {
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
      field: "id",
      headerName: "Action",
      width: 180,

      renderCell: (params) => (
        <strong>
          <Link to={`/form/${params.value}`}>
            <Button variant="contained" color="primary" size="small">
              EDIT
            </Button>
          </Link>

          <Button
            onClick={() => {
              handleDeleteQuestion(params.value);
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
    {
      field: "id",
      headerName: "Internship diary ",
      width: 150,
      renderCell: (params) => (
        <strong>
          {" "}
          <Link to={`/detail/${params.value}`}> See detail</Link>{" "}
        </strong>
      ),
    },
  ];

  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [key, setKey] = useState("");

  useEffect(() => {
    (async () => {
      const question = await getAllQuesiton(key);
      setData(question);
    })();
  }, [key]);
  let rows = [...data];

  const handleDeleteQuestion = (id) => {
    declineQuestion(id);
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
  );
}
export default QuestionGridViewManager;
