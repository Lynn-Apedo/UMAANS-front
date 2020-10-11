import React from "react";

export default function Agenda() {
  return (
    <>
      <div className="agendaContainer">
        <div className="sectionTitle">
          <h2>AGENDA</h2>
        </div>
        {/* <div className="eventContainer"> */}
        <div className="event eventOne">
          <h3>14 oct.</h3>
          <h4>Titre</h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vel
          dignissimos rem.
        </div>
        <div className="event eventTwo">
          <h3>28 oct.</h3>
          <h4>Titre</h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vel
          dignissimos rem.
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
