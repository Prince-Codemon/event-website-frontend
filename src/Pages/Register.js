import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { registerSchema } from "../validation";
import { useRegisterMutation } from "../store/services/userService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [register, response] = useRegisterMutation();
  const { values, touched, handleBlur, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: {name:"", email: "", password: "" },
      validationSchema: registerSchema,
      onSubmit: (values) => {
        register(values);
        console.log(response);
      },
    });

  useEffect(() => {
    if (response?.data?.msg && response.isSuccess) {
      toast.success(response?.data?.msg);
      navigate("/login");
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
          className="md:w-[440px]  p-5 py-6 rounded-sm shadow-sm bg-white w-[280px] "
          onSubmit={handleSubmit}
        >
          <h1 className="font-medium text-lg w-full border-b-2 border-indigo-300 pb-3">
            Register
          </h1>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="name"
              className="inpt"
              value={values.name}
              onChange={handleChange}
              id="name"
              onBlur={handleBlur}
              placeholder="Enter name"
            />
            {touched.name && errors.name ? <p>{errors.name}</p> : null}
          </div>
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
              type="password"
              className="inpt relative pr-[20%]"
              name="password"
              id="password"
              onBlur={handleBlur}
              value={values.password}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Enter password"
            />

            <div className="flex justify-between w-full">
              {touched.password && errors.password ? (
                <p className=" ">{errors.password}</p>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <button type="submit" className="btn mt-2">
            {response.isLoading ? "Loading..." : "Register"}
          </button>
          <div className="flex mt-2 items-center justify-center text-indigo-500 font-semibold hover:text-indigo-600 hover:underline">
            <Link to={"/login"}>Already have a account</Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
