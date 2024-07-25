import React, { useEffect, useContext, useState } from "react";
import { Layout } from "../../layout/Layout";
import { db } from "../../../utilities/firebase";
import { DataContext } from "../../DataProvider/DataProvider";
import classes from "./order.module.css";
import { ProductsList } from "../../Products/ProductsList";

const Order = () => {
  const { state, dispatch } = useContext(DataContext);
  const { user } = state;
  const [order, setOrder] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("order")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrder(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data()
            }))
          )
        );
        // return () => unsubscribe();
    } else {
      setOrder([]);
    }
  }, [user]);
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.order_container}>
          <h2>Your Orders</h2>
          {
            order?.length == 0 && <div style={{padding:"20px"}}>You don't have any order yet.</div>
          }
          <div>
            {order?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order ID: {eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order) => {
                    return(
                    <ProductsList flex={true} product={order} key={order.id} />
                    )
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Order;

// import React, { useEffect, useContext, useState } from "react";
// import { Layout } from "../../layout/Layout";
// import { db } from "../../../utilities/firebase";
// import { DataContext } from "../../DataProvider/DataProvider";
// import classes from "./order.module.css";
// import { ProductsList } from "../../Products/ProductsList";

// const Order = () => {
//   const { state, dispatch } = useContext(DataContext);
//   const { user } = state;
//   const [order, setOrder] = useState([]);

//   useEffect(() => {
//     if (user) {
//       console.log("User found:", user.uid);
//       const unsubscribe = db
//         .collection("users")
//         .doc(user.uid)
//         .collection("order")
//         .orderBy("created", "desc")
//         .onSnapshot((snapshot) => {
//           const orders = snapshot.docs.map((doc) => ({
//             id: doc.id,
//             data: doc.data()
//           }));
//           console.log("Orders fetched:", orders);
//           setOrder(orders);
//         });

//       // Cleanup subscription on unmount or user change
//       return () => unsubscribe();
//     } else {
//       console.log("No user found, setting order to empty.");
//       setOrder([]);
//     }
//   }, [user]);

//   return (
//     <Layout>
//       <section className={classes.container}>
//         <div className={classes.order_container}>
//           <h2>Your Orders</h2>
//           <div>
//   {order.length > 0 ? (
//     order.map((eachOrder) => (
//       <div key={eachOrder.id} className={classes.orderItem}>
//         <hr />
//         <p><strong>Order ID:</strong> {eachOrder.id}</p>
//         <p><strong>Order Date:</strong> {new Date(eachOrder.data.created * 1000).toLocaleDateString()}</p> 
        
//         {eachOrder.data.basket && eachOrder.data.basket.length > 0 ? (
//           eachOrder.data.basket.map((product) => (
//             <div key={product.id} className={classes.productItem}>
//               <img src={product.image} alt={product.title} className={classes.productImage} />
//               <div className={classes.productDetails}>
//                 <h3>{product.title}</h3>
//                 <p>{product.description}</p>
//                 <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
//                 <p><strong>Amount:</strong> {product.amount}</p>
//                 <p><strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No products found in this order.</p>
//         )}
//       </div>
//     ))
//   ) : (
//     <p>No orders found</p>
//   )}
// </div>

//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Order;
