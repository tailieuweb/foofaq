import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./index.scss";

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
