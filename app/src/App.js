import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header";
import Body from "./components/Body";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    background: `linear-gradient(
      rgba(3, 40, 72, 0.4), 
      rgba(3, 40, 72, 0.4)
    ),url(${process.env.PUBLIC_URL + "/assets/eth.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    fontFamily: "Josefin Sans, sans-serif",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <Body />
      </div>
    </>
  );
}
