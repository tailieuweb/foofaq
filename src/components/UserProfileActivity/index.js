import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {getOneUser} from '../../helpers/userAPI';
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
  
  const [user, setUser] = useState({});
  useEffect( async() => {
   const data =  await getOneUser();
   setUser(data);
  }, []);

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Answers ({user.number_answer})
          </Typography>
          <Typography variant="body2" component="p">
            You have not answered any questions
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Questions ({user.number_question})
          </Typography>
          <Typography variant="body2" component="p">
            You have not asked any questions
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Followed posts ({user.number_follow_post})
          </Typography>
          <Typography variant="body2" component="p">
            You are not following any posts.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Tags ({user.number_tag})
          </Typography>
          <Typography variant="body2" component="p">
            You have not participated in any tags
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
