import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import FormData from "form-data";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  // const { id } = useParams();

  useEffect(() => {
    var config = {
      method: "get",
      url: "http://localhost:2088/api/getprojects",
      // headers: {
      //   Authorization: localStorage.getItem("token"),
      // },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.projectFound);
        setProjects(response.data.projectFound);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, []);
  return (
    <>
      <div className="projectsContainer">
        {projects.map((project, i) => (
          <div key={i} className="projectsContainer_content">
            <p>{project.architect}</p>
          </div>
        ))}
      </div>
    </>
  );
}
