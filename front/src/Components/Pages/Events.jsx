import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {  Link } from "react-router-dom";

export default function Event() {
  const [event, setEvent] = useState([]);
  // const { id } = useParams();
console.log("EVENT:", event)
  useEffect(() => {
    var config = {
      method: "get",
      url: `http://localhost:2088/api/getevents`,
    };
    console.log("event ok");

    axios(config)
      .then(function (response) {
        setEvent(response.data.eventFound);
        console.log("TCL: Event -> setEvent", response.data.eventFound)
        
      })
      .catch(function (error) {
        console.log("event error axios:", error.response);
      });
  }, []);

  return (
    <>
      <div className="main">
        <h2 className="main_titlePage">Evènements</h2>
        <div className="bprojects_main_projectsContainer">
          {event.map((event, i) => (
            <div className="main_projectContainer_ficheProject">
              <p className="main_projectContainer_archi">{event.date}</p>
              <p className="lighter">Type: {event.eventType}</p>
              <p className="lighter">Nom: {event.eventName}</p>
              <p className="lighter">Lieu: {event.eventPlace}</p>
              <p className="lighter">Description: {event.eventDescr}</p>
              <br />
            
              <Link to={`/editevent/${event.id}`}>
                      <button className="btn btnCard">MODIFIER</button>
                    </Link>
              {/* <a href={event.link} target="blank" className="originLink">En savoir plus...</a> */}
  <br/>

              <Link to="/">
                <button className="btn btnCard">RETOUR</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
