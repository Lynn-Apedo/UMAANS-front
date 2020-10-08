import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import { useEffect } from "react";

export default function AddProject() {
  const [addProject, setAddProject] = useState({
    architect: "",
    size: "",
    year: "",
    categoryId: parseInt("1"),
    countryId: parseInt("1"),
    title: "",
    projectDescr: "",
    mainPicture: "",
  });
  // const [categorie, setCategorie] = useState({
  //   1: logement,
  //   2: renovation,
  //   3: commercialsBureaux,
  //   4: equipementPublic,
  //   5: education,
  //   6: equipementSportif,
  //   7: paysageUrbanisme,
  // });

  // const [categorie, setCategorie] = useState([1, 2, 3, 4, 5, 6, 7]);

  // const handleChange = async (event) => {
  //   const { value } = event.target.value;
  //   setAddProject({
  //     ...addProject,
  //     categoryId: value,
  //   });
  // };

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setAddProject({
      ...addProject,
      [name]: value,
    });
  };

  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    console.log("addProject", addProject);
    await axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      url: "http://localhost:2088/api/projects",
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

        <label htmlFor="year">Année du projet:</label>
        <input
          type="number"
          value={addProject.year}
          name="year"
          id="year"
          onChange={handleChange}
          required
          min="0"
        />

        <label htmlFor="categoryId">Catégorie du projet:</label>
        <select
          name="categoryId"
          id="categoryId"
          value={addProject.categoryId}
          onChange={handleChange}
          required
        >
          <option name="logement" value="1">
            logement
          </option>
          <option name="renovation" value="2">
            rénovation
          </option>
          <option name="commercialsBureaux" value="3">
            commercials et bureaux
          </option>
          <option name="equipementPublic" value="4">
            équipement public
          </option>
          <option name="education" value="5">
            éducation
          </option>
          <option name="equipementSportif" value="6">
            équipement sportif
          </option>
          <option name="paysageUrbanisme" value="7">
            paysage et urbanisme
          </option>
        </select>

        <label htmlFor="countryId">Pays du projet:</label>
        <select
          name="countryId"
          id="countryId"
          value={addProject.countryId}
          onChange={handleChange}
          required
        >
          <option name="France" value="1">
            France
          </option>
          <option name="Inde" value="2">
            Inde
          </option>
          <option name="Colombie" value="3">
            Colombie
          </option>
        </select>

        <label htmlFor="title">Titre du projet:</label>
        <input
          type="text"
          value={addProject.title}
          name="title"
          id="title"
          onChange={handleChange}
          required
        />

        <label htmlFor="projectDescr">Description:</label>
        <input
          type="text"
          value={addProject.projectDescr}
          name="projectDescr"
          id="projectDescr"
          onChange={handleChange}
          required
        />

        <label htmlFor="mainPicture">Photos:</label>
        <input
          type="text"
          value={addProject.mainPicture}
          name="mainPicture"
          id="mainPicture"
          onChange={handleChange}
          required
        />

        <button type="submit" value="Envoyer" id="btn" onClick={handleSubmit}>
          Envoyer
        </button>
      </form>
    </>
  );
}
