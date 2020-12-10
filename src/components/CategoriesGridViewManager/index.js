import * as React from "react";
import Button from "@material-ui/core/Button";
import CategoriesGridView from "../CategoriesGridView";
import { DeleteCategory, UpdateCategory } from "../../helpers";
import { Link } from "react-router-dom";

let columns = [
  {
    field: "actions",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => (
      <strong>
        <Link to={`/forms/categories/${params.getValue("id")}`}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => UpdateCategory(params.getValue("id"))}
          >
            UPDATE
          </Button>
        </Link>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => DeleteCategory(params.getValue("id"))}
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
