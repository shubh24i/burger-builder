import React from "react";

const authContext = React.createContext({
  addIngredients: () => {},
  deleteIngredients: () => {},
});

export default authContext;
