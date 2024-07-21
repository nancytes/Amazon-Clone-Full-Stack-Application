import React, { useContext } from 'react';
import { Layout } from '../../layout/Layout';
import { DataContext } from '../../DataProvider/DataProvider';
import { ProductsList } from '../../Products/ProductsList';
import Currency from '../../Currency/Currency';
import { Link } from 'react-router-dom';
import classes from './Cart.module.css';
import { Type } from '../../../utilities/action.type'; 
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


export const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { basket, user } = state;

  // Calculate total price of items in the basket
  const total = basket.reduce((amount, item) => {
    return amount + item.price * item.amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: item,
    });
  };

  const decrement = (itemId) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id: itemId,
    });
  };

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello, {user && user.name}</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Oops! No items in your cart.</p>
          ) : (
            basket?.map((item) => (
              <section className={classes.cart_product}>
              
                <ProductsList product={item} flex={true} productDesc={true} renderAdd={false} />
                <div className={classes.btn_container}>
                  <button className={classes.btn} onClick={() => increment(item)}><IoIosArrowUp size={20}/></button>
                  <span>{item.amount}</span>
                  <button className={classes.btn} onClick={() => decrement(item.id)}><IoIosArrowDown size={20} /></button>
                </div>
                
             
              </section>
            ))
          )}
        </div>
        {basket.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal: {basket.length} items</p>
              <Currency amount={total.toFixed(2)} /> 
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payment">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
};
