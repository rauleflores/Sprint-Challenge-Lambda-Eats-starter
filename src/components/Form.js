import React, { useState } from "react";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
  error: {
    color: "red",
    fontSize: "14px",
    margin: "0",
    padding: "0",
  },
  title: {
    width: "100%",
    height: "200px",
    fontSize: "42px",
    letterSpacing: "8px",
    margin: "0",
    backgroundColor: "#7C2400",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  form: {
    width: "800px",
    backgroundColor: "#F5F5F5",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  labelDiv: {
    width: "100%",
    paddingTop: "20px",
    paddingBottom: "20px",
    backgroundColor: "#67595E",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: "18px",
    padding: "20px",
  },
  inputDiv: {
    width: "100%",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  input: {
    height: "30px",
    borderRadius: "5px",
  },
  inputDrop: {
    height: "50px",
    width: "175px",
    borderRadius: "5px",
  },
  orderDiv: {
    width: "100%",
    paddingTop: "50px",
    paddingBottom: "50px",
    backgroundColor: "#67595E",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  submit: {
    height: "60px",
    width: "120px",
    color: "#5290A8",
    backgroundColor: "#E8B4B8",
  },
  p: {
    fontSize: "26px",
    textAlign: "center",
    height: "100px",
    width: "400px",
    backgroundColor: "#F9F1F0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
  },
});

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must conatin more than 2 letters.")
    .required("Please enter your name"),
  pizzaSize: yup.string(),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  pineapple: yup.boolean(),
  cheese: yup.boolean(),
  textarea: yup.string(),
});

export default function Form(props) {
  const [formState, setFormState] = useState({
    name: "",
    pizzaSize: "",
    pepperoni: false,
    sausage: false,
    pineapple: false,
    cheese: false,
    textarea: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    pizzaSize: "",
    pepperoni: "",
    sausage: "",
    pineapple: "",
    cheese: "",
    textarea: "",
  });
  const classes = useStyles();

  const validate = (ev) => {
    yup
      .reach(formSchema, ev.target.name)
      .validate(ev.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [ev.target.name]: "",
        });
      })
      .catch((err) => {
        console.log(err.errors);
        setErrors({
          ...errors,
          [ev.target.name]: err.errors[0],
        });
      });
  };

  const inputChange = (e) => {
    e.persist();
    validate(e);
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        console.log("res.data value:", res.data);
        console.log("res.data[0] value:", res.data[0]);
        let resData = res.data;
        console.log("resData value:", resData);
        // console.log("before:", users);
        // submit(resData);
        // console.log("after:", users);
      })
      .catch((err) => {
        console.log(err);
      });

    setFormState({
      name: "",
      pizzaSize: "",
      pepperoni: false,
      sausage: false,
      pineapple: false,
      cheese: false,
      textarea: "",
    });
  };

  return (
    <form
      className={classes.form}
      autoComplete="off"
      onSubmit={(e) => formSubmit(e)}
    >
      <h2 className={classes.title}>Lorem's Pizza</h2>
      <div className={classes.container}>
        <div className={classes.labelDiv}>
          <label htmlFor="name" className={classes.label}>
            Name
          </label>
        </div>
        <div className={classes.inputDiv}>
          <input
            className={classes.input}
            name="name"
            placeholder="ex: John Smith"
            value={formState.name}
            onChange={inputChange}
          />
          {errors.name.length > 0 ? (
            <p className={classes.error}>{errors.name}</p>
          ) : null}
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.labelDiv}>
          <label htmlFor="pizzaSize" className={classes.label}>
            Select pizza size.
          </label>
        </div>
        <div className={classes.inputDiv}>
          <select
            id="pizzaSize"
            name="pizzaSize"
            className={classes.inputDrop}
            value={formState.pizzaSize}
            onChange={inputChange}
          >
            <option value={null}>--Choose an option--</option>
            <option value="per">Personal</option>
            <option value="sml">Small</option>
            <option value="med">Medium</option>
            <option value="lrg">Large</option>
            <option value="xlrg">X-Large</option>
          </select>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.labelDiv}>
          <label className={classes.label}>Pick a topping!</label>
        </div>
        <div className={classes.inputDiv}>
          <label>
            Pepperoni
            <input
              value="pepperoni"
              name="pepperoni"
              type="checkbox"
              checked={formState.pepperoni}
              onChange={inputChange}
            />
          </label>
          <label>
            Sausage
            <input
              value="sausage"
              name="sausage"
              type="checkbox"
              checked={formState.sausage}
              onChange={inputChange}
            />
          </label>
          <label>
            Pineapple
            <input
              value="pineapple"
              name="pineapple"
              type="checkbox"
              checked={formState.pineapple}
              onChange={inputChange}
            />
          </label>
          <label>
            No Topping/Cheese
            <input
              value="cheese"
              name="cheese"
              type="checkbox"
              checked={formState.cheese}
              onChange={inputChange}
            />
          </label>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.labelDiv}>
          <label htmlFor="text" className={classes.label}>
            Special Instructions
          </label>
        </div>
        <div className={classes.inputDiv}>
          <textarea
            id="textarea"
            name="textarea"
            rows="10"
            cols="50"
            placeholder="ex: Call when outside. Don't ring doorbell. Leave at door."
            value={formState.textarea}
            onChange={inputChange}
          />
        </div>
      </div>
      <div className={classes.orderDiv}>
        <p className={classes.p}>Double check that your order is correct.</p>
        <label htmlFor="submit" className={classes.label}>
          Submit
        </label>
        <button
          id="submit"
          name="submit"
          value={formState.submit}
          className={classes.submit}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
