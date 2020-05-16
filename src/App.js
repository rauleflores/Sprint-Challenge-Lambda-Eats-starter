import React from "react";
import HomePage from "./components/HomePage";
import Nav from "./components/Nav";
import "./App.css";
import { Route } from "react-router-dom";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="center-all">
      <div className="appHeader">
        <h1>Lambda Eats</h1>
        <Nav />
      </div>
      <Route exact path="/" component={() => <HomePage />} />
      <Route exact path="/pizza" component={() => <Form />} />
    </div>
  );
};
export default App;
