import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { pagJobs } from "../../helpers";

export default function JobsGridView({ extraColumns, extraRows }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    (async () => {
      const jobData = await pagJobs();
      setJobs(jobData);
    })();
  }, []);

  let columns = [
    {
      field: "id",
      headerName: "#",
      headerAlign: "center",
      width: 100,
      renderCell: (params) => <strong>{params.value}</strong>,
    },
    {
      field: "name",
      headerName: "Name",
      headerAlign: "center",
      width: 200,
      renderCell: (params) => <strong>{params.value}</strong>,
    },
    {
      field: "description",
      headerName: "Description",
      headerAlign: "center",
      width: 300,
      renderCell: (params) => <strong>{params.value}</strong>,
    },
    {
      field: "type",
      headerName: "Type",
      headerAlign: "center",
      width: 150,
      renderCell: (params) => <strong>{params.value}</strong>,
    },
    {
      field: "company",
      headerName: "Company",
      headerAlign: "center",
      width: 200,
      renderCell: (params) => <strong>{params.value}</strong>,
    },
    {
      field: "area",
      headerName: "Area",
      headerAlign: "center",
      width: 200,
      renderCell: (params) => <strong>{params.value}</strong>,
    },
    {
      field: "experience",
      headerName: "Experience",
      headerAlign: "center",
      width: 150,
      renderCell: (params) => <strong>{params.value}</strong>,
    },
    {
      field: "role",
      headerName: "Role",
      headerAlign: "center",
      width: 150,
      renderCell: (params) => <strong>{params.value}</strong>,
    },
  ];

  let rows = [...jobs];

  columns = extraColumns ? [...columns, ...extraColumns] : columns;
  rows = extraRows ? [...rows, ...extraRows] : rows;

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        {...jobs}
      />
    </div>
  );
}
