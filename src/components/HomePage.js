import React from "react";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

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
    width: "100%",
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
  anchor: {
    width: "150px",
    textAlign: "center",
    textDecoration: "none",
    color: "#ca2521",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pizzaText: {
    fontSize: "24px",
    textAlign: "center",
  },
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.header}>
        <h2>Food delivered while you code!</h2>
      </div>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.pizzaText}>
            <h3>Lorem's Pizza</h3>
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
          <NavLink to={"/pizza"} className={classes.anchor}>
            Click here for pizza!
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default HomePage;
