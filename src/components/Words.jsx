import React from "react";
import ReactWordcloud from "react-wordcloud";
import { convertToWCType } from "../tools/tools";
import noir from "../constants/colors/noir";
import rouge from "../constants/colors/rouge";
import bleu from "../constants/colors/bleu";
import vert from "../constants/colors/vert";
import blanc from "../constants/colors/blanc";

function setWords(current) {
  if (current.name === "noir") {
    return convertToWCType(noir);
  } else if (current.name === "rouge") {
    return convertToWCType(rouge);
  } else if (current.name === "bleu") {
    return convertToWCType(bleu);
  } else if (current.name === "vert") {
    return convertToWCType(vert);
  } else if (current.name === "blanc") {
    return convertToWCType(blanc);
  } else {
    return convertToWCType(noir);
  }
}

function Words(props) {
  const options = {
    colors:
      props.current.name === "noir" ||
      props.current.name === "bleu" ||
      props.current.name === "rouge"
        ? ["white"]
        : ["black"],
    enableTooltip: false,
    deterministic: false,
    fontFamily: "Barlow Condensed",
    fontSizes: [20, 100],
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
    <div style={{ width: "100%", height: "60vh", zIndex: 2 }}>
      <ReactWordcloud options={options} words={setWords(props.current)} />
    </div>
  );
}

export default Words;
