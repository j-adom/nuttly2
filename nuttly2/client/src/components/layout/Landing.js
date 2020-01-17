import React, { Component } from 'react';
import ProductList from '../../components/ProductList';
import { Route, Switch } from "react-router";
import { Link } from 'react-router-dom'

class Landing extends Component {
  render() {
    return (
      <div className="App">
        <main className="App-content">
          <Switch>
            <Route path="/" exact component={ProductList} />
            {/* <Route path="/product/:id" component={Product} /> */}
          </Switch>
        </main>
      </div >
    );
  }
}

export default Landing;
