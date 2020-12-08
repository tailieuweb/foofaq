import * as React from "react";
import Button from "@material-ui/core/Button";
import { DataGrid } from "@material-ui/data-grid";


export default function EventsGridView({ extraColumns, extraRows }) {
  let columns = [
    {
      field: "date",
      headerName: "Year",
      width: 150,
      renderCell: (params) => (
        <strong>
          {params.value.getFullYear()}
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
          >
            Open
          </Button>
        </strong>
      ),
    },
  ];
  
  let rows = [
    {
      id: 1,
      date: new Date(1979, 0, 1),
    },
    {
      id: 2,
      date: new Date(1984, 1, 1),
    },
    {
      id: 3,
      date: new Date(1992, 2, 1),
    },
  ];  

  columns = extraColumns ? [...columns, ...extraColumns] : columns;
  rows = extraRows ? [...rows, ...extraRows] : rows;

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
