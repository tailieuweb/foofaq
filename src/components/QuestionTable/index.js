import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export const TableH = (props) => {
  // const classes = useStyles();

  return (
    <TableHead>
      <TableRow>
        <TableCell align="left">{props.tt_id}</TableCell>
        <TableCell>{props.tt_title}</TableCell>
        <TableCell align="left">{props.tt_update}</TableCell>
        <TableCell align="left">{props.tt_delete}</TableCell>
      </TableRow>
    </TableHead>
  );
};

export const TableB = (props) => {
  return (
    <TableBody>
      <TableRow key={props.key_id}>
        <TableCell align="left">{props.id}</TableCell>

        <TableCell component="th" scope="row">
          {props.title}
        </TableCell>

        <TableCell align="left">{props.update}</TableCell>
        <TableCell align="left">{props.delete}</TableCell>
      </TableRow>
    </TableBody>
  );
};
