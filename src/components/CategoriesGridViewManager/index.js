import * as React from "react";
import Button from "@material-ui/core/Button";
import CategoriesGridView from "../CategoriesGridView";

let columns = [
  {
    field: "actions",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => (
      <strong>
        <Button variant="contained" color="primary" size="small">
          EDIT
        </Button>
        <Button
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
];

export default function CategoriesGridViewManager() {
  return <CategoriesGridView extraColumns={columns} />;
}
