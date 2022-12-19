import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Private = ({ children }) => {
  const { login } = useSelector((state) => state.auth);
  return login ? (
  children
  ) : (
    <Navigate to="/login" />
  );
};

export default Private;
