import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { pagJobs, getJobsSearch } from "../../helpers";
import SearchBar from "../../components/SearchBar";
import Link from "../../common/CustomLink";
import Button from "@material-ui/core/Button";

import PageLayout from "../../common/PageLayout";

export default function JobsGridView({ extraColumns, extraRows }) {
  const [jobs, setJobs] = useState([]);
  const [key, setKey] = useState("");
  const [keyword, setKeyword] = useState("");

  // useEffect(() => {
  //   (async () => {
  //     const jobData = await pagJobs();
  //     setJobs(jobData);
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      const jobData = await getJobsSearch(keyword);
      setJobs(jobData);
    })();
  }, [keyword]);

  const handleChangeSearch = (e) => {
    setKeyword(e.target.value);
  };
  const handleSearch = () => {
    setKey(keyword);
  };

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
    <PageLayout>
      <div style={{ height: "600px", width: "100%" }}>
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
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          {...jobs}
        />
      </div>
    </PageLayout>
  );
}
