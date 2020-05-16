import React, { useState, useEffect } from "react";
import { Box, Button, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {},
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
          <a href="#">Home</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#">Pizza</a>
        </MenuItem>
      </Menu>
    </div>
  );
}
