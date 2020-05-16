import React, { useState } from "react";
import randomId from "../randomId";

export default function Form(props) {
  const [formState, setFormState] = useState({
    name: "",
  });

  const inputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        id={randomId()}
        name="name"
        value={formState.name}
        onChange={inputChange}
      />
    </form>
  );
}
