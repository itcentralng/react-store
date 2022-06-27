import React from "react";
import { Navigate , Routes, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("storeToken");
  console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate  to="/login" replace={true} />
      }
    />
  );
}

export default ProtectedRoute;