import React from "react";
import "./App.css";

// import Nav from "./Components/Molecules/Nav";

import { BrowserRouter as Router } from "react-router-dom";
// import Router from "react-router-dom";
import Header from "./Components/Organisms/Header";
import Routes from "./Components/Routes";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}
