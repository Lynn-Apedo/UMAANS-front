import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import AddProject from "./Pages/AddProject";
import Projects from "./Pages/Projects";
import Project from "./Pages/Project";
import ProjectProfil from "./Pages/ProjectProfil";
import About from "./Pages/About";
import Profil from "./Pages/Profil";
import EditProject from "./Pages/EditProject";
import EditUser from "./Pages/EditUser";
import AdminSignin from "./Pages/AdminSignin";
import AddEvent from "./Pages/AddEvent";
import Events from "./Pages/Events";
import EditEvent from "./Pages/EditEvent";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/profil">
        <Profil />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <Route exact path="/editproject/:id">
        <EditProject />
      </Route>
      <Route exact path="/edituser/:id">
        <EditUser />
      </Route>
      <Route exact path="/projects/:id">
        <Project />
      </Route>
      <Route exact path="/projectprofil/:id">
        <ProjectProfil />
      </Route>
      <Route exact path="/addproject">
        <AddProject />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
      <Route exact path="/adminsignin"> 
        <AdminSignin />
      </Route>
      <Route exact path="/addevent">
        <AddEvent />
      </Route>
      <Route exact path="/events">
        <Events />
      </Route>
      <Route exact path="/editevent/:id">
        <EditEvent />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
