
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductsList } from "./ProductsList";
import classes from "./Products.module.css";
import {Loader} from "../../components/Loader/Loader"

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
      setisLoading(false);
    });
  }, []);

  return (
    <>
    {isLoading? (<Loader />): <div className={classes.product_container}>
        {products.map((singleProduct) => (
          <ProductsList
            product={{ ...singleProduct, renderAdd: true }}
            key={singleProduct.id}
          />
        ))}
      </div>}
      
    </>
  );
};
