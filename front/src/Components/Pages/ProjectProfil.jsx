import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Project() {
  const [project, setProject] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    var config = {
      method: "get",
      url: `http://localhost:2088/api/projects/${id}`,
    };

    axios(config)
      .then(function (response) {
        setProject(response.data.projectFound);
      })
      .catch(function (error) {
        console.log("PROJECT error axios:", error.response);
      });
  }, [id]);

  const projectId = project.id;

  const deleteProject = async () => {
    console.log("PEACE");
    var config = {
      method: "delete",
      url: `http://localhost:2088/api/projects/${projectId}`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    axios(config)
      .then(function (response) {
        setProject(response.data);
      })
      .catch(function (error) {
        console.log("DELETE error axios:", error.response);
      });
    history.push("/profil");
  };

  return (
    <>
      <div className="main">
        <h2 className="main_titlePage">projet</h2>
        <div className="main_projectContainer">
          <img
            className="main_projectContainer_img"
            src={project.mainPicture}
            alt="couverture"
          />
          <br />
          <br />
          <div className="main_projectContainer_ficheProject">
            <p className="main_projectContainer_archi">{project.architect}</p>
            <p>Superficie: {project.size} m²</p>
            <p>Années: {project.year}</p>
            <br />
            <p className="main_projectContainer_titleBuilding">
              {project.title}
            </p>
            <p>{project.projectDescr}</p>
            <br/>

            <a href={project.link} target="blank" className="originLink">En savoir plus...</a>
<br/>

            <button className="btn btnCard" onClick={deleteProject}>
              SUPPRIMER
            </button>
            <Link to="/profil">
              <button className="btn btnCard">RETOUR</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
