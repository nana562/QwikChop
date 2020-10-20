import React, { Component } from "react";
import auth from "../auth";
import "../static/css/LoginAdmin.css";
export default class LoginAdmin extends Component {
  render() {
    return (
      <div className="login-admin-main">
       
        <form
          action="javascript: void(0);"
          id="login-form"
          className="login-form"
          autoComplete="off"
          role="main"
        >
           <h1>ADMINISTRATOR</h1>
          <h1 className="a11y-hidden">Admin</h1>
          <div>
            <label className="label-email">
              <input
                type="text"
                className="text"
                name="text"
                placeholder="Username"
                required
              />
              <span className="required">Username</span>
            </label>
          </div>
          <input
            type="checkbox"
            name="show-password"
            className="show-password a11y-hidden"
            id="show-password"
          />
          <label className="label-show-password" for="show-password">
            <span>Show Password</span>
          </label>
          <div>
            <label className="label-password">
              <input
                type="text"
                className="text"
                name="password"
                placeholder="Password"
                required
              />
              <span className="required">Password</span>
            </label>
          </div>
          <input
            type="submit"
            value="Log In"
            onClick={() => {
              auth.login(() => {
                this.props.history.push("/admin-dashboard");
              });
            }}
          />
          <div className="email">
            <a href="#">Forgot password?</a>
          </div>
          <figure aria-hidden="true">
            <div className="person-body"></div>
            <div className="neck skin"></div>
            <div className="head skin">
              <div className="eyes"></div>
              <div className="mouth"></div>
            </div>
            <div className="hair"></div>
            <div className="ears"></div>
            <div className="shirt-1"></div>
            <div className="shirt-2"></div>
          </figure>
        </form>
      </div>
    );
  }
}
