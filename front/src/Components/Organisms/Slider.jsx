import React, { useState } from "react";
import { Link } from "react-router-dom";

import ImgComp from "../Atoms/ImgComp";
import img1 from "./img/australie.jpg";
import img2 from "./img/bresil.jpg";
import img3 from "./img/chine.jpg";
import rightArrow from "./img/right-arrow.png";
import leftArrow from "./img/left-arrow.png";

export default function Slider() {
  let sliderArr = [
    <Link to={`/projects/23`}>
      <ImgComp src={img1} />
      <p className="legend">
        Arkadia / DKO Architecture + Breathe Architecture <br />{" "}
        <span>Complexe de logement bioclimatique à Alexandria, Australie.</span>
      </p>
    </Link>,
    <Link to={`/projects/37`}>
      <ImgComp src={img2} />
      <p className="legend">
        Village des enfants / Rosenbaum + Aleph Zero <br />{" "}
        <span>
          Ecole primaire au coeur d'une savanne tropical, dans le centre du
          Brésil.
        </span>
      </p>
    </Link>,
    <Link to={`/projects/38`}>
      <ImgComp src={img3} />
      <p className="legend">
        Qplex 12 / Fomwerk Architects + Aleph Zero <br />{" "}
        <span>
          Centre commerciale au coeur d'un complexe résidentiel à ShenZhen,
          Chine.
        </span>
      </p>
    </Link>,
  ];
  const [x, setX] = useState(0);

  const goLeft = () => {
    if (x === 0) {
      setX(-100 * (sliderArr.length - 1));
    } else {
      setX(x + 100);
    }
  };
  const goRight = () => {
    if (x === -100 * (sliderArr.length - 1)) {
      setX(0);
    } else {
      setX(x - 100);
    }
  };
  return (
    <div className="back">
      <div className="sliderContainer">
        {sliderArr.map((item, index) => {
          return (
            <div
              key={index}
              className="sliderContainer_slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              {item}
            </div>
          );
        })}
        <button id="goLeft" onClick={goLeft}>
          <img src={leftArrow} alt="previous" />{" "}
        </button>
        <button id="goRight" onClick={goRight}>
          <img src={rightArrow} alt="next" />
        </button>
      </div>
    </div>
  );
}
