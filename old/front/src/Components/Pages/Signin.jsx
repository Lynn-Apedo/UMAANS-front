import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import ContextAuth from "../Context/ContextAuth";
import { useHistory } from "react-router-dom";

export default function Signin() {
  const history = useHistory();

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
    event.preventDefault();
    try {
      setSignin({
        ...signin,
        isSubmitting: true,
        errorMessage: null,
      });

      const res = await axios.post("http://localhost:2088/api/signin", signin);

      if (res.status === 200) {
        return (
          dispatch({
            type: "LOGIN",
            payload: res,
          }),
          history.push("/")
        );
      } else {
        console.log("erreur");
      }
    } catch (error) {
      setSignin({
        ...signin,
        isSubmitting: false,
        errorMessage: error.response.data.description,
      });
    }
  };

  return (
    <>
      <div className="bsignin">
        <div className="bsignin_formContainer">
          <h2 className="bsignin_formContainer_titlePage">Connexion</h2>
          <form onSubmit={handleSubmit} className="bsignin_formContainer_form">
            <label htmlFor="email" className="bsignin_formContainer_labels">
              Email:
            </label>
            <input
              type="email"
              value={signin.email}
              name="email"
              id="email"
              className="bsignin_formContainer_inputs"
              onChange={handleChange}
              required
            />
            <label htmlFor="password" className="bsignin_formContainer_labels">
              Mot de passe:
            </label>
            <input
              type="password"
              value={signin.password}
              name="password"
              className="bsignin_formContainer_inputs"
              onChange={handleChange}
            />
            {signin.errorMessage}
            <button
              type="submit"
              value="Envoyer"
              className="bsignin_btn btnForm"
              onClick={handleSubmit}
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
