import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from "@material-ui/icons/Drafts";
import DashboardIcon from "@material-ui/icons/Dashboard";

//icon
import WorkIcon from "@material-ui/icons/Work";
import EventIcon from "@material-ui/icons/Event";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "../../common/CustomLink";
import PeopleIcon from '@material-ui/icons/People';
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
          width: "15%",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <List component="nav" aria-label="main mailbox folders">
           {/* User */}
           <Link
            style={{
              width: "100%",
              textDecoration: "none",
              color: "#000000b8",
            }}
            to="/manager/user"
          >
            <ListItem
              button
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="User" />
            </ListItem>
          </Link>
        </List>
      </div>
    </div>
  );
}

export default Index;
