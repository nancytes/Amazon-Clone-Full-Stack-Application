import React from "react";
import { Layout } from "../../layout/Layout";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ProductURL } from "../../api/ProductURL";
import { ProductsList } from "../../Products/ProductsList";
import classes from "./Result.module.css";
import {Loader} from "../../../components/Loader/Loader"

export const Result = () => {
  const { categoryName } = useParams();
  const [category, setCategory] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true);
    console.log("Category Name:", categoryName);
    axios
      .get(`${ProductURL}/products/category/${categoryName}`)
      .then((res) => {
        setCategory(res.data);
        setisLoading(false);
      });
    }, [categoryName]);
  return (
    <Layout>
       {isLoading? (<Loader />): <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        <div className={classes.product_container}>
          {category?.map((product) => {
            return (
              <ProductsList
                key={product.id}
                product={{ ...product, renderAdd: true }} 
                productDesc={false}
                style={{ padding: "30px" }}
              />
            );
          })}
        </div>
      </section>}
      
    </Layout>
  );
};
