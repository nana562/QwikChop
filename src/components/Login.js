import React, {useState} from "react";
import {Redirect} from "react-router-dom"
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
const Login = () => {
  const [redirectOnLogin, setRedirectOnLogin]= useState(false);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        axios
          .post("http://localhost:5000/login", values)
          .then((res) => setRedirectOnLogin(true));

      }}
    >
       <>
       {redirectOnLogin&& <Redirect to='/admin-dashboard'/>}
      <Form>

      <h1> ADMIN  LOGIN PORTAL</h1>
         <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <label htmlFor="password">password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />
        <button type="submit">Submit</button>
      </Form>
     </>  
    </Formik>
  
  );
};
export default Login;
