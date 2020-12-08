import React,{useState,useEffect} from "react";
import Button from "@material-ui/core/Button";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import "./index.scss";
import Link from "../../common/CustomLink";
// import EventsGridView from "../EventsGridView";

let columns = [
  { field: 'id'},
  // { field: 'createdAt', width: 210 },
  { field: 'name', width: 200 },
  { field: 'imageUri', width: 110,
    renderCell: (params) => (
      <strong>
        <div className="aroundImageEvents">
        <img src={params.value} alt="hehe"/>
        </div>
      </strong>
    ), },
  // { field: 'date', width: 210 },
  { field: 'description', width: 500 },
  // { field: 'place', width: 150 },
  {
    field: "Action",
    width: 200,
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
  }
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
  const [data, setData] = useState([]);
  useEffect(() => {
  (async () => {
    const categoryData = await axios.get('https://5fc9a56e3c1c220016440eab.mockapi.io/events')
    setData(categoryData.data);
  })();
}, []);
let rows = data;
  console.log(data);
  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid rows={rows} columns={columns}
      pageSize={6}
      rowsPerPageOptions={[5, 10, 20]}
      pagination
      {...rows}
         rowHeight={80}
      />
    </div>
  )
}
export default EventsGridViewManager;