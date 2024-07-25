import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { DataContext } from "../DataProvider/DataProvider"

export const ProtectedRoute = ({children, msg, redirect}) => {

    const navigate = useNavigate()
    
    const { state, dispatch } = useContext(DataContext);
  const { user } = state;

     useEffect(()=>{
        if(!user){
            navigate("/auth", {state:{msg, redirect}})
            }

     },[user])


  return children;
}
