import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./index.scss";

function SearchBar(props) {
  return (
    <div className="search-container">
      <input
        type="text"
        id="search-bar"
        placeholder="Search..."
        onChange={props.handleChangeSearch}
        style={{marginBottom: "10px"}}
      />
      <button onClick={props.handleSearch} className="btn-search">
        <SearchIcon className="search-icon"></SearchIcon>
      </button>
    </div>
  );
}

export default SearchBar;
