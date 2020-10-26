import React, { useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";

// import ContextAuth from "../Context/ContextAuth";

// import { useHistory } from "react-router-dom";
// const { dispatch } = useContext(ContextAuth);

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

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setAddProject({
      ...addProject,
      [name]: value,
    });
  };

  // const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    await axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      url: "/api/addproject",
      data: addProject,
    });
    // history.push("/projects");

    // var config = {
    //   method: "post",
    //   url: "http://localhost:2088/api/addproject",
    //   headers: {
    //     Authorization: "Bearer " + localStorage.getItem("token"),
    //   },
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log("ADDPROJECT response:", JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log("ADDPROJECT erreur catcher", error);

    //     let Error = "il y a une erreur";
    //     console.log("handleSubmit -> ADDPROJECT Error=============", Error);
    //     console.log("handleSubmit -> ADDPROJECT error", error.response);
    //   }),
    //   history.push("/projects");
  };

  let error = "A";
  if (error) {
    error = <p>hfkshfkjdshkjfhdskjh</p>;
  }
  return (
    <>
      <div className="formContainer">
        <h2 className="formContainer_titlePage">Ajouter un projet:</h2>;
        <form onSubmit={handleSubmit} className="formContainer_form">
          <label htmlFor="architect" className="formContainer_labels">
            Architecte(s) ou autres:
          </label>
          <input
            type="architect"
            value={addProject.architect}
            name="architect"
            id="architect"
            className="formContainer_inputs"
            onChange={handleChange}
            required
          />

          <label htmlFor="size" className="formContainer_labels">
            Superficie du projet:
          </label>
          <input
            type="number"
            value={addProject.size}
            name="size"
            id="size"
            className="formContainer_inputs"
            onChange={handleChange}
            required
            min="0"
          />

          <label htmlFor="year" className="formContainer_labels">
            Année du projet:
          </label>
          <input
            type="number"
            value={addProject.year}
            name="year"
            id="year"
            className="formContainer_inputs"
            onChange={handleChange}
            required
            min="0"
          />

          <label htmlFor="categoryId" className="formContainer_labels">
            Catégorie du projet:
          </label>
          <select
            name="categoryId"
            id="categoryId"
            className="formContainer_inputs"
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

          <label htmlFor="countryId" className="formContainer_labels">
            Pays du projet:
          </label>
          <select
            name="countryId"
            id="countryId"
            className="formContainer_inputs"
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
            <option name="Colombie" value="4">
              Brésil
            </option>
            <option name="Colombie" value="5">
              Chine
            </option>
            <option name="Colombie" value="6">
              Thailande
            </option>
            <option name="Colombie" value="7">
              Australie
            </option>
            <option name="Colombie" value="9">
              Danemark
            </option>
            <option name="Colombie" value="8">
              Singapour
            </option>
            <option name="Colombie" value="10">
              Angleterre
            </option>
            <option name="Colombie" value="11">
              Taiwan
            </option>
            <option name="Colombie" value="12">
              Indonésie
            </option>
          </select>

          <label htmlFor="title" className="formContainer_labels">
            Titre du projet:
          </label>
          <input
            type="text"
            value={addProject.title}
            name="title"
            id="title"
            className="formContainer_inputs"
            onChange={handleChange}
            required
          />

          <label htmlFor="projectDescr" className="formContainer_labels">
            Description:
          </label>
          <textarea
            type="text"
            value={addProject.projectDescr}
            name="projectDescr"
            id="projectDescr"
            className="formContainer_inputs"
            onChange={handleChange}
            required
          />

          <label htmlFor="mainPicture" className="formContainer_labels">
            Photos (url):
          </label>
          <input
            type="text"
            value={addProject.mainPicture}
            name="mainPicture"
            id="mainPicture"
            className="formContainer_inputs"
            onChange={handleChange}
            required
          />

          {/* {error} */}
          <button type="submit" value="Envoyer" id="btn" onClick={handleSubmit}>
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
}
