import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    var config = {
      method: "get",
      url: "http://localhost:2088/api/getprojects",
    };

    axios(config)
      .then(function (response) {
        setProjects(response.data.projectFound);
      })
      .catch(function (error) {});
  }, []);

  return (
    <>
      <div className="bprojects">
        <div className="bprojects_main">
          <h2 className="bprojects_main_titlePage">projets</h2>
          <div className="bprojects_main_projectsContainer">
            {projects.map((project, i) => (
              <div
                key={i}
                className="bprojects_main_projectsContainer_projectContainer"
              >
                <Link
                  className="bprojects_main_projectsContainer_projectContainer_link"
                  to={`/projects/${project.id}`}
                >
                  <img
                    className="bprojects_main_projectsContainer_projectContainer_img"
                    src={project.mainPicture}
                    alt="couverture"
                  />
                  <div className="bprojects_main_projectsContainer_projectContainer_fiche">
                    <p className="bprojects_main_projectsContainer_projectContainer_fiche_country">
                      {project["Category.categoryName"]} <spans>&#45; </spans>
                      {project["Country.countryName"]}{" "}
                    </p>
                    <p className="bprojects_main_projectsContainer_projectContainer_fiche_titleArchitectes">
                      {project.title} - {project.architect}
                    </p>
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
