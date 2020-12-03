import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

//icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
//components
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5">
          Mobile Developer (React Native, iOS, Android)
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Hot Jobs Mobile Positions in Vietnam VIA TopDev – Ho Chi Minh City,
          Vietnam
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <ThumbUpIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ThumbDownIcon />
        </IconButton>
        <IconButton aria-label="share">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            <AccessTimeIcon />
            date
          </Typography>
          <Typography variant="h6" gutterBottom>
            Aboub this job
          </Typography>
          <Typography>
            Job type: <b>Full-time</b>
          </Typography>
          <Typography>
            Experience level: <b>Junior, Mid-Level, Senior</b>
          </Typography>
          <Typography>
            Role: <b>Mobile Developer</b>
          </Typography>
          <Typography variant="h6" gutterBottom>
            Job description
          </Typography>

          <Typography paragraph>
            📛📛 TOP HOT JOBS MOBILE (ANDROID/IOS/REACT NATIVE/FLUTTER/HYBRID)
            IN VIETNAM 🎉 AVAILABLE FOR ALL LEVEL (FROM JUNIOR UP TO
            LEADER/MANAGER)
            <br></br>✅ Attractive and competitive salary package for
            outstanding employees;
            <br></br>✅ Salary range come up to 2,000 USD per month;
            <br></br>✅ Experience a youthful, comfortable but equally
            professional working environment;
            <br></br>✅ Participate in professional and skill training courses,
            helping you develop your career path;
            <br></br>✅ To enjoy the enormous benefit of each different
            enterprise;
            <br></br>✅ Along with many opportunities to interact with
            cutting-edge technologies and collaborate with leading experts on
            exciting projects. What are you waiting for? Find for yourself a new
            home, new challenge for the next career path
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
