import React from "react";

export const CategoryList = ({props}) => {
  return (
    <>
      <link to="">
        <span>
          <h2>{props.title}</h2>
        </span>
        <img src={props.img} alt="" />
        <p>Shop now</p>
      </link>
    </>
  );
};
