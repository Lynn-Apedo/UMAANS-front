import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Project() {
  const [project, setProject] = useState([]);
  const { id } = useParams();
  console.log("project:", project);
  console.log("project2:", project.projectFound);

  useEffect(() => {
    var config = {
      method: "get",
      url: `http://localhost:2088/api/projects/${id}`,
    };
    console.log("ok");

    axios(config)
      .then(function (response) {
        console.log("response-data-project:", response.data);
        setProject(response.data);
      })
      .catch(function (error) {
        console.log(error.response);
      });
    console.log(id);
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

  console.log("result of setProject 1:", project);
  console.log("result of setProject 1:", project.projecf);

  return (
    <>
      <div className="projectContainer">
        <img
          className="projectContainer_img"
          src={project.mainPicture}
          alt="couverture"
        />
        <p>
          {project["Country.countryName"]} - {project["Category.categoryName"]}
        </p>
        <p>{project.architect}</p>
        <p>{project.size}</p>
        <p>{project.year}</p>
        <p>{project.title}</p>
        <p>{project.projectDescr}</p>

        <button>Enregistrer le projet</button>
      </div>
    </>
  );
}
