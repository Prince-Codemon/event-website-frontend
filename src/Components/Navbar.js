import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../store/models/authSlice";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const { login, admin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <header className="text-gray-600 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
         <img src="/assests/1.png" alt="logo" className="h-16 w-16 rounded-full bg-indigo-700" />
          <span className="ml-3 text-xl">CGC Events</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to={'/'} className="mr-5 hover:text-gray-900 font-semibold">Home</Link>
          <Link to={'/events'} className="mr-5 hover:text-gray-900 font-semibold ">Events</Link>
          <Link to={'/about'} className="mr-5 hover:text-gray-900 font-semibold">About</Link>
        </nav>
        <Link to={'/login'} className="inline-flex items-center bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-500 text-white rounded text-lg mt-4 md:mt-0">
          Login
         
            
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
