import React from "react";
import {img} from "./img/img";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import classes from "./CarouselEffect.module.css"

export const CarouselEffect = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showindicators={false}
        showStatus={false}
      >
        {img.map((item) => {
          return (
              <img src={item} alt="img"  />
          );
        })}
      </Carousel>
      <div className={classes.img_carousel}></div>
    </>
  );
};
