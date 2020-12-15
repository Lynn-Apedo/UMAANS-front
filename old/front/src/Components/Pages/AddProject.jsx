import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function AddProject() {
  const imgParDefaut =
    "https://images.unsplash.com/photo-1501769214405-5e5ee5125a02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=698&q=80";

  const [addProject, setAddProject] = useState({
    architect: "",
    size: "",
    year: "",
    categoryId: parseInt("1"),
    countryId: parseInt("1"),
    title: "",
    projectDescr: "",
  });
  const [mainPicture, setMainPicture] = useState(null);

  //event.target.files[0]

  const handleChangeFile = (event) => {
    setMainPicture(event.target.files[0]);
  };

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
    try {
      var data = new FormData();
      data.append("countryId", addProject.countryId);
      data.append("categoryId", addProject.categoryId);
      data.append("architect", addProject.architect);
      data.append("size", addProject.size);
      data.append("year", addProject.year);
      data.append("title", addProject.title);
      data.append("projectDescr", addProject.projectDescr);
      data.append("mainPicture", mainPicture);
      setAddProject({
        ...addProject,
        isSubmitting: true,
        errorMessage: null,
      });

      const token = localStorage.getItem("token");
      await axios({
        method: "post",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        url: "/api/addproject",
        data: data,
      });
      history.push("/profil");
    } catch (error) {
      console.log("SIGNUP 4");
      console.log("SIGNUP erreur catch", error);
      console.log("SIGNUP erreur catch2", error.response);

      setAddProject({
        ...addProject,
        isSubmitting: false,
        errorMessage: error.response.data.description,
      });
    }
  };

  return (
    <>
      <div className="baddproject">
        <div className="baddproject_formContainer">
          <h2 className="baddproject_formContainer_titlePage">
            Ajouter un projet:
          </h2>

          <form
            onSubmit={handleSubmit}
            className="baddproject_formContainer_form"
          >
            <label
              htmlFor="architect"
              className="baddproject_formContainer_labels"
            >
              Architecte(s) ou autres:
            </label>
            <input
              type="architect"
              value={addProject.architect}
              name="architect"
              id="architect"
              className="baddproject_formContainer_inputs"
              onChange={handleChange}
              required
            />

            <label htmlFor="size" className="baddproject_formContainer_labels">
              Superficie du projet:
            </label>
            <input
              type="number"
              value={addProject.size}
              name="size"
              id="size"
              className="baddproject_formContainer_inputs"
              onChange={handleChange}
              required
              min="0"
            />

            <label htmlFor="year" className="baddproject_formContainer_labels">
              Année du projet:
            </label>
            <input
              type="number"
              value={addProject.year}
              name="year"
              id="year"
              className="baddproject_formContainer_inputs"
              onChange={handleChange}
              required
              min="0"
            />

            <label
              htmlFor="categoryId"
              className="baddproject_formContainer_labels"
            >
              Catégorie du projet:
            </label>
            <select
              name="categoryId"
              id="categoryId"
              className="baddproject_formContainer_inputs"
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

            <label
              htmlFor="countryId"
              className="baddproject_formContainer_labels"
            >
              Pays du projet:
            </label>
            <select
              name="countryId"
              id="countryId"
              className="baddproject_formContainer_inputs"
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

            <label htmlFor="title" className="baddproject_formContainer_labels">
              Titre du projet:
            </label>
            <input
              type="text"
              value={addProject.title}
              name="title"
              id="title"
              className="baddproject_formContainer_inputs"
              onChange={handleChange}
              required
            />

            <label
              htmlFor="projectDescr"
              className="baddproject_formContainer_labels"
            >
              Description:
            </label>
            <textarea
              type="text"
              value={addProject.projectDescr}
              name="projectDescr"
              id="projectDescr"
              className="baddproject_formContainer_inputs"
              onChange={handleChange}
              required
            />

            <label
              htmlFor="mainPicture"
              className="baddproject_formContainer_labels"
            >
              Photos (url):
            </label>
            <input
              type="file"
              name="mainPicture"
              id="mainPicture"
              className="baddproject_formContainer_inputs"
              onChange={handleChangeFile}
            />

            {addProject.errorMessage}

            <button
              type="submit"
              value="Envoyer"
              className="btn btnForm"
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
