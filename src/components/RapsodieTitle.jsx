import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grow } from "@material-ui/core";
// import "../App.css";

const useStyles = makeStyles({
  container: {
    transition: "0.1s ease",
    width: "70%",
    height: "100px",
    fontSize: "1.25rem",
    fontFamily: "Barlow Condensed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  Rimage: {
    height: "70px",
    marginRight: "-20px",
    marginTop: "-25px",
    transition: "0.7s ease"
  },
  Simage: {
    height: "70px",
    marginLeft: "-10px",
    marginBottom: "-25px",
    transition: "0.7s ease"
  },
  RimageClose: {
    height: "70px",
    transition: "0.7s ease",
    marginRight: "-10px",
    marginBottom: "2px"
  },
  SimageClose: {
    height: "70px",
    transition: "0.7s ease",
    marginLeft: "-10px",
    marginTop: "0px"
  },
  title: {
    fontSize: "1.7em",
    fontWeight: "bold",
    transition: "0.7s ease",
    color: "white"
  },
  titleClose: {
    fontSize: "0em",
    fontWeight: "bold",
    transition: "0.7s ease",
    color: "white"
  }
});

function RapsodieTitle(props) {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  setTimeout(function() {
    setIsOpen(!isOpen);
  }, 1000);

  return (
    <div className={classes.container}>
      <img
        className={isOpen ? classes.Rimage : classes.RimageClose}
        src={require("../assets/img/rWhite.png")}
        alt=""
      />
      <p className={isOpen ? classes.title : classes.titleClose}>
        {"Rapsodie"}
      </p>
      <img
        className={isOpen ? classes.Simage : classes.SimageClose}
        src={require("../assets/img/sWhite.png")}
        alt=""
      />
    </div>
  );
}

export default RapsodieTitle;
