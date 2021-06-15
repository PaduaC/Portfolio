import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Collapse } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 600,
    background: "rgba(28, 28, 28, 0.80)",
    margin: "20px",
  },
  media: {
    height: 400,
  },
  title: {
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: "700",
    fontSize: "30px",
    color: "white",
  },
  button: {
    fontSize: "14px",
  },
});

export default function ImgCard({ link, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={link.imageUrl}
            title="GitHub"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              {link.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            href={link.linkUrl}
            target="_blank"
          >
            View
          </Button>
        </CardActions>
      </Card>
    </Collapse>
  );
}
