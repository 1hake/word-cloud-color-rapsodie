import React, { useState, useEffect } from "react";
import Words from "../components/Words";
import Colors from "../components/Colors";
import words from "../constants/words";
import RapsodieTitle from "../components/RapsodieTitle";
import { colorList } from "../constants/colorList";
import WhiteSpace from "../components/WhiteSpace";
// import { set } from "d3";

const rootStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "100vh"
};

function Layout(props) {
  const [currentColor, setCurrentColor] = useState(colorList[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
      console.log("This will run after 1 second!");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  console.log(currentColor);
  return (
    <div
      style={{
        ...rootStyle,
        backgroundColor: currentColor ? currentColor.color : "grey",
        transition: "1s ease"
      }}
    >
      {!loaded ? (
        <RapsodieTitle />
      ) : (
        <>
          <WhiteSpace />
          <Words current={currentColor} words={words} />
          <Colors current={currentColor} setColor={setCurrentColor} />
        </>
      )}
    </div>
  );
}

export default Layout;
