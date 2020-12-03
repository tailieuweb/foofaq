import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./index.scss";
import axios from "axios";
import CategoryCard from "../CategoryCard";
import { Grid, makeStyles } from "@material-ui/core";

function SearchBar(props) {
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          id="search-bar"
          placeholder="Search..."
          onChange={props.handleChangeSearch}
        />
        <button onClick={props.handleSearch} className="btn-search">
          <SearchIcon className="search-icon"></SearchIcon>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
