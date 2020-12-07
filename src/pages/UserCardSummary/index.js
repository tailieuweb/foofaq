import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./index.scss";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Answers (0)
          </Typography>
          <Typography variant="body2" component="p">
            You have not answered any questions
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Questions (0)
          </Typography>
          <Typography variant="body2" component="p">
            You have not asked any questions
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Followed posts (0)
          </Typography>
          <Typography variant="body2" component="p">
            You are not following any posts.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Tags (0)
          </Typography>
          <Typography variant="body2" component="p">
            You have not participated in any tags
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
