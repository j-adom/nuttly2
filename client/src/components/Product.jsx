//Jordan wrote this
//Need to update with correct api addresses not localhost

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from "../actions/storeActions";
import {Navbar, ButtonToolbar,Col,Row,ListGroup,Modal,Button,Card,Container,CardHeadery} from "react-bootstrap";
import BuyButton from './BuyButton';
// import logoImage from './images/nuttlylogoheader.png';
import logoImage from './layout/images/nuttlylogoheader.png';
import {Landing} from './layout/Landing'

// export default class Product extends Component {
//   constructor(props) {
//     super(props)
//   }
//   //   this.state = { loading: true, product: {} }
//   // }

//   // async componentDidMount() {
//   //   let id = this.props.match.params.id
//   //   let response = await API.getProduct(id)
//   //   let data = await response.json()
//   //   this.setState({
//   //     loading: false,
//   //     product: data
//   //   })
//   // }
//   state = {
//     product: {}
//   };
//   // When this component mounts, grab the book with the _id of this.props.match.params.id
//   // e.g. localhost:3000/books/599dcb67f0f16317844583fc
//   componentDidMount() {
//     API.getProduct(this.props.match.params.id)
//       .then(res => this.setState({ product: res.data }))
//       .catch(err => console.log(err));
//   }

//   // state = {
//   //   show: false
//   // };


//   // handleClose = () => {this.setState({show:false})}
//   // handleShow = () => {
//   //   console.log('called ')  
//   //   this.setState({show:true})
//   // }

 
//   render() {
//       return (
//         <div className="product">
//           <div className="product__information">
//             <h2 className="Product-title">{this.state.product.name}</h2>
//             <img src={`${this.state.product.imageURL}`} 
//                  alt={`${this.state.product.name}`}
//             />
//             <BuyButton {...this.props} />
//           </div>
//           <div className="product__description">
//             {this.state.product.description}
//         </div>
      
//        {/* <div className="ProductList-product" key={this.props.product.id}>
//                   <Button variant='link' id={this.props.product.id} onClick={this.handleShow}>
//                     <h3>{this.props.product.name}</h3>
//                     <img src={this.props.product.imageURL} alt={this.props.product.name} /> 
//                   </Button>
//                <BuyButton product={this.props.product} />
          

//           <Modal show={this.state.show} onHide={this.handleClose}>
//                     <Modal.Header closeButton>
//                         <Modal.Title>{this.props.product.name}</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                     {this.props.product.description}
//                     </Modal.Body>
//                     <Modal.Footer>
//                         <Button variant="secondary" onClick={this.handleClose}>
//                             Close
//                         </Button>
//                     </Modal.Footer>
//             </Modal>
//         */}
//         </div>
//       );
export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
       product: {} 
    }
  }

  componentDidMount() {
        API.getProduct(this.props.match.params.id)
          .then(res => {
            this.setState({ product: res.data })
            console.log(res.data)
          })
          .catch(err => console.log(err));
  }
  
  render() {
    if (!this.state.loading) {
      return (
        <>
        <Navbar fixed="top" expand="lg" className="colorEvent justify-content-between shadow p-3 mb-5 bg-white rounded-flex p-2">
        <div className="events">
        </div>
        <div className="containerCount">
          <div className="header">
            <Link to="/">

            <img src={logoImage}
              width="338"
              height="88"
              className="pr-2"
              alt="">
            </img>
            </Link>
          </div>
        </div>
        <ButtonToolbar>
          {/* <Button  className="RegistrationModal" onClick={this.handleShowRegistrationModal}>Registration Modal</Button> */}

         

        </ButtonToolbar>
      </Navbar>
        <br>
        </br>
        <br></br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
          <div className="product__information">
            <Card>
            <Container> 
         <Row> 
        <Col><h2 className="Product-title">{this.state.product.name}</h2>
        </Col> 
        <Col>  <Button
                className="snipcart-add-item BuyButton"
                data-item-id={this.state.product._id}
                data-item-name={this.state.product.name}
                data-item-price={this.state.product.price}
                data-item-url={this.state.product.url}
                data-item-description={this.state.product.description}
                data-item-payment-interval="Week"
                data-item-payment-interval-count="1">
                ADD TO CART ({this.state.product.price}$)
            </Button>
            </Col>
            </Row> 
          <Row> <Col> <img src={`https://lit-crag-95157.herokuapp.com/${this.state.product.imageURL}`} height="200px" className="thumbnail" />
          
          </Col>
          <Col> <div className="product__description">
            {this.state.product.description}
          </div>
          </Col>
          </Row>
          
          
          
          </Container>
          </Card>
        </div>
        </>
      );
    }  
    return (<h2>Waiting for API...</h2>);
  }
}


