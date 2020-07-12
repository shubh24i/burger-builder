import React from "react";
import classes from "./Order.module.css";

const order = (props) => {
  //console.log(Object.keys(props.ingredients));
  let ingredients = [];
  for (const key in props.ingredients) {
    ingredients.push({ key: key, amount: props.ingredients[key] });
  }

  const ingredientsItem = ingredients.map((item) => {
    return (
      <span
        key={item.key}
        style={{
          textTransform: "capitalize",
          border: "1px solid #c0c0c0",
          padding: "8px",
          margin: "4px",
        }}
      >
        {item.key} {item.amount}
      </span>
    );
  });
  console.log(ingredients);
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientsItem}</p>
      <p>Price: Rs. {props.price} </p>
    </div>
  );
};

export default order;
