import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  // const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:2088/api/getprojects");
      setProjects(result.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <p>Projets</p>
    </>
  );
}
