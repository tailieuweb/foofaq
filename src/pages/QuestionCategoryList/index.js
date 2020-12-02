import React, { useEffect, useState } from "react";
import CategoryCard from "../../components/CategoryCard";
import axios from "axios";

//components
import { Grid, makeStyles, Paper, Container } from "@material-ui/core";
import NavigationBar from "../../components/NavigationBar/";
import NavTag from "../../components/NavigationBar/NavTag";
import SearchBar from "../../components/SearchBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function CategoryList() {
  const classes = useStyles();
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://5fc48ee536bc790016343a0b.mockapi.io/categories?page=1&limit=4`
      );
      console.log(res.data);
      setCategories(res.data);
    })();
  }, []);

  return (
    <>
      <NavigationBar />
      <NavTag />
      <Container maxWidth="lg">
        <SearchBar />
        <Grid container className={classes.root} spacing={2}>
          {categories ? (
            categories.map((category) => (
              <Grid item xs={3} key={category.id}>
                <CategoryCard category={category} className={classes.root} />
              </Grid>
            ))
          ) : (
            <Grid container spacing={3} className={classes.root}>
              <Grid item xs={3}>
                <Paper className={classes.paper}></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}></Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}></Paper>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
}

export default CategoryList;
