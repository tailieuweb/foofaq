import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { allJob } from "../../helpers/helper";

//icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
//components
import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  IconButton,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 20,
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [jobs, setJobs] = useState("");
  useEffect(() => {
    (async () => {
      const JobData = await allJob();
      setJobs(JobData);
      console.log(JobData);
    })();
  }, []);
  return (
    <>
      {jobs ? (
        jobs.map((job) => (
          <Card className={classes.root} key={job.id}>
            <CardContent>
              <Typography variant="h5">{job.name}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {job.area}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <AccessTimeIcon />
                {job.createdAt.slice(0, 10)}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Aboub this job
              </Typography>
              <Typography>
                Experience level: <b>{job.experience}</b>
              </Typography>
              <Typography>
                Role: <b>{job.role}</b>
              </Typography>
              <Typography variant="h6" gutterBottom>
                Job description
              </Typography>
              <Typography paragraph>{job.description}</Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <label>failed</label>
      )}
    </>
  );
}
