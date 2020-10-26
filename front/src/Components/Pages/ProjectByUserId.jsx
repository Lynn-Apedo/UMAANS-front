// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// export default function ProjectByUserId() {
//   const [projectsByUserId, setProjectsByUserId] = useState();
//   console.log("ProjectByUserId -> PROJECTSBYUSERID projects", projectsByUserId);
//   const { id } = useParams();

//   //   const token = localStorage.getItem("token");
//   //   console.log("fetchUser -> PROJECTSBYUSERID token", token);
//   //   const user = localStorage.getItem("user");
//   //   console.log("PROJECTSBYUSERID user", user);

//   useEffect(() => {
//     var config = {
//       method: "get",
//       url: `http://localhost:2088/api/projects/ofuser/${id}`,
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem("token"),
//       },
//     };

//     axios(config)
//       .then(function (response) {
//         console.log(
//           "PROJECTSBYUSERID res.data.proj:",
//           response.data.projectFound
//         );
//         setProjectsByUserId(response.data.projectFound);
//       })
//       .catch(function (error) {
//         console.log("PROJECTBYUSERID error axios:", error.response);
//       });
//   }, [id]);

//   return (
//     <>
//       <div className="main">
//         <h2 className="main_titlePage">vos publications</h2>
//         <div className="main_projectsByUserIdContainer">
//           {/* {projectsByUserId.map((project, i) => (
//             <div key={i}>
//               <p>{project.architect}</p>
//             </div>
//           ))} */}
//           {/* <div
//             key={i}
//             className="main_projectsByUserIdContainer_projectContainer"
//           >
//             <Link
//               className="main_projectsByUserIdContainer_projectContainer_link"
//               to={`/projects/${projectByUserId.id}`}
//             >
//               <img
//                 className="main_projectsByUserIdContainer_projectContainer_img"
//                 src={projectByUserId.mainPicture}
//                 alt="couverture"
//               />
//               <div className="main_projectsByUserIdContainer_projectContainer_fiche">
//                 <p className="main_projectsByUserIdContainer_projectContainer_fiche_country">
//                   {projectByUserId["Category.categoryName"]}{" "}
//                   <spans>&#45; </spans>
//                   {projectByUserId["Country.countryName"]}{" "}
//                 </p>
//                 <p className="main_projectsByUserIdContainer_projectContainer_fiche_titleArchitectes">
//                   {projectByUserId.title} - {projectByUserId.architect}
//                 </p>
//               </div>
//             </Link>
//           </div> */}
//         </div>
//       </div>
//     </>
//   );
// }
