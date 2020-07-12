import React, { Component } from "react";
import Auxilury from "./../Auxilury/Auxilury";
import Toolbar from "../../component/Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";
import SideDrawer from "../../component/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    openSideDrawer: false,
  };

  sideDeawerCloseHandler = () => {
    this.setState({ openSideDrawer: false });
  };

  sideDeawerToggleHandler = () => {
    this.setState((prevState) => ({
      openSideDrawer: !prevState.openSideDrawer,
    }));
  };
  render() {
    return (
      <Auxilury>
        <Toolbar sideDeawerToggle={this.sideDeawerToggleHandler} />
        <SideDrawer
          open={this.state.openSideDrawer}
          closed={this.sideDeawerCloseHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Auxilury>
    );
  }
}

export default Layout;
