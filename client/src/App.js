import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Product from "./components/Product";
import Register from "./components/admin/auth/Register";
import Login from "./components/admin/auth/Login";
import PrivateRoute from "./components/admin/private-route/PrivateRoute";
import Dashboard from "./components/admin/dashboard/Dashboard";
import Orders from "./components/admin/orders/Orders";
import Landingpage from"./pages/landing/index"
import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
          {/* <Navbar/> */}
          <Route exact path="/" component={Landing} />
            
            <Route exact path="/product/:id" component={Product} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/test" component={Landingpage}/>
            {/* <Route exact path="/orders" component={Orders}></Route> */}
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/orders" component={Orders} />
            </Switch>
      
          </div>
         
        </Router>
      </Provider>
    );
  }
}
export default App;
