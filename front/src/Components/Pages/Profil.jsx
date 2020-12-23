import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Profil() {
  const [profils, setProfils] = useState([]);
  const [ProjectByUserId, setProjectByUserId] = useState([]);

  useEffect(() => {
    var config = {
      method: "get",
      url: `http://localhost:2088/api/user/${profils.id}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios(config)
      .then(function (response) {
        setProfils(response.data.userFound);
      })
      .catch(function (error) {});
  }, []);

  useEffect(() => {
    var config = {
      method: "get",
      url: `http://localhost:2088/api/getprojects/${profils.id}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios(config)
      .then(function (response) {
        setProjectByUserId(response.data.projectFound);
      })
      .catch(function (error) {
        console.log("PROJECTBYUSERID error axios catch:", error.response);
      });
  }, []);

  return (
    <>
      <div className="bprofil">
        <div className="bprofil_profilContainer">
          <h2 className="bprofil_profilContainer_titlePage">
            information personnels
          </h2>
          <div className="bprofil_profilContainer_infoContainer">
            <p className="bprofil_profilContainer_infoContainer_profilName">
              {" "}
              {profils.firstName} {profils.lastName}
            </p>
            <p className="bprofil_profilContainer_infoContainer_entrepriseName">
              {profils.email}
            </p>
            <Link to="/addproject">
              <button id="btn-green">Ajouter un projets</button>
            </Link>
            <Link to={`/edituser/${profils.id}`}>
              <button id="btn-green">Modifier ses informations</button>
            </Link>
          </div>
        </div>

        <div className="bprofil_savedProjectContainer">
          <h2 className="bprofil_savedProjectContainer_titlePage">
            vos publications
          </h2>

          <div className="bprofil_savedProjectContainer_projectsContainer">
            {ProjectByUserId.map((project, i) => (
              <div
                key={i}
                className="bprofil_savedProjectContainer_projectsContainer_projectContainer"
              >
                <Link
                  className="bprofil_savedProjectContainer_projectsContainer_projectContainer_link"
                  to={`/projectprofil/${project.id}`}
                >
                  <img
                    className="bprofil_savedProjectContainer_projectsContainer_projectContainer_img"
                    src={project.mainPicture}
                    alt="couverture"
                  />
                  <div className="bprofil_savedProjectContainer_projectsContainer_projectContainer_fiche">
                    <p className="bprofil_savedProjectContainer_projectsContainer_projectContainer_fiche_titleArchitectes">
                      {project.title} - {project.architect}
                    </p>
                    <Link to={`/editproject/${project.id}`}>
                      <button className="btn btnCard">MODIFIER</button>
                    </Link>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
