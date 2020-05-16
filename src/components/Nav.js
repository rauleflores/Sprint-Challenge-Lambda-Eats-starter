import React, { useState, useEffect } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  button: {
    color: "#a5a79a",
    backgroundColor: "#ECA442",
  },
  anchor: {
    width: "75px",
    textAlign: "center",
    textDecoration: "none",
    color: "#ca2521",
  },
});

export default function Nav(props) {
  const [navState, setNavState] = React.useState(null);

  const classes = useStyles();

  const handleClick = (event) => {
    setNavState(event.currentTarget);
  };

  const handleClose = () => {
    setNavState(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.button}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={navState}
        keepMounted
        open={Boolean(navState)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <NavLink to={"/"} className={classes.anchor}>
            Home
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to={"/pizza"} className={classes.anchor}>
            Pizza
          </NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
}
