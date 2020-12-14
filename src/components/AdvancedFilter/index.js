import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

// MUI components
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";

// icons
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    maxWidth: 800,
    margin: "1rem auto",
  },
}));

const AdvancedFilter = ({ handleSearch }) => {
  const classes = useStyles();

  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [categories, setCategories] = useState([]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleClick = () => {
    let params = '';
    if (filter !== 'all') params += `filterBy=${filter}&`;
    params += `sortBy=${sortBy}`;
    if (categories.length) params += `categories=${categories}`;
    alert(params);
    handleSearch(params);
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Filter By</FormLabel>
              <RadioGroup
                aria-label="filter"
                name="filter"
                value={filter}
                onChange={handleFilterChange}
              >
                <FormControlLabel
                  value="all"
                  control={<Radio />}
                  label="All"
                />
                <FormControlLabel
                  value="answered"
                  control={<Radio />}
                  label="Answered"
                />
                <FormControlLabel
                  value="noAnswer"
                  control={<Radio />}
                  label="No Answer"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Sort By</FormLabel>
              <RadioGroup
                aria-label="sortBy"
                name="sortBy"
                value={sortBy}
                onChange={handleSortByChange}
              >
                <FormControlLabel
                  value="newest"
                  control={<Radio />}
                  label="Newest"
                />
                <FormControlLabel
                  value="mostVote"
                  control={<Radio />}
                  label="Most Vote"
                />
                <FormControlLabel
                  value="mostView"
                  control={<Radio />}
                  label="Most View"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Categories</FormLabel>
              <TextField id="standard-basic" label="Categories" />
            </FormControl>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<SearchIcon />}
          onClick={handleClick}
        >
          Search
        </Button>
      </Paper>
    </div>
  );
};

export default AdvancedFilter;
