import React from "react";
import classes from "./SidedrawerToggle.module.css";

const sidedrawerToggle = (props) => {
  return (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default sidedrawerToggle;
