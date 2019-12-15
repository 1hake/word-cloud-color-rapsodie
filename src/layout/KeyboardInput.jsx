import React from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import { colorList } from "../constants/colorList";

const handleKey = ["space", "left", "right"];

function KeyboardInput(props) {
  return (
    <KeyboardEventHandler
      handleKeys={handleKey}
      onKeyEvent={(key, e) => {
        if (key === "space") {
          if (props.current.index === colorList.length - 1) {
            props.setColor(colorList[0]);
          } else {
            props.setColor(colorList[props.current.index + 1]);
          }
        } else if (key === "right") {
          if (props.current.index === colorList.length - 1) {
            props.setColor(colorList[0]);
          } else {
            props.setColor(colorList[props.current.index + 1]);
          }
        } else if (key === "left") {
          props.setColor(colorList[props.current.index - 1]);
        }
      }}
    />
  );
}

export default KeyboardInput;
