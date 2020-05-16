import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import Header from "./Nav";

const useStyles = makeStyles({
  root: {
    width: "750px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#622a0f",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    width: "80%",
    height: "200px",
    fontSize: "30px",
  },
  container: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.header}>
          <h2>Pizza Time!</h2>
        </div>
        <div className={classes.container}>
          <div>
            <h3>Our Pizza is delicious!</h3>
          </div>
          <div>
            <p>
              Pizza ipsum dolor amet steak chicken thin crust lasagna red
              onions, pork extra sauce mozzarella. Party chicken and bacon fresh
              tomatoes meatball pineapple white garlic garlic parmesan. Green
              bell peppers ham garlic white pizza pizza NY style. White pizza
              pie pork spinach large, pesto red onions garlic parmesan anchovies
              garlic steak green bell peppers hand tossed beef thin crust. Beef
              green bell peppers meat lovers pineapple Chicago style, meatball
              bacon white pizza meatball bianca. Anchovies deep crust pesto meat
              lovers, large ranch meatball mushrooms sausage string cheese
              melted cheese. Ranch parmesan philly chicken, lasagna black olives
              platter Chicago style.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
