//Jordan wrote this
//Need to update with correct api addresses not localhost

import React, { Component } from 'react';
import API from "../actions/storeActions";
import { ListGroup,Modal,Button,Card} from "react-bootstrap";
import BuyButton from './BuyButton';

export default class Product extends Component {
  constructor(props) {
    super(props)
  }
  //   this.state = { loading: true, product: {} }
  // }

  // async componentDidMount() {
  //   let id = this.props.match.params.id
  //   let response = await API.getProduct(id)
  //   let data = await response.json()
  //   this.setState({
  //     loading: false,
  //     product: data
  //   })
  // }

  state = {
    show: false
  };


  handleClose = () => {this.setState({show:false})}
  handleShow = () => {
    console.log('called ')  
    this.setState({show:true})
  }

 
  render() {
      return (
    // <div className="product">
        //   <div className="product__information">
        //     <h2 className="Product-title">{this.props.product.name}</h2>
        //     <img src={`http://localhost:5000${this.props.product.imageURL}`} 
        //          alt={`${this.props.product.name}`}
        //     />
        //     <BuyButton {...this.props} />
        //   </div>
        //   <div className="product__description">
        //     {this.state.product.description}
        //   </div>
      
       <div className="ProductList-product" key={this.props.product.id}>
                  <Button variant='link' id={this.props.product.id} onClick={this.handleShow}>
                    <h3>{this.props.product.name}</h3>
                    <img src={this.props.product.imageURL} alt={this.props.product.name} /> 
                  </Button>
               <BuyButton product={this.props.product} />
          

          <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.product.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    {this.props.product.description}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
            </Modal>
        </div>
      );
  
  }
}
