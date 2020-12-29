import React, { useState, useEffect } from "react";

//Material UI
import { DataGrid } from "@material-ui/data-grid";

//components
import SearchBar from "../../components/SearchBar";

//APIs
import { getEventsSearch } from "../../helpers";

export default function EventsGridView({ extraColumns, extraRows }) {
  const [eventData, setEventData] = useState([]);

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    (async () => {
      const eventData = await getEventsSearch(keyword);
      setEventData(eventData);
    })();
  }, [keyword]);
  const handleChangeSearch = (e) => {
    setKeyword(e.target.value);
  };
  const handleSearch = () => {
    setKeyword(keyword);
  };

  let rows = eventData;
  let columns = [
    { field: "id", headerName: "ID" },
    // { field: 'createdAt', width: 210 },
    { field: "date", headerName: "Date", width: 200 },
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
    { field: "description", headerName: "Description", width: 400 },
    { field: "place", headerName: "Place", width: 200 },
  ];

  columns = extraColumns ? [...columns, ...extraColumns] : columns;
  rows = extraRows ? [...rows, ...extraRows] : rows;

  return (
    <div style={{ height: 500, width: "100%" }}>
      <h1>Events</h1>
      <SearchBar
        handleChangeSearch={handleChangeSearch}
        handleSearch={handleSearch}
      />
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
  );
}
