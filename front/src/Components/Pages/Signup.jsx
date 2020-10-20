import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [signup, setSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    pseudo: "",
    isPro: false,
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
    await axios.post("/api/signup", signup);
  };
  return (
    <>
      <div className="formContainer">
        <h2 className="formContainer_titlePage">signup</h2>;
        <form onSubmit={handleSubmit} className="formContainer_form">
          <label htmlFor="firstname" className="formContainer_labels">
            Prénom:
          </label>
          <input
            type="text"
            value={signup.firstName}
            name="firstName"
            id="firstname"
            className="formContainer_inputs"
            onChange={handleChange}
            required
          />

          <label htmlFor="lastname" className="formContainer_labels">
            Nom:
          </label>
          <input
            type="text"
            value={signup.lastName}
            name="lastName"
            id="lastname"
            className="formContainer_inputs"
            onChange={handleChange}
            required
          />

          <label htmlFor="email" className="formContainer_labels">
            Email:
          </label>
          <input
            type="email"
            value={signup.email}
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
            value={signup.password}
            name="password"
            className="formContainer_inputs"
            onChange={handleChange}
          />

          <label htmlFor="pseudo" className="formContainer_labels">
            Pseudo:
          </label>
          <input
            type="text"
            value={signup.pseudo}
            name="pseudo"
            className="formContainer_inputs"
            onChange={handleChange}
          />

          <label htmlFor="isPro" className="formContainer_labels">
            Status de l'utilisateur:
          </label>
          <select
            name="isPro"
            id="isPro"
            className="formContainer_inputs"
            value={signup.isPro}
            onChange={handleChange}
          >
            <option value="false">Utilisateur</option>
            <option value="true">Professionnel</option>
          </select>

          <button type="submit" value="Envoyer" id="btn" onClick={handleSubmit}>
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
}
