import React from "react";
// import { withRouter } from "react-router-dom";

import Agenda from "../Organisms/Agenda";
import ScrollProjects from "../Organisms/ScrollProjects";

export default function Home() {
  return (
    <>
      <Agenda />
      <ScrollProjects />
    </>
  );
}

// function Home() {
//   return (
//     <>
//       <h1>Home</h1>
//       <Agenda />
//       <ScrollProjects />
//     </>
//   );
// }

// export default withRouter(Home);
