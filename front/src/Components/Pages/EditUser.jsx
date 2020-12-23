import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function EditUser() {
    const [editUser, setEditUser] = useState([]);
    const { id } = useParams();
    const history = useHistory();

    const handleChange = async (event) => {
        const { name, value } = event.target;
        setEditUser({
        ...editUser,
        [name]: value,
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token");
    
        await axios({
          method: "put",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          url: `/api/edituser/${id}`,
          data: editUser,
        });
        history.push("/profil");
      };

    return (
        <>
        <div className="bsignup">
        <div className="bsignup_formContainer">
          <h2 className="bsignup_formContainer_titlePage">Modification informations</h2>
          <form onSubmit={handleSubmit} className="bsignup_formContainer_form">
            <label htmlFor="firstname" className="bsignup_formContainer_labels">
              Prénom:
            </label>
            <input
              type="text"
              value={editUser.firstName}
              name="firstName"
              id="firstname"
              className="bsignup_formContainer_inputs"
              onChange={handleChange}
              required
            />
            <label htmlFor="bsignup_lastname" className="formContainer_labels">
              Nom:
            </label>
            <input
              type="text"
              value={editUser.lastName}
              name="lastName"
              id="lastname"
              className="bsignup_formContainer_inputs"
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="bsignup_formContainer_labels">
              Email:
            </label>
            <input
              type="email"
              value={editUser.email}
              name="email"
              id="email"
              className="bsignup_formContainer_inputs"
              onChange={handleChange}
              required
            />
            <label htmlFor="password" className="bsignup_formContainer_labels">
              Mot de passe:
            </label>
            <input
              type="password"
              value={editUser.password}
              name="password"
              className="bsignup_formContainer_inputs"
              onChange={handleChange}
            />
            <label htmlFor="pseudo" className="bsignup_formContainer_labels">
              Pseudo:
            </label>
            <input
              type="text"
              value={editUser.pseudo}
              name="pseudo"
              className="bsignup_formContainer_inputs"
              onChange={handleChange}
            />
            <label htmlFor="isPro" className="bsignup_formContainer_labels">
              Status de l'utilisateur:
            </label>
            <select
              name="isPro"
              id="isPro"
              className="bsignup_formContainer_inputs"
              value={editUser.isPro}
              onChange={handleChange}
            >
              <option value="false">Utilisateur</option>
              <option value="true">Professionnel</option>
            </select>

            {editUser.errorMessage}

            <button
              type="submit"
              value="Envoyer"
              className="bsignup_btn btnForm"
              onClick={handleSubmit}
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </>
    )
}
