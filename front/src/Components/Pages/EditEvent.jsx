import React from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function EditProject() {
  const [editEvent, setEditEvent] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  console.log("EDITPROJECT project:", editEvent);

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setEditEvent({
      ...editEvent,
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
      url: `/api/editevent/${id}`,
      data: editEvent,
    });
    history.push("/profil");
  };

  return (
    <>
    <div className="baddproject">
        <div className="baddproject_formContainer">
          <h2 className="baddproject_formContainer_titlePage">
            modifier un évènement:
          </h2>

          <form
            onSubmit={handleSubmit}
            className="baddproject_formContainer_form"
          >
            <label
              htmlFor="date"
              className="baddproject_formContainer_labels"
            >
              date:
            </label>
            <input
              type="date"
              value={editEvent.date}
              name="date"
              id="date"
              className="baddproject_formContainer_inputs"
              onChange={handleChange}
              required
            />

            <label htmlFor="eventType" className="baddproject_formContainer_labels">
              Type d'évènement:
            </label>
            <input
              type="text"
              value={editEvent.eventType}
              name="eventType"
              id="eventType"
              className="baddproject_formContainer_inputs"
              onChange={handleChange}
              required
            />

            <label htmlFor="eventName" className="baddproject_formContainer_labels">
              Nom de l'évènement:
            </label>
            <input
              type="text"
              value={editEvent.eventName}
              name="eventName"
              id="eventName"
              className="baddproject_formContainer_inputs"
              onChange={handleChange}
              required
            />

            
            <label htmlFor="eventPlace" className="baddproject_formContainer_labels">
              Lieu:
            </label>
            <input
              type="text"
              value={editEvent.eventPlace}
              name="eventPlace"
              id="eventPlace"
              className="baddproject_formContainer_inputs"
              onChange={handleChange}
              required
            />

            <label
              htmlFor="eventDescr"
              className="baddproject_formContainer_labels"
            >
              Description:
            </label>
            <textarea
              type="text"
              value={editEvent.eventDescr}
              name="eventDescr"
              id="eventDescr"
              className="baddproject_formContainer_inputs"
              onChange={handleChange}
              required
            />

            
<label
              htmlFor="link"
              className="baddproject_formContainer_labels"
            >
              Lien vers la page d'origine de l'image:
            </label>
            <input
              type="link"
              value={editEvent.link}
              name="link"
              id="link"
              className="baddproject_formContainer_inputs"
              onChange={handleChange}
              required
            />

            {editEvent.errorMessage}

            <button
              type="submit"
              value="Envoyer"
              className="btn btnForm"
              onClick={handleSubmit}
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>

    </>
  );
}
