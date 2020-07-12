import React from "react";
import Logo from "./../../Logo/Logo";
import NavigationItems from "./../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "./../../UI/Backdrop/Backdrop";
import Auxilury from "../../../hoc/Auxilury/Auxilury";

const sideDrawer = (props) => {
  let closedSidedrawer = [classes.SideDrawer, classes.Close];
  if (props.open) {
    closedSidedrawer = [classes.SideDrawer, classes.Open];
  }
  return (
    <Auxilury>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={closedSidedrawer.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxilury>
  );
};

export default sideDrawer;
