import React, { useState } from "react";
import { colorList } from "../constants/colorList";

function Colors(props) {
  const [open, setOpen] = useState(null);

  return (
    <div
      style={{
        width: "80%",
        height: "20vh",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
      }}
    >
      {colorList.map((color, index) => {
        return ColorItem(props, color);
      })}
    </div>
  );
}

function ColorItem(props, color) {
  return (
    <div
      onClick={() => {
        props.setColor(color);
      }}
      style={{
        height: "40px",
        width: "40px",
        borderRadius: "100%",
        transition: "0.5s ease-in",
        backgroundColor: color.color
      }}
    ></div>
  );
}

export default Colors;
