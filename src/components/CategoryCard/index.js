import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

//images
import img from "../../images/et.jpg";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 155,
  },
});

export default function CategoryCard() {
  const classes = useStyles();

  return (
    <div className="container">
      <div className="row">
          {/* temporary data for 4 columns */}
        <div className="col">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={img}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Javascript
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  For questions regarding programming in ECMAScript
                  (JavaScript/JS) and its various dialects/implementations
                  (excluding ActionScript).
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="col">
          {" "}
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={img}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Javascript
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  For questions regarding programming in ECMAScript
                  (JavaScript/JS) and its various dialects/implementations
                  (excluding ActionScript).
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="col">
          {" "}
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={img}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Javascript
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  For questions regarding programming in ECMAScript
                  (JavaScript/JS) and its various dialects/implementations
                  (excluding ActionScript).
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="col">
          {" "}
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={img}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Javascript
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  For questions regarding programming in ECMAScript
                  (JavaScript/JS) and its various dialects/implementations
                  (excluding ActionScript).
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
}
