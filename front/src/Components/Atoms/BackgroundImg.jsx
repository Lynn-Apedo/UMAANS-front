import React from "react";

export default function BackgroundImg({ src }) {
  let imgStyle = {
    width: 100 + "%",
    objectFit: "cover",
  };
  return <img src={src} alt="slide-img" style={imgStyle} />;
}
