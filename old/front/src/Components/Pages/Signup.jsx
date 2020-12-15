import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const history = useHistory();

  const [signup, setSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    pseudo: "",
    isPro: false,
    isSubmitting: false,
    errorMessage: null,
  });

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setSignup({
      ...signup,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setSignup({
        ...signup,
        isSubmitting: true,
        errorMessage: null,
      });

      const res = await axios.post("http://localhost:2088/api/signup", signup);

      history.push("/signin");
    } catch (error) {
      console.log("SIGNUP erreur catch2", error.response);
      setSignup({
        ...signup,
        isSubmitting: false,
        errorMessage: error.response.data.description,
      });
    }
  };

  return (
    <>
      <div className="bsignup">
        <div className="bsignup_formContainer">
          <h2 className="bsignup_formContainer_titlePage">inscription</h2>
          <form onSubmit={handleSubmit} className="bsignup_formContainer_form">
            <label htmlFor="firstname" className="bsignup_formContainer_labels">
              Prénom:
            </label>
            <input
              type="text"
              value={signup.firstName}
              name="firstName"
              id="firstname"
              className="bsignup_formContainer_inputs"
              onChange={handleChange}
              required
            />
            <label htmlFor="bsignup_lastname" className="formContainer_labels">
              Nom:
            </label>
            <input
              type="text"
              value={signup.lastName}
              name="lastName"
              id="lastname"
              className="bsignup_formContainer_inputs"
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="bsignup_formContainer_labels">
              Email:
            </label>
            <input
              type="email"
              value={signup.email}
              name="email"
              id="email"
              className="bsignup_formContainer_inputs"
              onChange={handleChange}
              required
            />
            <label htmlFor="password" className="bsignup_formContainer_labels">
              Mot de passe:
            </label>
            <input
              type="password"
              value={signup.password}
              name="password"
              className="bsignup_formContainer_inputs"
              onChange={handleChange}
            />
            <label htmlFor="pseudo" className="bsignup_formContainer_labels">
              Pseudo:
            </label>
            <input
              type="text"
              value={signup.pseudo}
              name="pseudo"
              className="bsignup_formContainer_inputs"
              onChange={handleChange}
            />
            <label htmlFor="isPro" className="bsignup_formContainer_labels">
              Status de l'utilisateur:
            </label>
            <select
              name="isPro"
              id="isPro"
              className="bsignup_formContainer_inputs"
              value={signup.isPro}
              onChange={handleChange}
            >
              <option value="false">Utilisateur</option>
              <option value="true">Professionnel</option>
            </select>

            {signup.errorMessage}

            <button
              type="submit"
              value="Envoyer"
              className="bsignup_btn btnForm"
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
