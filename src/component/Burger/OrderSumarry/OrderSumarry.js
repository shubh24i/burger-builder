import React from "react";
import Auxilury from "../../../hoc/Auxilury/Auxilury";
import Button from "./../../UI/Button/Button";
const orderSumarry = (props) => {
  const ingredientSumarry = Object.keys(props.ingredients).map((igKey) => (
    <li key={igKey}>
      <span style={{ textTransform: "capitalize" }}>{igKey}</span> :
      {props.ingredients[igKey]}
    </li>
  ));

  return (
    <Auxilury>
      <h1>Your Order</h1>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSumarry}</ul>
      <p>
        <strong>Total Price Rs. {props.price}</strong>
      </p>
      <p>Continue to checkout</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        CENCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Auxilury>
  );
};

export default orderSumarry;
