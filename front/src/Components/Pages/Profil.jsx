import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";
import ProjectByUserId from "./ProjectByUserId";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Profil() {
  const [profils, setProfils] = useState([]);
  console.log("Profil -> PROFIL profils Projects", profils.Projects);
  // console.log("Profil -> PROFIL profils Projects 2***", profils.Projects[0]);
  // const { id } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log("fetchUser -> token PROFIL ===", token);
    const user = localStorage.getItem("user");
    // console.log("user PROFIL ===", user);
    // console.log("user.id PROFIL ===", user.id);

    var config = {
      method: "get",
      url: `http://localhost:2088/api/getprofil/${user.id}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios(config)
      .then(function (response) {
        console.log(
          "PROFIL AXIOS res. :=======",
          response.data.userFound.Projects
        );

        // console.log(
        //   "PROFIL AXIOS res.data.profil NEWUSER:=======",
        //   response.data.newUser
        // );
        // console.log("PROFIL AXIOS res.data.profil :=======", response.data);

        setProfils(response.data.userFound.Projects);
        // console.log("Profil -> PROFIL setProfils, setProfils);
      })
      .catch(function (error) {
        console.log("PROFIL error axios catch:", error.response);
      });
  }, []);

  return (
    <>
      <div className="profilContainer">
        <h2 className="profilContainer_titlePage">information personnels</h2>
        <div className="profilContainer_infoContainer">
          <p className="profilContainer_infoContainer_profilName">
            {" "}
            {profils.firstName} {profils.lastName}
          </p>
          <p className="profilContainer_infoContainer_entrepriseName">
            {profils.email}
          </p>
        </div>
        <div className="profilContainer_crud">
          <button>Modifier profil</button>
          <button>Supprimer profil</button>
        </div>
      </div>
      {/* <ProjectByUserId /> */}

      {/* <div className="maaaaap">{profils["Project.architect"]}</div> */}

      <div className="main_projectsContainer">
        {profils.map((project) => (
          <div className="main_projectsContainer_projectContainer">
            <p>{project.architect}</p>
            <Link
              className="savedProjectContainer_projectsContainer_projectContainer_link"
              to={`/projects/${project.id}`}
            >
              <img
                className="savedProjectContainer_projectsContainer_projectContainer_img"
                src={project.mainPicture}
                alt="couverture"
              />
              <div className="savedProjectContainer_projectsContainer_projectContainer_fiche">
                <p className="savedProjectContainer_projectsContainer_projectContainer_fiche_country">
                  {project["Category.categoryName"]} <spans>&#45; </spans>
                  {project["Country.countryName"]}
                </p>
                <p className="savedProjectContainer_projectsContainer_projectContainer_fiche_titleArchitectes">
                  {project.title} - {project.architect}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* <div className="savedProjectContainer">
        <h2 className="savedProjectContainer_titlePage">projets enregistrés</h2>
        <div className="savedProjectContainer_projectsContainer">
          {projects.map((project, i) => (
            <div
              key={i}
              className="savedProjectContainer_projectsContainer_projectContainer"
            >
              <Link
                className="savedProjectContainer_projectsContainer_projectContainer_link"
                to={`/projects/${project.id}`}
              >
                <img
                  className="savedProjectContainer_projectsContainer_projectContainer_img"
                  src={project.mainPicture}
                  alt="couverture"
                />
                <div className="savedProjectContainer_projectsContainer_projectContainer_fiche">
                  <p className="savedProjectContainer_projectsContainer_projectContainer_fiche_country">
                    {project["Category.categoryName"]} <spans>&#45; </spans>
                    {project["Country.countryName"]}
                  </p>
                  <p className="savedProjectContainer_projectsContainer_projectContainer_fiche_titleArchitectes">
                    {project.title} - {project.architect}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}
