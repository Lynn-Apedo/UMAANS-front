import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <h2>UMAANS</h2>
      <ul className="nav-links">
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <Link to="/signup">
          <li>Inscription</li>
        </Link>
        <Link to="/signin">
          <li>Connexion</li>
        </Link>
      </ul>
    </nav>
  );
}
