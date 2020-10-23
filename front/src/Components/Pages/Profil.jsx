import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Profil() {
  const [profils, setProfils] = useState([]);
  // const [projects, setProjects] = useState([]);
  const { id } = useParams();

  // useEffect(() => {
  //   console.log("project 1");

  //   var config = {
  //     method: "get",
  //     url: "http://localhost:2088/api/getprojects",
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log("res.data.proj:", response.data.projectFound);
  //       setProjects(response.data.projectFound);
  //     })
  //     .catch(function (error) {
  //       console.log(error.response);
  //     });
  // }, []);

  useEffect(() => {
    var config = {
      method: "get",
      url: `http://localhost:2088/api/user/${id}`,
    };

    axios(config)
      .then(function (response) {
        console.log("res.data.proj:", response.data.newUser);
        setProfils(response.data.newUser);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, [id]);

  return (
    <>
      <div className="profilContainer">
        <h2 className="profilContainer_titlePage">information personnels</h2>
        <div className="profilContainer_infoContainer">
          <p className="profilContainer_infoContainer_profilName">
            {" "}
            nom de l'user {profils.firstName}
          </p>
          <p className="profilContainer_infoContainer_entrepriseName">
            nom de l'entreprise: ??
          </p>
          <p className="profilContainer_infoContainer_savedProject">
            {" "}
            Projet enregistrés: ??
          </p>
          <p className="profilContainer_infoContainer_postedProject">
            Projets publiés: ??
          </p>
        </div>
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
