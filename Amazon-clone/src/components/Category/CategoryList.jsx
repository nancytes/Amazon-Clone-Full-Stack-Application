import React from "react";
import classes from "./Category.module.css"
import { Link } from "react-router-dom";

export const CategoryList = ({data}) => {
  const { title, img } = data;
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{title}</h2>
        </span>
        <img src={img} alt={title} />
        <p>Shop now</p>
      </Link>
    </div>
  );
};

