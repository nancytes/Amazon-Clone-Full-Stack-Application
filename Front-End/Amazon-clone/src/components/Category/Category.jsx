import React from "react";
import { CategoryJSON } from "./CategoryJSON";
import { CategoryList } from "./CategoryList";
import classes from "./Category.module.css";

export const Category = () => {
  return (
    <div className={classes.category_container}>
      {CategoryJSON.map((info, index) => (
        <CategoryList 
        key={index} 
        renderAdd={true} 
        data={info} />
      ))}
    </div>
  );
};
