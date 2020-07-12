import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <Burger ingredients={props.ingredients} />
      <Button btnType="Danger" clicked={props.checkoutCanceled}>
        CENCEL
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        Checkout
      </Button>
    </div>
  );
};

export default checkoutSummary;
