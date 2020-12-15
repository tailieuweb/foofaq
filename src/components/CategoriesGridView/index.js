import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { searchCategory } from "../../helpers";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function CategoriesGridView({ extraColumns, extraRows }) {
  let columns = [
    {
      field: "id",
      headerName: "#ID",
      width: 150,
      renderCell: (params) => <strong>{params.value}</strong>,
    },
    {
      field: "name",
      headerName: "Name",
      width: 350,
      renderCell: (params) => <strong>{params.value}</strong>,
    },
    {
      field: "description",
      headerName: "Description",
      width: 450,
      renderCell: (params) => <strong>{params.value}</strong>,
    },
  ];

  const [data, setData] = useState([]);
  const [key, setKey] = useState("");
  const [keyword, setKeyword] = useState("");
  const [rows, setRows] = useState([]);

  useEffect(() => {
    (async () => {
      const categoryData = await searchCategory(key);
      setData(categoryData);
      console.log(key);
    })();
  }, [key]);

  useEffect(() => {
    setRows(data);
    console.log(data);
  }, [data]);

  const handleChangeSearch = (e) => {
    setKeyword(e.target.value);
  };
  const handleSearch = () => {
    setKey(keyword);
  };

  columns = extraColumns ? [...columns, ...extraColumns] : columns;
  // rows = extraRows ? [...rows, ...extraRows] : rows;

  return (
    <>
      <div style={{ height: "400px", width: "100%" }}>
        <SearchBar
          handleChangeSearch={handleChangeSearch}
          handleSearch={handleSearch}
        />
        <Link to="/forms/categories">
          <Button variant="contained" color="primary" style={{ margin: 20 }}>
            Add Category
          </Button>
        </Link>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          {...data}
        />
      </div>
    </>
  );
}
