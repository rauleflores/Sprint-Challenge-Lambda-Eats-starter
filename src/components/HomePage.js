import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import Header from "./Nav";

const useStyles = makeStyles({
  root: {
    width: "750px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div>
          <h2>Pizza Time!</h2>
        </div>
      </div>
    </>
  );
};

export default HomePage;
