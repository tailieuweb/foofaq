// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Pagination from "@material-ui/lab/Pagination";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

// export default function PaginationRounded() {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <table className="table container">
//         <thead>
//           <tr>
//             <th scope="col">#ID</th>
//             <th scope="col">Name</th>
//             <th scope="col">Phone</th>
//             <th scope="col">Email</th>
//             <th scope="col">Update</th>
//             <th scope="col">Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">1</th>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//             <td>
//               <button type="button" className="btn btn-primary">
//                 Update
//               </button>
//             </td>
//             <td>
//               <button type="button" className="btn btn-danger">
//                 Delete
//               </button>
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">2</th>
//             <td>Jacob</td>
//             <td>Thornton</td>
//             <td>@fat</td>
//             <td>
//               <button type="button" className="btn btn-primary">
//                 Update
//               </button>
//             </td>
//             <td>
//               <button type="button" className="btn btn-danger">
//                 Delete
//               </button>
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">3</th>
//             <td colSpan={2}>Larry the Bird</td>
//             <td>@twitter</td>
//             <td>
//               <button type="button" className="btn btn-primary">
//                 Update
//               </button>
//             </td>
//             <td>
//               <button type="button" className="btn btn-danger">
//                 Delete
//               </button>
//             </td>
//           </tr>
//         </tbody>
//       </table>

//       {/* // Phan trang */}
//       <Pagination count={10} variant="outlined" shape="rounded" />

//     </div>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Pagination from "@material-ui/lab/Pagination";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(Id, Name, Phone, Email, Update, Delete) {
  return { Id, Name, Phone, Email, Update, Delete };
}

const rows = [
  createData(
    1,
    "A",
    "0000000000",
    "A@gmail.com",
    <Button variant="contained" color="primary">
      Update
    </Button>,
    <Button variant="contained" color="secondary">
      Delete
    </Button>
  ),
  createData(
    2,
    "B",
    "1111111111",
    "A@gmail.com",
    <Button variant="contained" color="primary">
      Update
    </Button>,
    <Button variant="contained" color="secondary">
      Delete
    </Button>
  ),
  createData(
    3,
    "C",
    "2222222222",
    "A@gmail.com",
    <Button variant="contained" color="primary">
      Update
    </Button>,
    <Button variant="contained" color="secondary">
      Delete
    </Button>
  ),
  createData(
    4,
    "D",
    "3333333333",
    "A@gmail.com",
    <Button variant="contained" color="primary">
      Update
    </Button>,
    <Button variant="contained" color="secondary">
      Delete
    </Button>
  ),
  createData(
    5,
    "E",
    "4444444444",
    "A@gmail.com",
    <Button variant="contained" color="primary">
      Update
    </Button>,
    <Button variant="contained" color="secondary">
      Delete
    </Button>
  ),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div className="container ">
      <h1>List User</h1>
      <div className="search-container">
        <input
          type="text"
          id="search-bar"
          placeholder="Search..."
       
        />
        <button className="btn-search">
          <SearchIcon className="search-icon"></SearchIcon>
        </button>
      </div>
      <Button variant="contained" color="primary">
        ADD
      </Button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Update</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.Id}>
                <TableCell component="th" scope="row">
                  {row.Id}
                </TableCell>
                {/* <TableCell align="right">{row.Id}</TableCell> */}
                <TableCell align="right">{row.Name}</TableCell>
                <TableCell align="right">{row.Phone}</TableCell>
                <TableCell align="right">{row.Email}</TableCell>
                <TableCell align="right">{row.Update}</TableCell>
                <TableCell align="right">{row.Delete}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={5} variant="outlined" shape="rounded" />
    </div>
  );
}
