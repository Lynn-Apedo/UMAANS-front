import React from "react";

export default function Agenda() {
  return (
    <>
      <div className="b">
        <div className="b_agendaContainer">
          <div className="b_agendaContainer_titlePage">
            <h2>agenda</h2>
          </div>
          <div className="b_agendaContainer_events">
            <div className="b_agendaContainer_events_eventOne">
              <h3>28 oct.</h3>
              <h4>Exposition</h4>
              <p>
                "7 milliards de voisins" - Comment repenser le logement
                collectif. A la cité de l'architecture et du Patrimoine.
              </p>
            </div>
            <div className="b_agendaContainer_events_eventTwo">
              <h3>18 nov.</h3>
              <h4>Conférence - 18h30</h4>
              <p>
                L'architecture durable accessible à tous. Avec Charles Correa et
                Simon Velez au Pavillon de l'Arsenal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
