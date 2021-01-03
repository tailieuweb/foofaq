import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from "@material-ui/icons/Drafts";
//import DashboardIcon from "@material-ui/icons/Dashboard";

//icon
import WorkIcon from "@material-ui/icons/Work";
import EventIcon from "@material-ui/icons/Event";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "../../common/CustomLink";
import "./index.scss";
function Index(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [active, setActive] = useState("");
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setActive("active");
  };
  return (
    <div>
      <div
        className="navigation"
        style={{
          width: "100%",
          position: "relative",
          top: 0,
          left: 0,
        }}
      >
        <List component="nav" aria-label="main mailbox folders">
          <Link
            style={{
              width: "100%",
              textDecoration: "none",
              color: "#000000b8",
            }}
            to="/manager/jobs"
          >
            <ListItem
              button
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="Jobs" />
            </ListItem>
          </Link>

          <Link
            style={{
              width: "100%",
              textDecoration: "none",
              color: "#000000b8",
            }}
            to="/manager/events"
          >
            <ListItem
              className={active}
              button
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary="Events" />
            </ListItem>
          </Link>

          <Link
            style={{
              width: "100%",
              textDecoration: "none",
              color: "#000000b8",
            }}
            to="/manager/questions"
          >
            <ListItem
              button
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <QuestionAnswerIcon />
              </ListItemIcon>
              <ListItemText primary="Questions" />
            </ListItem>
          </Link>
          <Link
            style={{
              width: "100%",
              textDecoration: "none",
              color: "#000000b8",
            }}
            to="/manager/categories"
          >
            <ListItem
              button
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItem>
          </Link>

          <Link
            style={{
              width: "100%",
              textDecoration: "none",
              color: "#000000b8",
            }}
            to="/manager/approval"
          >
            <ListItem
              button
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}
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
