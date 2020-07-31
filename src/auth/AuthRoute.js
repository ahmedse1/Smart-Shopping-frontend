import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Layout } from "../components/Layout";

const AuthRoute = ({
  component: Component,
  history,
  isAuthenticated,
  ...rest
}) => {
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          localStorage.getItem("userType") === "user" ? (
            <Component {...props} />
          ) : (
            <Redirect from="/:anything" to="/login" />
          )
        }
      />
    </div>
  );
};

export default AuthRoute;
