import React from "react";

import Button from "@material-ui/core/Button";

import EventsGridView from "../EventsGridView";

let columns = [
  {
    field: "date",
    headerName: "Action",
    width: 300,
    renderCell: (params) => (
      <strong>
        <Button variant="contained" color="primary" size="small">
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 16 }}
        >
          Delete
        </Button>
      </strong>
    ),
  },
];

// let rows = [
//   {
//     id: 1,
//     date: new Date(1979, 0, 1),
//   },
//   {
//     id: 2,
//     date: new Date(1984, 1, 1),
//   },
//   {
//     id: 3,
//     date: new Date(1992, 2, 1),
//   },
// ];

function EventsGridViewManager() {
  return <EventsGridView extraColumns={columns} />;
}

export default EventsGridViewManager;
