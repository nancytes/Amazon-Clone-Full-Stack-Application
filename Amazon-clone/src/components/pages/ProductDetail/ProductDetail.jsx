import React, { useState } from "react";
import { Layout } from "../../layout/Layout";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { ProductURL } from "../../api/ProductURL";
import { ProductsList } from "../../Products/ProductsList";
import { Loader } from "../../Loader/Loader";

export const ProductDetail = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true);
    axios.get(`${ProductURL}/products/${productID}`).then((res) => {
      setProduct(res.data);
      setisLoading(false);
    });
  }, [productID]);
  return (
    <Layout>
      {isLoading? (<Loader />): <ProductsList
          product={{ ...product, renderAdd: true }}
          flex={true}
          productDesc={true}
        />}
      
    </Layout>
  );
};
