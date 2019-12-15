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
        alignItems: "center",
        marginRight: (50 * (colorList.length - 1) + 70 * colorList.length) / 2
      }}
    >
      {colorList.map((color, index) => {
        return ColorItem(props, color, index);
      })}
    </div>
  );
}

function ColorItem(props, color, index) {
  const selected = color === props.current;
  return (
    <div
      onClick={() => {
        props.setColor(color);
      }}
      style={{
        overflow: "hidden",
        height: selected ? "350vh" : "50px",
        width: selected ? "350vh" : "50px",
        borderRadius: "100%",
        transition: selected ? "0.6s ease-in" : "0s ease-in",
        backgroundColor: color.color,
        position: "absolute",
        marginLeft: index * 70,
        zIndex: selected ? 0 : 3
      }}
    ></div>
  );
}

export default Colors;
