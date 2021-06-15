import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ImgCard from "./ImgCard";
import links from "../static/links";
import useWindowPosition from "../hooks/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Body() {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <>
      <div className={classes.root} id="body">
        <ImgCard link={links[0]} checked={checked} />
        <ImgCard link={links[1]} checked={checked} />
      </div>
    </>
  );
}
