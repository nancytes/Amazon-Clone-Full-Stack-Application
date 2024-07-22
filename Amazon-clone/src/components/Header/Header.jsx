// import React, { useContext } from "react";
// import classes from "./Header.module.css";
// import { CiLocationOn } from "react-icons/ci";
// import { FaSearch } from "react-icons/fa";
// import { FaCartArrowDown } from "react-icons/fa6";
// import "./LowerHeader"
// import { LowerHeader } from "./LowerHeader";
// import { Link } from "react-router-dom";
// import { DataContext } from "../DataProvider/DataProvider";

// export const Header = () => {
//   const {basket, dispatch}=useContext(DataContext)

//   return (
//     <>
//       <section className={classes.header_container}>
//         {/* deliver section */}
//         <div className={classes.logo_container}>
//           <Link to="/">
//             <img
//               src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//               alt="amazon image"
//             />
//           </Link>
//           <span>
//               <CiLocationOn />
//             </span>
//           <div className={classes.delivery}>
            
//             <p>Deliver to</p> 
//             <span>Ethiopia</span>
//           </div>
//         </div>

//         {/* search section */}
//           <div className={classes.search}>
//             <select name="" id="">
//               <option value="">All</option>
//             </select>
//             <input type="text" />
//             <FaSearch size={25} />
//           </div>
//         {/* cart section */}
//         <div className={classes.order_container}>
//           <Link to="" className={classes.language}>
//             <img
//               src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
//               alt="USA flag"
//             />
//             <select name="" id="">
//               <option value="">EN</option>
//             </select>
//           </Link>
          
//           <Link to="/auth">
//             <p>Sign in</p>
//             <span>Account & Lists</span>
//           </Link>
//           <Link to="/order">
//             <p>returns</p>
//             <span>& Orders</span>
//           </Link>
//           <Link to="/cart" className={classes.cart}>
//             <FaCartArrowDown size={35} />
//             <span>{basket?.length || 0}</span>
//           </Link>
//         </div>
//       </section>
//       <LowerHeader />
//     </>
//   );
// };
import React, { useContext } from "react";
import classes from "./Header.module.css";
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { LowerHeader } from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../utilities/firebase";

export const Header = () => {
  const { state, dispatch } = useContext(DataContext);
  const { basket, user } = state;
  const totalItem = basket?.reduce((amount,item)=>{
    return amount + item.amount
  },0)

  return (
    <section className={classes.fixedd}>
      <section className={classes.header_container}>
        {/* deliver section */}
        <div className={classes.logo_container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon image"
            />
          </Link>
          <span>
            <CiLocationOn />
          </span>
          <div className={classes.delivery}>
            <p>Deliver to</p>
            <span>Ethiopia</span>
          </div>
        </div>

        {/* search section */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" />
          <FaSearch size={25} />
        </div>

        {/* cart section */}
        <div className={classes.order_container}>
          <Link to="" className={classes.language}>
            <img
              src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
              alt="USA flag"
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>

          <Link to={!user && "/auth"}>
          <div className={classes.cart_container}>
            {
              user ? (
              <>
              <p>Hello {user?.email?.split("@")[0]} </p>
              <span onClick={()=>auth.signOut()}>Sign Out</span></>
              ):
              (<><p>Hello Guest</p>
              <span>Account & Lists</span>
              </>)
            }
          
          </div>
           
            
          </Link>
          <Link to="/order">
            <p>returns</p>
            <span>& Orders</span>
          </Link>
          <Link to="/cart" className={classes.cart}>
            <FaCartArrowDown size={35} />
            <span>{totalItem}</span>
          </Link>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};
