import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductsList } from "./ProductsList";
import classes from "./Products.module.css"

export const Products = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProduct(res.data));
  }, []);
  return (
    <div className={classes.product_container}>
      {products.map((singleProduct) => {
        return <ProductsList product={singleProduct} key={singleProduct.id} />;
      })}
    </div>
  );
};
