//Jordan wrote this
//Need to update with correct api addresses not 'snipcart-strapi.heroku etc
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from "../actions/storeActions";
import { ListGroup,Modal,Button,Card} from "react-bootstrap";
import BuyButton from './BuyButton';
import Product from './Product';

class ProductList extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     loading: true,
  //     products: []
  //   }
  // }

  // async componentDidMount() {
  //   let response = await API.getProducts()
  //   if(!response.ok){
  //     return
  //   }

  //   let products = await response.json()
  //   this.setState({ loading: false, products: products })
  //   console.log(this.state.products[0])
  // }

  state = {
    products: [],
  };

  componentDidMount(){
      this.getProducts()
  };
      
  handleClose = () => {this.setState({show:false})}
  handleShow = () => {
    console.log('called ')  
    this.setState({show:true})
  }

  getProducts = () => {
    API.getProducts()
      .then(res =>
        this.setState({
          products: res.data
        })
      )
      .catch(() =>
        this.setState({
          products: [],
          message: "No items found!"
        })
      );
  };


  //creates list of existing products, need to add correct address here
  render() {
    if (!this.state.loading) {
      return (
        <div className="ProductList">
          <h2 className="ProductList-title">Available Products ({this.state.products.length})</h2>
          <div className="ProductList-container">
            {this.state.products.map((product, index) => {
              return (
                <Product
                  product = {product} key = {index}
                />

              );
            })}
          </div>


        </div>
      );
    }

    return (<h2 className="ProductList-title">Waiting for API...</h2>);
  }
}

export default ProductList;