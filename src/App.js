import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Meals from "./components/Meals";
import Addmeals from "./components/Addmeals";
import LoginAdmin from "./components/LoginAdmin";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Meals} />
        <Route exact path="/login-admin" component={LoginAdmin} />
        <Route exact path="/admin-dashboard" component={Dashboard} />
        <Route exact path="/orders" component={Dashboard} />
        <Route exact path="/menu-update" component={Addmeals} />
      </Switch>
    </div>
  );
}

export default App;
