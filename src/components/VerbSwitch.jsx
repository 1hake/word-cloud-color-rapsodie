import React from "react";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  text: {
    fontFamily: "Barlow",
    fontWeight: "bold",
    zIndex: 2
  },
  switch: {
    zIndex: 2
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
});

function VerbSwitch(props) {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <p
        style={{
          color:
            props.currentColor.name === "blanc" ||
            props.currentColor.name === "vert"
              ? "black"
              : "white",
          transition: "0.5s ease-in-out"
        }}
        className={classes.text}
      >
        Include verbs into word cloud
      </p>
      <Switch
        className={classes.switch}
        checked={props.verb}
        onChange={() => props.setVerb(!props.verb)}
        value="verbChecked"
        inputProps={{ "aria-label": "primary" }}
      />
    </div>
  );
}

export default VerbSwitch;
