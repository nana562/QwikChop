import React from "react";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup'
const Signup = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        axios
          .post("http://localhost:5000/signup", values)
          .then((res) => console.log(res));
      }}
    >
       
      <Form>
      <h1>REGISTER ADMIN</h1>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />
        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <label htmlFor="password">password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />
        <label htmlFor="passwordConfirmation">passwordConfirmation</label>
        <Field name="passwordConfirmation" type="password" />
        <ErrorMessage name="passwordConfirmation" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default Signup;
