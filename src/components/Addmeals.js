import React, { Component } from "react";
import axios from "axios";
import "../static/css/Addmeal.css";
export default class Addmeals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      price: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    const { title, description, price } = this.state;
    axios
      .post("http://localhost:5000/api/meals", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="addmeal-main">
        <div className="card-addmeal">
        <h1>ADD MEAL </h1>
          <form onSubmit={this.submitHandler}>
            <div>
              <input
                type="text"
                placeholder="Starter/Break/Lunch/Desert" name="title"
                value={this.state.title}
                onChange={this.changeHandler}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Description" name="description"
                value={this.state.description}
                onChange={this.changeHandler}
              />
            </div>
            <div>
              <input
                type="number" min="1"
                placeholder="Price (GH₵)" name="price"
                value={this.state.price}
                onChange={this.changeHandler}
              />
            </div>
            <input type="submit" value="ADD TO MENU" />
          </form>
        </div>
      </div>
    );
  }
}
