import React, { useEffect, useState } from "react";
import {BsGoogle} from "react-icons/bs"
import { useFormik } from "formik";
import { loginSchema } from "../validation";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../store/services/userService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setLogin } from "../store/models/authSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  const [login, response] = useLoginMutation();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { values, touched, handleBlur, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: loginSchema,
      onSubmit: (values) => {
        login(values);
        console.log(response);
      },
    });

  useEffect(() => {
    if (response?.data?.msg && response.isSuccess) {
      localStorage.setItem("user", response.data.token);
      dispatch(setLogin(response.data));
      toast.success(response?.data?.msg);
      navigate("/");
    }
  }, [response?.data?.msg]);
  useEffect(() => {
    if (response?.error?.data?.msg) {
      toast.error(response?.error?.data?.msg);
    }
  }, [response?.error?.data?.msg]);

  return (
    <>
      <ToastContainer position="top-center" pauseOnHover={false} />
      <section className="section py-5 md:py-20">
        <form
          className="md:w-[440px] p-5  py-6 rounded-sm shadow-sm bg-white w-[280px] "
          onSubmit={handleSubmit}
        >
          <h1 className="font-medium text-xl w-full border-b-2 border-indigo-300 pb-3">
            Login
          </h1>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="inpt"
              value={values.email}
              onChange={handleChange}
              id="email"
              onBlur={handleBlur}
              placeholder="Enter email"
            />
            {touched.email && errors.email ? <p>{errors.email}</p> : null}
          </div>
          <div className="form-control relative ">
            <label htmlFor="password">Password</label>
            <input
              type={show ? "text" : "password"}
              className="inpt relative pr-[20%]"
              name="password"
              id="password"
              onBlur={handleBlur}
              value={values.password}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Enter password"
            />
            <span
              className={`btn absolute text-sm ${
                errors.password && "bottom-[30%]"
              } ${!errors.password && "bottom-[10%]"} right-1`}
              onClick={() => {
                setShow(show ? false : true);
              }}
            >
              {show ? "hide" : "show"}
            </span>

            <div className="flex justify-between w-full">
              {touched.password && errors.password ? (
                <p className=" ">{errors.password}</p>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <button type="submit" className="btn mt-2 px-6 py-2">
            {response.isLoading ? "Loading..." : "Login"}
          </button>
          <div className="flex mt-2 items-center justify-center flex-col gap-2">
            <Link
              to={"/forgot-password"}
              className=" text-indigo-500 font-semibold hover:text-indigo-600 hover:underline"
            >
              Forgot Password?
            </Link>
            <Link
              to={"/register"}
              className=" text-indigo-500 font-semibold hover:text-indigo-600 hover:underline"
            >
              Don't have a account?
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
