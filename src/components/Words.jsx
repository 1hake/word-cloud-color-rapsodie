import React from "react";
import ReactWordcloud from "react-wordcloud";
import noir from "../constants/noir";
import { convertToWCType } from "../tools/tools";

function Words(props) {
  const options = {
    colors:
      props.current.name === "black" ||
      props.current.name === "blue" ||
      props.current.name === "red"
        ? ["white"]
        : ["black"],
    enableTooltip: false,
    deterministic: false,
    fontFamily: "Barlow Condensed",
    fontSizes: [20, 60],
    fontStyle: "normal",
    fontWeight: "bold",
    padding: 1,
    rotations: 1,
    rotationAngles: [0, 180],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
  };
  return (
    <div style={{ width: "100%", height: "60vh" }}>
      <ReactWordcloud options={options} words={convertToWCType(noir)} />
    </div>
  );
}

export default Words;
