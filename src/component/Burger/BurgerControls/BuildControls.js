import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];
const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      <strong>Current Price Rs.{props.price}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        label={ctrl.label}
        key={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabledControl[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.disabled}
      onClick={props.click}
    >
      Order Now
    </button>
  </div>
);

export default buildControls;
