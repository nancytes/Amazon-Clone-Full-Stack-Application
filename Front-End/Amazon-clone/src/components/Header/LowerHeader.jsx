import React from "react";
import { IoMdMenu } from "react-icons/io";
import classes from "./Header.module.css";

export const LowerHeader = () => {
  return (
    <>
      <div className={classes.lower_container}>
        <ul>
          <li>
            <IoMdMenu />
            <p>All</p>
          </li>
          <li>Today's Deal</li>
          <li>Customer Services</li>
          <li>Registery</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
      </div>
    </>
  );
};
