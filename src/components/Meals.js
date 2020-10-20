import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../static/css/Meals.css";
import axios from 'axios'
export default class Meals extends Component {
  constructor() {
    super();
    this.state = {
      foodavailable: [],
      orders: [],
      total: 0,
      firstname:"",
      surname:"",
      phone:"",
      location:"",
      address:"",

    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);

    const data = {
      firstname: this.state.firstname,
      surname: this.state.surname,
      location: this.state.location,
      phone:this.state.phone,
      address: this.state.address,
      meal: this.state.orders[0]['meal'],
      price: this.state.orders[0]['price']
    }
    console.log(data)

    alert('Your order: '+data.meal+' will be delivered to you soon. Kindly pay on delivery.')
    
    axios
      .post("http://localhost:5000/api/admin/dashboard/orders", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  componentDidMount() {
    fetch("http://localhost:5000/api/meals")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          foodavailable: data,
        });
        console.log(this.state.foodavailable);
      });
  }
  addHandler(meal, price) {
    const item = { meal: meal, price: price };
    this.setState({
      orders: [...this.state.orders, item],
      total: this.state.total + price,
    });

    console.log(this.state.orders);
  }
  getSum(total) {
    // return total.reduce(function(sum, value) {
    //     return sum + value;
    // });
  }
  render() {
    console.log(this.state.foodavailable);
    return (
      <div>
        <header className="home-header">
          <div className="home-nav-container">
            <div className="home-logo">
              <h1>QwikChop </h1>
            </div>
            <div className="home-navbar">
              <ul className="home-nav-ul">
                <li>
                  <Link to={"/"}>HOME</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <main className="home-main">
          <div className="home-menu-catergory"></div>
          <table>
            <thead>
              <tr>
                <th>
                  <h4>Menu</h4>
                </th>
                <th>ITEM</th>
                <th>PRICE (GH₵)</th>
                <th>ORDER</th>
              </tr>
            </thead>
            <tbody>
              {this.state.foodavailable.map((foodavailable) => (
                <tr key={foodavailable.id}>
                  <td>
                    <strong>{foodavailable.title}</strong>
                  </td>
                  <td>{foodavailable.description}</td>
                  <td>{foodavailable.price}</td>
                  <td>
                    <button
                      onClick={() =>
                        this.addHandler(
                          foodavailable.description,
                          foodavailable.price
                        )
                      }
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-plus-circle"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="home-menu"></div>
          <div className="home-cart">
            <div className="order-title">
              Your Order
              <i>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-cart4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                  />
                </svg>
              </i>
            </div>
            <table className="table-table_summary">
              <tbody>
                {this.state.orders.map((orders) => (
                  <tr key={orders.id}>
                    <td>
                      <a href="#0">
                        <i className="pull-left">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            class="bi bi-dash-circle"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                            />
                          </svg>
                        </i>
                      </a>
                    </td>
                    <td>{orders.meal}</td>
                    <td>
                      <strong>{orders.price}</strong>
                    </td>
                  </tr>
                ))}
                
                <tr className="total">
                  <td></td>
                  <td>Total</td>
                  <td>GH₵{this.state.total}</td>
                  <td>
                    <button> Order</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <form onSubmit={this.submitHandler}>
              <h4> Delivery Details</h4>
            <input placeholder="First name" name="firstname" value={this.state.firstname} onChange={this.changeHandler}/>
            <input placeholder="Surname" name="surname"  value={this.state.surname} onChange={this.changeHandler}/>
            <input type="text" maxlength="10" placeholder="Phone" name="phone"  value={this.state.phone} onChange={this.changeHandler}/>
            <input placeholder="Location" name="location" value={this.state.location} onChange={this.changeHandler}/>
            <input placeholder="Address" name="address" value={this.state.address} onChange={this.changeHandler}/>
            <input type="submit" value=" Order"/>
            </form>
          </div>
        </main>
      </div>
    );
  }
}
