import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import ContextAuth from "../Context/ContextAuth";

export default function Signin() {
  const [signin, setSignin] = useState({
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  });

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setSignin({
      ...signin,
      [name]: value,
    });
  };

  const { dispatch } = useContext(ContextAuth);
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setSignin({
        ...signin,
        isSubmitting: true,
        errorMessage: null,
      });
      const res = await axios.post("http://localhost:2088/api/signin", signin);
      if (res.status === 200) {
        return dispatch({
          type: "LOGIN",
          payload: res,
        });
      }
    } catch (error) {
      setSignin({
        ...signin,
        isSubmitting: false,
        errorMessage: error.message || error.statusText,
      });
    }
  };

  return (
    <>
      <div className="formContainer">
        <h2 className="formContainer_titlePage">Signin</h2>;
        <form onSubmit={handleSubmit} className="formContainer_form">
          <label htmlFor="email" className="formContainer_labels">
            Email:
          </label>
          <input
            type="email"
            value={signin.email}
            name="email"
            id="email"
            className="formContainer_inputs"
            onChange={handleChange}
            required
          />

          <label htmlFor="password" className="formContainer_labels">
            Mot de passe:
          </label>
          <input
            type="password"
            value={signin.password}
            name="password"
            className="formContainer_inputs"
            onChange={handleChange}
          />

          <button type="submit" value="Envoyer" id="btn" onClick={handleSubmit}>
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
}
