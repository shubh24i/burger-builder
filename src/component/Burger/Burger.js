import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIngredient = Object.keys(props.ingredients)
    .map((keyIn) => {
      return [...Array(props.ingredients[keyIn])].map((_, i) => {
        return <BurgerIngredient key={keyIn + i} type={keyIn} />;
      });
    })
    .reduce((prevVal, CurrValue) => {
      return prevVal.concat(CurrValue);
    }, []);

  if (transformedIngredient.length === 0) {
    transformedIngredient = "Start to add inredient";
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
