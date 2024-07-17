import React from "react";
import Rating from "@mui/material/Rating";
import Currency from "../Currency/Currency";
import classes from "./Products.module.css";

export const ProductsList = ({ product }) => {
  const { image, title, id, rating, price } = product;
  return (
    <div className={classes.list_container}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} />
          {/* number */}
          <small>{rating.count}</small>
        </div>
        {/* price */}
        <Currency amount={price} />
      </div>
      <button className={classes.button}>Add to cart</button>
    </div>
  );
};
