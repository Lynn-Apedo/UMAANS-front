import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Project() {
  const [project, setProject] = useState([]);
  const { id } = useParams();
  console.log("PROJECT project:", project);
  console.log("PROJECT project2:", project.projectFound);

  useEffect(() => {
    var config = {
      method: "get",
      url: `http://localhost:2088/api/projects/${id}`,
    };
    console.log("PROJECT ok");

    axios(config)
      .then(function (response) {
        console.log("PROJECT response-data-project =====", response.data);
        setProject(response.data.projectFound);
        console.log(
          "PROJECT response-data-project.projectFound.Category.categoryName =====",
          response.data.projectFound.Category.categoryName
        );
        console.log(
          "PROJECT response-data-project.projectFound.Country.countryName =====",
          response.data.projectFound.Country.countryName
        );
      })
      .catch(function (error) {
        console.log("PROJECT error axios:", error.response);
      });
    console.log("PROJECT id:", id);
  }, [id]);

  // useEffect(() => {
  //   console.log("project 2");
  //   const fetchData = async () => {
  //     const result = await axios.get(
  //       `http://localhost:2088/api/projects/${id}`
  //     );
  //     setProject(result.data);
  //   };
  //   fetchData();
  //   console.log("result of setProject:", fetchData);
  // }, [id]);

  return (
    <>
      <div className="main">
        <h2 className="main_titlePage">projets</h2>
        <div className="main_projectContainer">
          <img
            className="main_projectContainer_img"
            src={project.mainPicture}
            alt="couverture"
          />
          {/* ne fonctionne pas */}
          <p>
            {project["Country.countryName"]} -{" "}
            {project["Category.categoryName"]}
          </p>

          <p>{project.architect}</p>
          <p>{project.size}</p>
          <p>{project.year}</p>
          <p>{project.title}</p>
          <p>{project.projectDescr}</p>

          <button>Enregistrer le projet</button>
        </div>
      </div>
    </>
  );
}
