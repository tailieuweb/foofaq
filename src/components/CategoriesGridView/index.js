import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";

import { pagCategories } from "../../helpers";

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
      width: 150,
      renderCell: (params) => <strong>{params.value}</strong>,
    },
    {
      field: "description",
      headerName: "Description",
      width: 150,
      renderCell: (params) => <strong>{params.value}</strong>,
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const categoryData = await pagCategories();
      setData(categoryData);
    })();
  }, []);
  let rows = [...data];

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
        {...data}
      />
    </div>
  );
}
