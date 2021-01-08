import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function AddEvent() {
  const [AddEvent, setAddEvent] = useState({
    date: "",
    eventType: "",
    eventName: "",
    eventPlace: "",
    eventDescr: "",
  });


  const handleChange = async (event) => {
    const { name, value } = event.target;
    setAddEvent({
      ...AddEvent,
      [name]: value,
    });
  };

  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setAddEvent({
        ...AddEvent,
        isSubmitting: true,
        errorMessage: null,
      });

      const token = localStorage.getItem("token");
      await axios({
        method: "post",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        url: "/api/AddEvent",
        data: AddEvent,
      });
      history.push("/profil");
    } catch (error) {
      console.log("SIGNUP 4");
      console.log("SIGNUP erreur catch", error);
      console.log("SIGNUP erreur catch2", error.response);

      setAddEvent({
        ...AddEvent,
        isSubmitting: false,
        errorMessage: error.response.data.description,
      });
    }
  };

  return (
    <>
      <div className="baddproject">
        <div className="baddproject_formContainer">
          <h2 className="baddproject_formContainer_titlePage">
            Ajouter un projet:
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
              value={AddEvent.date}
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
              value={AddEvent.eventType}
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
              value={AddEvent.eventName}
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
              value={AddEvent.eventPlace}
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
              value={AddEvent.eventDescr}
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
              value={AddEvent.link}
              name="link"
              id="link"
              className="baddproject_formContainer_inputs"
              onChange={handleChange}
              required
            />

            {AddEvent.errorMessage}

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
