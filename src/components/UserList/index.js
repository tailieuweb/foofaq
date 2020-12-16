import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import "./index.scss";
function ListUser(props) {
  const [keyword, setKeyword] = useState("");
  const [key, setKey] = useState("");
  const handleChangeSearch = (e) => {
    setKeyword(e.target.value);
  };
  const handleSearch = () => {
    setKey(keyword);
  };
  return (
    <div className="container">
      <h1>Users</h1>
      <div className="file-content">
        <SearchBar
          handleChangeSearch={handleChangeSearch}
          handleSearch={handleSearch}
        ></SearchBar>

        <div className="section-list">
          <ButtonGroup
            disableElevation
            aria-label="small outlined button group"
          >
            <Button>Reputation</Button>
            <Button>New users</Button>
            <Button>Voter</Button>
            <Button>Editors</Button>
            <Button>Moderator</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default ListUser;
