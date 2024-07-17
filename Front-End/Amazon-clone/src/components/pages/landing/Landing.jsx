import React from "react";
import { CarouselEffect } from "../../Carousel/CarouselEffect";
import { Category } from "../../Category/Category";
import { Products } from "../../Products/Products";
import { Layout } from "../../layout/Layout";

export const Landing = () => {
  return (
    <Layout>
      <CarouselEffect />
      <Category />
      <Products />
    </Layout>
  );
};
