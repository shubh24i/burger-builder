import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "./../../Logo/Logo";
import NavigationItems from "./../NavigationItems/NavigationItems";
import SidedrawerToggle from "./../SidedrawerToggle/SidedrawerToggle";

const tool = (props) => {
  return (
    <header className={classes.Toolbar}>
      <SidedrawerToggle clicked={props.sideDeawerToggle} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default tool;
