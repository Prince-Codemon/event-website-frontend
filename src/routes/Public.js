import React from "react";
import { Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

const Public = ({ children }) => {
  const { login } = useSelector((state) => state.auth);
  return login ? (
    <Navigate to="/" />
  ) : (
   children
  );
};

export default Public;
