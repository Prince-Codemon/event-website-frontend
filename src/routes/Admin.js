import React from "react";
import { Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

const Admin = ({ children }) => {
  const { login, admin } = useSelector((state) => state.auth);
  console.log(admin);
  return login && admin ? children : <Navigate to="/" />;
};

export default Admin;
