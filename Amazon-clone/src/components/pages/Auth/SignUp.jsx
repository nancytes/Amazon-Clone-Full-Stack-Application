import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import classes from "./Signup.module.css";
import { auth } from "../../../utilities/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { DataContext } from "../../DataProvider/DataProvider";
import { Type } from "../../../utilities/action.type";
import { CircleLoader } from "react-spinners";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({ signIn: false, signUp: false });
  const { state, dispatch } = useContext(DataContext);
  const { user } = state;
  const navigate = useNavigate()

  const navStateData = useLocation()



  const signinHandle = async (e) => {
    e.preventDefault();

    if (e.target.name === "signin") {
      setLoading((prev) => ({ ...prev, signIn: true }));
      try {
        const userInfo = await signInWithEmailAndPassword(auth, email, password);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading((prev) => ({ ...prev, signIn: false }));
        navigate(navStateData?.state?.redirect || "/")
      } catch (err) {
        setError(err.message);
        setLoading((prev) => ({ ...prev, signIn: false }));
      }
    } else {
      setLoading((prev) => ({ ...prev, signUp: true }));
      try {
        const userInfo = await createUserWithEmailAndPassword(auth, email, password);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading((prev) => ({ ...prev, signUp: false }));
        navigate(navStateData?.state?.redirect || "/")
      } catch (err) {
        setError(err.message);
        setLoading((prev) => ({ ...prev, signUp: false }));
      }
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon"
        />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {
          navStateData?.state?.msg &&(
            <small style={{
              padding:"5px", textAlign:"center", color:"red", fontWeight: "bold",
            }}>
            {  navStateData?.state?.msg} 
            </small>
          )
        }
        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            name="signin"
            onClick={signinHandle}
            className={classes.login_signin}
          >
            {loading.signIn ? <CircleLoader color="#3e3e3e" size={15} /> : "Sign In"}
          </button>
          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button
            type="submit"
            name="register"
            onClick={signinHandle}
            className={classes.login_register}
          >
            {loading.signUp ? <CircleLoader color="#3e3e3e" size={15} /> : "Create your Amazon Account"}
          </button>
          {error && <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>}
        </form>
      </div>
    </section>
  );
};

