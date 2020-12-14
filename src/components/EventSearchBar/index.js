import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase({ handleSearch }) {
  const classes = useStyles();

  const [eventName, setEventName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(eventName);
  };

  return (
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <ChevronRightIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search Events..."
        inputProps={{ "aria-label": "search events" }}
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
