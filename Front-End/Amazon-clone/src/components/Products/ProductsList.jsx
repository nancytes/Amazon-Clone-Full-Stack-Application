import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import Currency from "../Currency/Currency";
import classes from "./Products.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../utilities/action.type";

export const ProductsList = ({ product, flex, productDesc}) => {
  const { image, title, id, rating, price, description } = product;

const {state, dispatch}=useContext(DataContext)

console.log(state);

const addToCart = () => {
  dispatch({type:Type.ADD_TO_BASKET, 
    item:{
      image, title, id, rating, price, description
    }
    // payload:product
    })
}


  return (
    <div className={`${classes.list_container} ${flex?classes.flex_container: ""}` }>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title} </h3>
          {productDesc && <div className={classes.desc}>{description}</div>}
        <div className={classes.rating}>
          {/* rating */}
          {rating && <Rating value={rating.rate} precision={0.1} />}
          {/* number */}
          {rating && <small>{rating.count}</small>}
        </div>
        {/* price */}
        <Currency amount={price} />
      </div>
      <button className={classes.button} onClick={addToCart}>Add to cart</button>
    </div>
  );
};
