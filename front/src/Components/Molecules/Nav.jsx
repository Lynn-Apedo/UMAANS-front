import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <Link to="/about">
          <li>A Propos</li>
        </Link>
        <Link to="/signup">
          <li>Inscription</li>
        </Link>
        <Link to="/signin">
          <li>Connexion</li>
        </Link>
        <Link to="/addproject">
          <li>Ajouter un projets</li>
        </Link>
        <Link to="/projects">
          <li>Projets</li>
        </Link>
        <Link to="/profil">
          <li>Profil</li>
        </Link>
      </ul>
    </nav>
  );
}
