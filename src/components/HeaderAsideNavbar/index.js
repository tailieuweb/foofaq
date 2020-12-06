import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from "@material-ui/icons/Drafts";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Link from "../../common/CustomLink";
import "./index.scss";
function Index(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <div>
      <div
        className="navigation"
        style={{
          width: "100%",
        }}
      >
        <List component="nav" aria-label="main mailbox folders">
          <Link
            style={{
              width: "100%",
              textDecoration: "none",
              color: "#000000b8",
            }}
            to="/question/manager"
          >
            <ListItem
              button
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>

              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
          <Link
            style={{
              width: "100%",
              textDecoration: "none",
              color: "#000000b8",
            }}
            to="/question/approval"
          >
            <ListItem
              button
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Approval" />
            </ListItem>
          </Link>
        </List>
      </div>
    </div>
  );
}

export default Index;
