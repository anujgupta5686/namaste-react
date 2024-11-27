import React from "react";
import { useRouteError } from "react-router-dom";

const  Error = () => {
    const err=useRouteError();
    console.log("Error::",err)
  return (
    <div>
        <h1>Oops!</h1>
        <p>Something went wrong!!</p>
        <h3>{err.status}:{err.text}</h3>
    </div>
  )
}

export default Error;
