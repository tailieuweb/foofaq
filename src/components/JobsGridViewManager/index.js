import * as React from "react";
import { Button } from "@material-ui/core";
import JobsGridView from "../JobsGridView";

let columns = [
  {
    field: "actions",
    headerName: "Actions",
    headerAlign: "center",
    width: 200,
    renderCell: (params) => (
      <strong>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => {
            
          }}
        >
          UPDATE
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => {
            
        }}
        >
          DELETE
        </Button>
      </strong>
    ),
  },
];

export default function JobsGridViewManager() {
  return <JobsGridView extraColumns={columns} />;
}
