import React from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function EditProject() {
  const [editProject, setEditProject] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  console.log("EDITPROJECT project:", editProject);

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setEditProject({
      ...editProject,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    await axios({
      method: "put",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      url: `/api/editproject/${id}`,
      data: editProject,
    });
    history.push("/profil");
  };

  return (
    <>
      <div className="bupdate">
        <div className="bupdate_formContainer">
          <h2 className="bupdate_formContainer_titlePage">EDITER</h2>

          <form onSubmit={handleSubmit} className="bupdate_formContainer_form">
            <label htmlFor="architect" className="bupdate_formContainer_labels">
              Architecte(s) ou autres:
            </label>
            <input
              type="architect"
              value={editProject.architect}
              name="architect"
              id="architect"
              className="bupdate_formContainer_inputs"
              onChange={handleChange}
              required
            />

            <label htmlFor="size" className="bupdate_formContainer_labels">
              Superficie du projet:
            </label>
            <input
              type="number"
              value={editProject.size}
              name="size"
              id="size"
              className="bupdate_formContainer_inputs"
              onChange={handleChange}
              required
              min="0"
            />

            <label htmlFor="year" className="bupdate_formContainer_labels">
              Année du projet:
            </label>
            <input
              type="number"
              value={editProject.year}
              name="year"
              id="year"
              className="bupdate_formContainer_inputs"
              onChange={handleChange}
              required
              min="0"
            />

            <label
              htmlFor="categoryId"
              className="bupdate_formContainer_labels"
            >
              Catégorie du projet:
            </label>
            <select
              name="categoryId"
              id="categoryId"
              className="bupdate_formContainer_inputs"
              value={editProject.categoryId}
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

            <label htmlFor="countryId" className="bupdate_formContainer_labels">
              Pays du projet:
            </label>
            <select
              name="countryId"
              id="countryId"
              className="bupdate_formContainer_inputs"
              value={editProject.countryId}
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

            <label htmlFor="title" className="bupdate_formContainer_labels">
              Titre du projet:
            </label>
            <input
              type="text"
              value={editProject.title}
              name="title"
              id="title"
              className="bupdate_formContainer_inputs"
              onChange={handleChange}
              required
            />

            <label
              htmlFor="projectDescr"
              className="bupdate_formContainer_labels"
            >
              Description:
            </label>
            <textarea
              type="text"
              value={editProject.projectDescr}
              name="projectDescr"
              id="projectDescr"
              className="bupdate_formContainer_inputs"
              onChange={handleChange}
              required
            />

            <label
              htmlFor="mainPicture"
              className="bupdate_formContainer_labels"
            >
              Photos (url):
            </label>
            <input
              type="text"
              value={editProject.mainPicture}
              name="mainPicture"
              id="mainPicture"
              className="bupdate_formContainer_inputs"
              onChange={handleChange}
              required
            />

            {/* {error} */}
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

        {/* <button onClick={deleteProject}>SUPPRIMER</button> */}
      </div>
    </>
  );
}
