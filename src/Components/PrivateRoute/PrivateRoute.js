import userEvent from "@testing-library/user-event";
import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({children,...rest}) => {
    const {allContext} = useAuth();
    const {user,isLoading} = allContext;
    if (isLoading) {
      return (
      <div className="my-5 text-center">
        <Spinner animation="border" variant="danger"></Spinner>
      </div>)
    }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
