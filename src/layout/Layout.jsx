import React, { useState, useEffect } from "react";
import Words from "../components/Words";
import Colors from "../components/Colors";
import words from "../constants/words";
import RapsodieTitle from "../components/RapsodieTitle";
import { colorList } from "../constants/colorList";
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
    color: "white",
    zIndex: 2
  },
  switch: {
    zIndex: 2
  }
});

function Layout(props) {
  const [currentColor, setCurrentColor] = useState(colorList[0]);
  const [verb, setVerb] = useState(false);
  const [loaded, setLoaded] = useState(true);
  const classes = useStyles();
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
          <p className={classes.text}>Include verbs into word cloud</p>
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
