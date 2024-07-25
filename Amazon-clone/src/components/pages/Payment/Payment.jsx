import React, { useContext, useState } from "react";
import { Layout } from "../../layout/Layout";
import { DataContext } from "../../DataProvider/DataProvider";
import { ProductsList } from "../../Products/ProductsList";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import classes from "./Payment.module.css";
import Currency from "../../Currency/Currency";
import { axiosInstance } from "../../api/axios";
import { CircularProgress } from "@mui/material";
import { db } from "../../../utilities/firebase";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { state, dispatch } = useContext(DataContext);
  const { basket, user } = state;
  console.log(user);
  const totalItem = basket?.reduce((amount, item) => {
    return amount + item.amount;
  }, 0);
  const [cardError, setcardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handlechange = (e) => {
    e?.error?.message ? setcardError(e?.error?.message) : setcardError("");
  };
  const total = basket.reduce((amount, item) => {
    return amount + item.price * item.amount;
  }, 0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setProcessing(true);
      const response = await axiosInstance({
        method: "post",
        url: `/payment/create?total=${total * 100}`,
      });

      const clientSecret = response.data?.clientSecret;

      const { paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,

        {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        }
      );
      await db
        .collection("users")
        .doc(user.uid)
        .collection("order")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
// empty basket 
dispatch({
  type: "EMPTY_BASKET"
  })

      setProcessing(false);
      navigate("/order", { state: { msg: "you have placed new order" } });
    } catch (error) {
      setProcessing(false);
    }
  };

  return (
    <Layout>
      <div className={classes.payment_header}>
        <p>Checkout ({totalItem}) items</p>
      </div>
      <hr />
      <section className={classes.payment}>
        <div className={classes.flex}>
          <h2>Delivery Address</h2>
          <div>
            <p>{user?.email}</p>
            <p>123 Ethiopia</p>
            <p>Addis Ababa, AA</p>
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h2>Review Items and Delivery</h2>
          <div>
            {basket.map((item) => (
              <ProductsList product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h2>Payment Method</h2>
          <div className={classes.payment_card}>
            <div className={classes.payment_detail}>
              <form onSubmit={handleSubmit}>
                {cardError && <p style={{ color: "red" }}>{cardError}</p>}
                <CardElement onChange={handlechange} />
                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      Total order | <Currency amount={total} />
                    </span>
                  </div>
                  <button type="submit">
                    {processing ? (
                      <div className={classes.loading}>
                        <CircularProgress size={20} />
                        <p>please wait</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;
