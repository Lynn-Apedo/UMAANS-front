import React, { useEffect, useContext } from "react";
import Nav from "../Molecules/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import ContextAuth from "../Context/ContextAuth";

export default function Header() {
  const [showMenuM, setShowMenuM] = useState(false);
  const { state } = useContext(ContextAuth);

  const Logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    return () => {};
  }, [state.isAuthenticated]);

  let menu;
  if (showMenuM && state.isAuthenticated == false) {
    menu = (
      <div className="navLinkM">
        <ul>
          <Link to="/" onClick={() => setShowMenuM(!showMenuM)}>
            <li>Accueil</li>
          </Link>
          <Link to="/about" onClick={() => setShowMenuM(!showMenuM)}>
            <li>A Propos</li>
          </Link>
          <Link to="/signup" onClick={() => setShowMenuM(!showMenuM)}>
            <li>Inscription</li>
          </Link>
          <Link to="/signin" onClick={() => setShowMenuM(!showMenuM)}>
            <li>Connexion</li>
          </Link>
        </ul>
      </div>
    );
  } else if (showMenuM && state.isAuthenticated == true) {
    menu = (
      <div className="navLinkM">
        <ul className="nav-links">
          <Link to="/" onClick={() => setShowMenuM(!showMenuM)}>
            <li>Accueil</li>
          </Link>
          <Link to="/about" onClick={() => setShowMenuM(!showMenuM)}>
            <li>A Propos</li>
          </Link>
          <Link to="/profil" onClick={() => setShowMenuM(!showMenuM)}>
            <li>Profil</li>
          </Link>
          <Link to="/logout" onClick={() => setShowMenuM(!showMenuM)}>
            <li onClick={Logout}>Déconnexion</li>
          </Link>
        </ul>
      </div>
    );
  }

  return (
    <header>
      <div className="upperHeader">
        <p className="upperHeader_p">every</p>
        <Link className="a" to={"/"}>
          <h1>UMAANS</h1>
        </Link>

        <p className="upperHeader_p">' days</p>
        <nav className="mobileNav">
          <span>
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setShowMenuM(!showMenuM)}
            />
          </span>
          {menu}
        </nav>
      </div>

      <div className="lowerHeader">
        <Nav />
      </div>
    </header>
  );
}
