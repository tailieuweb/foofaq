import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { DataGrid } from "@material-ui/data-grid";
// import axios from "axios";
import "./index.scss";
import Link from "../../common/CustomLink";
// import EventsGridView from "../EventsGridView";
import { deleteEvent, getEventsSearch } from "../../helpers";

//components
import SearchBar from "../../components/SearchBar";
import PageLayoutManager from "../../common/PageLayoutManager";

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

function EventsGridViewManager() {
  const [eventData, setEventData] = useState([]);
  const [open, setOpen] = useState(false);
  // const [key, setKey] = useState("");
  const [keyword, setKeyword] = useState("");

  // useEffect(() => {
  // (async () => {
  //   const categoryData = await axios.get('https://5fc9a56e3c1c220016440eab.mockapi.io/events')
  //   setEventData(categoryData.data);
  // })();
  // }, []);

  useEffect(() => {
    (async () => {
      const eventData = await getEventsSearch(keyword);
      setEventData(eventData);
    })();
  }, [keyword]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleChangeSearch = (e) => {
    setKeyword(e.target.value);
  };
  const handleSearch = () => {
    setKeyword(keyword);
  };

  const DeleteEvent = (id) => {
    var answer = window.confirm("you definitely want to delete ");
    if (answer) {
      deleteEvent(id)
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

  let rows = eventData;

  let columns = [
    { field: "id", headerName: "ID" },
    // { field: 'createdAt', width: 210 },
    { field: "name", width: 200, headerName: "Name" },
    {
      field: "imageUri",
      headerName: "Image",
      width: 110,
      renderCell: (params) => (
        <strong>
          <div className="aroundImageEvents">
            <img src={params.value} alt="hehe" />
          </div>
        </strong>
      ),
    },
    { field: "description", headerName: "Description", width: 500 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <strong>
          <Link to={"/forms/event/" + params.value}>
            <Button variant="contained" color="primary" size="small">
              Edit
            </Button>
          </Link>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() => {
              DeleteEvent(params.value);
            }}
          >
            Delete
          </Button>
        </strong>
      ),
    },
  ];

  return (
    <PageLayoutManager>
      <div style={{ height: 600, width: "100%" }}>
        <h1>Events</h1>
        <SearchBar
          handleChangeSearch={handleChangeSearch}
          handleSearch={handleSearch}
        />
        <br />
        <Link to={"/forms/event"}>
          <Button variant="contained" color="primary">
            {" "}
            ADD{" "}
          </Button>
        </Link>
        <br />
        <br />
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          {...rows}
          rowHeight={80}
        />
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Delete success!
        </Alert>
      </Snackbar>
    </PageLayoutManager>
  );
}

export default EventsGridViewManager;
