import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  button: {
    color: "#5290A8",
    backgroundColor: "#ECA442",
  },
  anchor: {
    width: "75px",
    textAlign: "center",
    textDecoration: "none",
    color: "#5290A8",
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
          <NavLink to={"/contact"} className={classes.anchor}>
            Contact
          </NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
}
