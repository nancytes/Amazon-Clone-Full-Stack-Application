import React from "react";
import Rating from "@mui/material/Rating";
import Currency from "../Currency/Currency";
import classes from "./Products.module.css";
import { Link } from "react-router-dom";

export const ProductsList = ({ product }) => {
  const { image, title, id, rating, price } = product;
  return (
    <div className={classes.list_container}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* rating */}
          {rating && <Rating value={rating.rate} precision={0.1} />}
          {/* number */}
          {rating && <small>{rating.count}</small>}
        </div>
        {/* price */}
        <Currency amount={price} />
      </div>
      <button className={classes.button}>Add to cart</button>
    </div>
  );
};
