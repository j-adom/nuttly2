//Jordan wrote this
//Need to update with correct api addresses not localhost

import React, { Component } from 'react';
import API from "../actions/storeActions";
import BuyButton from './BuyButton';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, product: {} }
  }

  async componentDidMount() {
    let id = this.props.match.params.id
    let response = await API.getProduct(id)
    let data = await response.json()
    this.setState({
      loading: false,
      product: data
    })
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="product">
          <div className="product__information">
            <h2 className="Product-title">{this.state.product.name}</h2>
            <img src={`http://localhost:1337${this.state.product.imageURL}`} 
                 alt={`${this.state.product.name}`}
            />
            <BuyButton {...this.state} />
          </div>
          <div className="product__description">
            {this.state.product.description}
          </div>
        </div>
      );
    }

    return (<h2>Waiting for API...</h2>);
  }
}

export default Product;