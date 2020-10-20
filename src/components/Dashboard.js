import React, { Component } from "react";
import { Link } from "react-router-dom";
import auth from "../auth";
import "../static/css/Dashboard.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clientorder: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/admin/dashboard/orders")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          clientorder: data,
        });
        console.log(this.state.clientorder);
      });
  }
  render() {
    console.log(this.state.clientorder);
    return (
      <div className="dashboard">
        <header>
          <div className="nav-container">
            <nav className="navbar">
              <h1>ADMIN </h1>
              <ul>
                <li>
                  <Link to={"/orders"}>Orders</Link>
                </li>
                <li>
                  <Link to={"/"}>Meals</Link>
                </li>
                <li>
                  <Link to={"menu-update"}>Update menu</Link>
                </li>
                <li>
                  <Link to={"login-admin"}>
                    <div>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        class="bi bi-door-closed"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z"
                        />
                        <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
                      </svg>
                    </div>
                  </Link>
                </li>
                <li></li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="main">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>FIRSTNAME</th>
                <th>SURNAME</th>
                <th>PHONE</th>
                <th>LOCATION</th>
                <th>ADDRESS</th>
                <th>MEAL</th>
                <th>PRICE (GH₵)</th>
              </tr>
            </thead>
            <tbody>
              {this.state.clientorder.map((clientorder) => (
                <tr key={clientorder.id}>
                  <td></td>
                  <td>{clientorder.firstname}</td>
                  <td>{clientorder.surname}</td>
                  <td>{clientorder.phone}</td>
                  <td>{clientorder.location}</td>
                  <td>{clientorder.address}</td>
                  <td>{clientorder.meal}</td>
                  <td>{clientorder.price}</td>
                </tr>
              ))}
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
