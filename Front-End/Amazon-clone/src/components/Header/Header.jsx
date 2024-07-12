import React from "react";
import classes from "./Header.module.css";
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";

export const Header = () => {
  return (
    <>
      <section className={classes.header_container}>
        {/* deliver section */}
        <div className={classes.logo_container}>
          <a href="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon image"
            />
          </a>
          <div className={classes.delivery}>
            <span><CiLocationOn /></span>
            <p>Deliver to</p>
            <span>Ethiopia</span>
          </div>
        </div>

        {/* search section */}
        <div>
          <div>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <FaSearch size={25}/>
          </div>
        </div>

        {/* cart section */}
        <div>
          <a href="/">
            <img
              src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
              alt="USA flag"
            />
          </a>
          <a href="">
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </a>
          <a href="">
            <p>Sign in</p>
            <span>Account & Lists</span>
          </a>
          <a href="">
            <p>returns</p>
            <span>& Orders</span>
          </a>
          <a href="">
          <FaCartArrowDown size={35}/>
            <span>0</span>
          </a>
        </div>
      </section>
    </>
  );
};
