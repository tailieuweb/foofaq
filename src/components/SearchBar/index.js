import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import "./index.scss";

function Index(props) {
  return (
    <div>
      <div className="search-container">
        <input type="text" id="search-bar" placeholder="Search..." />
        <button className="btn-search">
          {" "}
          <SearchIcon className="search-icon"></SearchIcon>
        </button>
      </div>
    </div>
  );
}

export default Index;
