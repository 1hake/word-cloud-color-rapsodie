import React from "react";
import ReactWordcloud from "react-wordcloud";
import { convertToWCType } from "../tools/tools";
import noir from "../constants/colors/noir";
import rouge from "../constants/colors/rouge";
import bleu from "../constants/colors/bleu";
import vert from "../constants/colors/vert";
import blanc from "../constants/colors/blanc";
import noir_verb from "../constants/colors/noir_verb";
import rouge_verb from "../constants/colors/rouge_verb";
import bleu_verb from "../constants/colors/bleu_verb";
import vert_verb from "../constants/colors/vert_verb";
import blanc_verb from "../constants/colors/blanc_verb";

function setWords(current, verb) {
  if (!verb) {
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
  } else {
    if (current.name === "noir") {
      return convertToWCType(noir_verb);
    } else if (current.name === "rouge") {
      return convertToWCType(rouge_verb);
    } else if (current.name === "bleu") {
      return convertToWCType(bleu_verb);
    } else if (current.name === "vert") {
      return convertToWCType(vert_verb);
    } else if (current.name === "blanc") {
      return convertToWCType(blanc_verb);
    } else {
      return convertToWCType(noir_verb);
    }
  }
}

function Words(props) {
  const options = {
    colors: props.current.name === "blanc" ? ["black"] : ["white"],
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
    <div style={{ width: "100%", height: "60vh", zIndex: 100 }}>
      <ReactWordcloud
        options={options}
        words={setWords(props.current, props.verb)}
      />
    </div>
  );
}

export default Words;
