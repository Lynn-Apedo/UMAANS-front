import React from "react";
import { useState } from "react";
import axios from "axios";
import ContextAuth from "../Context/ContextAuth";
import { useHistory } from "react-router-dom";

export default function AddProject() {
  const [addProject, setAddProject] = useState({
    // userId: "",
    // countryId: "",
    architect: "",
    size: "",
    year: "",
    category: "",
    title: "",
    projectDescr: "",
    mainPicture: "",
  });

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setAddProject({
      ...addProject,
      [name]: value,
    });
  };

  const { dispatch } = useContext(ContextAuth);

  const history = useHistory();
  const handleSubmit = async (event) => {
    const token = localStorage.getItem("token");
    await axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      url: "/api/projects",
      data: addProject,
    });
    history.push("/projects");
  };

  return (
    <>
      <h1>Ajouter un ajouter un projet:</h1>;
      <form onSubmit={handleSubmit}>
        <label htmlFor="architect">Architecte(s) ou autres:</label>
        <input
          type="architect"
          value={addProject.architect}
          name="architect"
          id="architect"
          onChange={handleChange}
          required
        />

        <label htmlFor="size">Superficie du projet:</label>
        <input
          type="number"
          value={addProject.size}
          name="size"
          id="size"
          onChange={handleChange}
          required
          min="0"
        />

        <label htmlFor="year">Superficie du projet:</label>
        <input
          type="number"
          value={addProject.year}
          name="year"
          id="year"
          onChange={handleChange}
          required
          min="0"
        />

        <label htmlFor="category">Status de l'utilisateur:</label>
        <select
          name="category"
          id="category"
          value={addProject.category}
          onChange={handleChange}
          required
        >
          <option value="false">Utilisateur</option>
          <option value="true">Professionnel</option>
          <option value="true">Professionnel</option>
          <option value="true">Professionnel</option>
          <option value="true">Professionnel</option>
          <option value="true">Professionnel</option>
          <option value="true">Professionnel</option>
          <option value="true">Professionnel</option>
        </select>

        <button type="submit" value="Envoyer" id="btn" onClick={handleSubmit}>
          Envoyer
        </button>
      </form>
    </>
  );
}
