import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./components/pages/landing/Landing";
import { Order } from "./components/pages/order/Order";
import { Cart } from "./components/pages/Cart/Cart";
import { SignUp } from "./components/pages/Auth/SignUp";
import { Four04 } from "./components/pages/Four04/Four04";
import { Result } from "./components/pages/Result/Result";
import { ProductDetail } from "./components/pages/ProductDetail/ProductDetail";
import { Payment } from "./components/pages/Payment/Payment";
export const Rounting = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Auth" element={<SignUp />} />
        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="/products/:productID" element={<ProductDetail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<Four04 />} />
      </Routes>
    </Router>
  );
};
