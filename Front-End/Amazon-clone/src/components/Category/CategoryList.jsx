import React from "react";
import classes from "./Category.module.css"

export const CategoryList = ({data}) => {
  const { title, img } = data;
  return (
    <div className={classes.category}>
      <a href="">
        <span>
          <h2>{title}</h2>
        </span>
        <img src={img} alt={title} />
        <p>Shop now</p>
      </a>
    </div>
  );
};

