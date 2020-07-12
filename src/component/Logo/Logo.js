import React from "react";
import classes from "./Logo.module.css";
import logoImg from "../../assets/images/burger-logo.png.png";
const logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logoImg} alt="Burger logo" />
    </div>
  );
};

export default logo;
