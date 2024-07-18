import React from 'react'
import {DotLoader} from "react-spinners"

export const Loader = () => {
  return (
    <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
    }}>
    <DotLoader color="#818181" />
    
    </div>
  )
}
