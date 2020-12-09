import * as React from "react";
import { Button } from "@material-ui/core";
import JobsGridView from "../JobsGridView";
import { deleteJob } from "../../helpers/index";
import Link from "../../common/CustomLink";
let columns = [
  {
    field: "action",
    headerName: "Actions",
    headerAlign: "center",
    width: 200,
    renderCell: (params) => (
      <strong>
        {/* <Link to={`/forms/job/${params.value}`}>  </Link> */}
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => {}}
        >
          UPDATE
        </Button>

        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => {
            // deleteJob();
            // window.location.reload();
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
