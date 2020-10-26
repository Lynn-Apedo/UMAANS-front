import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Profil() {
  const [ProjectByUserId, setProjectByUserId] = useState([]);
  console.log(
    "Profil -> PROJECTBYUSERID profils Projects",
    ProjectByUserId.Projects
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

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
          "PROJECTBYUSERID AXIOS res. :=======",
          response.data.userFound.Projects
        );
        setProjectByUserId(response.data.userFound.Projects);
      })
      .catch(function (error) {
        console.log("PROJECTBYUSERID error axios catch:", error.response);
      });
  }, []);

  return (
    <>
      <div className="savedProjectContainer">
        <h2 className="savedProjectContainer_titlePage">vos publications</h2>

        <div className="savedProjectContainer_projectsContainer">
          {ProjectByUserId.map((project, i) => (
            <div
              key={i}
              className="savedProjectContainer_projectsContainer_projectContainer"
            >
              <Link
                className="savedProjectContainer_projectsContainer_projectContainer_link"
                to={`/editproject/${project.id}`}
              >
                <img
                  className="savedProjectContainer_projectsContainer_projectContainer_img"
                  src={project.mainPicture}
                  alt="couverture"
                />
                <div className="savedProjectContainer_projectsContainer_projectContainer_fiche">
                  {/* <p className="savedProjectContainer_projectsContainer_projectContainer_fiche_country">
                    {project["Category.categoryName"]} <spans>&#45; </spans>
                    {project["Country.countryName"]}
                  </p> */}
                  <p className="savedProjectContainer_projectsContainer_projectContainer_fiche_titleArchitectes">
                    {project.title} - {project.architect}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
