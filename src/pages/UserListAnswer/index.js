import React, { useState, useEffect } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ListUserButtonTags from '../../components/UserListButtonTags/index';
import UserProfileListAnswer from '../../components/UserProfileListAnswer/index';
import "./index.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

export default function UserProfileNavbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Activity" {...a11yProps(0)} />
          <Tab label="Developer Story" {...a11yProps(2)} />
          <Tab label="Edit Profile" {...a11yProps(3)} />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel
            className="Lower-text"
            value={value}
            index={0}
            dir={theme.direction}
          >
            <ListUserButtonTags />
           <UserProfileListAnswer/>
          </TabPanel>
          <TabPanel
            className="Lower-text"
            value={value}
            index={2}
            dir={theme.direction}
          >
            developer story
          </TabPanel>
          <TabPanel
            className="Lower-text"
            value={value}
            index={3}
            dir={theme.direction}
          >
            user edit profile
          </TabPanel>
        </SwipeableViews>
      </div>
    </React.Fragment>
  );
}