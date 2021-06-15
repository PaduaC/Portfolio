import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import { Link as Scroll } from "react-scroll";

import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
    fontFamily: "Josefin Sans, sans-serif",
    fontSize: "24px",
  },
  container: {
    textAlign: "center",
  },
  icon: {
    color: "white",
    fontSize: "35px",
    margin: "5px 15px",
  },
  landingDesc: {
    flexGrow: "1",
    fontFamily: "Josefin Sans, sans-serif",
    fontSize: "2.5rem",
  },
  landingTitle: {
    flexGrow: "1",
    fontFamily: "Josefin Sans, sans-serif",
    fontSize: "4.5rem",
  },
  scrollDown: {
    color: "white",
    fontSize: "3rem",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  });
  return (
    <div className={classes.root} id="header">
      {/*<AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <IconButton>
            <MenuSharpIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar> */}
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.landingTitle}>CRISTIAN PADUA</h1>
          <h2 className={classes.landingDesc}>Blockchain Developer</h2>
          <Scroll to="body" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.scrollDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
