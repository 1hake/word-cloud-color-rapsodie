import React, { useState } from "react";
import { colorList } from "../constants/colorList";

function Colors(props) {
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
      {colorList.map(color => {
        return ColorItem(props, color);
      })}
    </div>
  );
}

function ColorItem(props, color) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setOpen(!open)}
      onMouseLeave={() => setOpen(!open)}
      onClick={() => props.setColor(color)}
      style={{
        height: open ? "60px" : "40px",
        width: open ? "60px" : "40px",
        borderRadius: "100%",
        transition: "0.2s ease-in-out",
        backgroundColor: color.color
      }}
    ></div>
  );
}

export default Colors;
