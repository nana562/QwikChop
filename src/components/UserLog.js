import React, { Component } from "react";

export default class UserLog extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="message signup">
            <div className="btn-wrapper">
              <button className="button" id="signup">
                Sign Up
              </button>
              <button className="button" id="login">
                Login
              </button>
            </div>
          </div>
          <div className="form form--signup">
            <div className="form--heading">Welcome! Sign Up</div>
            <form autocomplete="off">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button className="button">Sign Up</button>
            </form>
          </div>
          <div className="form form--login">
            <div className="form--heading">Welcome back! </div>
            <form autocomplete="off">
              <input type="text" placeholder="Name" />
              <input type="password" placeholder="Password" />
              <button className="button">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
