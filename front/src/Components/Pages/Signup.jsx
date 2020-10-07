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
    await axios.post("api/signup", signup);
  };

  return (
    <>
      <h1>Signup</h1>;
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">Prénom:</label>
        <input
          type="text"
          value={signup.firstName}
          name="firstName"
          id="firstname"
          onChange={handleChange}
          required
        />

        <label htmlFor="lastname">Nom:</label>
        <input
          type="text"
          value={signup.lastName}
          name="lastName"
          id="lastname"
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={signup.email}
          name="email"
          id="email"
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          value={signup.password}
          name="password"
          onChange={handleChange}
        />

        <label htmlFor="pseudo">Pseudo:</label>
        <input
          type="text"
          value={signup.pseudo}
          name="pseudo"
          onChange={handleChange}
        />

        <label htmlFor="isPro">Status de l'utilisateur:</label>
        <select
          name="isPro"
          id="isPro"
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
    </>
  );
}
