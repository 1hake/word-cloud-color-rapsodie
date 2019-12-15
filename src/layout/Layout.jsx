import React, { useState, useEffect } from "react";
import Words from "../components/Words";
import Colors from "../components/Colors";
import words from "../constants/words";
import RapsodieTitle from "../components/RapsodieTitle";
import { colorList } from "../constants/colorList";
import { getRandomInt } from "../tools/tools";
import WhiteSpace from "../components/WhiteSpace";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";

const useStyles = makeStyles({
  rootStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100vh"
  },
  text: {
    fontFamily: "Barlow",
    fontWeight: "bold",
    zIndex: 2
  },
  switch: {
    zIndex: 2
  }
});

function Layout(props) {
  const [currentColor, setCurrentColor] = useState(
    colorList[getRandomInt(colorList.length - 1)]
  );
  const [verb, setVerb] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={classes.rootStyle}
      style={{
        backgroundColor: currentColor ? currentColor.color : "white",
        transition: "0s ease-in",
        transitionDelay: "1s"
        // zIndex: -1000
      }}
    >
      {!loaded ? (
        <RapsodieTitle />
      ) : (
        <>
          <WhiteSpace />
          <p
            style={{ color: currentColor.name === "blanc" ? "black" : "white" }}
            className={classes.text}
          >
            Include verbs into word cloud
          </p>
          <Switch
            className={classes.switch}
            checked={verb}
            onChange={() => setVerb(!verb)}
            value="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <WhiteSpace />
          <Words verb={verb} current={currentColor} words={words} />
          <Colors current={currentColor} setColor={setCurrentColor} />
        </>
      )}
    </div>
  );
}

export default Layout;
