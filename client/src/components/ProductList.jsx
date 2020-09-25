//Jordan wrote this
//Need to update with correct api addresses not 'snipcart-strapi.heroku etc
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from "../actions/storeActions";
import { ListGroup, Modal, Button, Card, CardDeck, Container, Jumbotron, Col, Row } from "react-bootstrap";
import BuyButton from './BuyButton';
import Product from './Product';
import logoImage from './layout/images/nuttlylogoheader.png'
import "../App.css"
import ModalHeader from 'react-bootstrap/ModalHeader';


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
    openedModal: null
    // show:false
  };

  componentDidMount() {
    this.getProducts()
  };

  // handleCloseproduct = () => {this.setState({show:false})}
  // handleShowproduct= () => {
  //   console.log('called ')  
  //   this.setState({show:true})
  // }

  getProducts = () => {
    API.getProducts()
    // .then(res => res.json())
   
      .then(res =>
        this.setState({
          products: res.data,
          openedModal: null
        })
        
      )
      .catch(() =>
        this.setState({
          products: [],
          message: "No items found!"
        })
      );
      console.log(this.state)
  };
  handleShowProduct1 = event => {
    this.setState({ showProductModal: true });
  };
  handleCloseProduct = event => {
    this.setState({ showProductModal: false });
  };
  handleShowProduct2 = event => {
    this.setState({ showProductModal2: true });

  };
  handleShowProduct3 = event => {
    this.setState({ showProductModal3: true });

  };
  
  // renderModal= ({ id, description, imageURL, price }) => <tr key={id}><td>{id}</td><td>{description}</td><td>{name}</td><td>{price}</td></tr>
  openModal = _id => {
    this.setState({ openedModal: _id });
  };
  closeModal = () => {
    this.setState({ openedModal: null });
  };

  //creates list of existing products, need to add correct address here
  render() {
    const { products, product } = this.state;
    if (!this.state.loading) {
      console.log(products)
      return (
        
        <div className="ProductList">
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            {/* ----------------------------------------------------------------------this is how you call the products information------------------ */}
          {/* <h2 className="ProductList-title">Available Products ({this.state.products.length})</h2>
         */}
          <div className="ProductList-container">
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <Container>

              <br></br>
              <br></br>
              <CardDeck>

                {this.state.products.map((product, index) => {

                  return (


                    <Card className="shadow-lg" align="center">
                      <div className="ProductList-product" key={product._id}>
              
            <Modal size="xl" align="center" show={this.state.openedModal === product._id} fade="false" onHide={this.closeModal} >
                        <div style={{ textAlign: "center" }}></div>
                        <Card className=" p-1 shadow-lg" align="center">
            <Container align="center"> 
                        <Modal.Header className="modalHeader" closeButton>


<Modal.Title align="center">
  <img src={logoImage}
    width="168"
    height="44"
    className="pr-2"
    alt="">
  </img>   
  </Modal.Title>
  
</Modal.Header>
<Row><Col align="left">
<h3 align="center">{product.name}</h3>


</Col>
</Row>
<Row >
  <Col></Col>
<div className="mx-auto">
 <img image alt={product.name}  display=" block"
 
  width= "60%" align="center" src={`https://lit-crag-95157.herokuapp.com/${product.imageURL}`} className="thumbnail shadow-lg p-3 bg-white rounded"></img>
</div>
 </Row>

 <Row>


            {product.description}
           
            </Row>
          <Button align="center"
       
                className="snipcart-add-item BuyButton"
                data-item-id={product._id}
                data-item-name={product.name}
                data-item-price={product.price}
                data-item-url={product.url}
                data-item-description={product.description}
                data-item-payment-interval="Week"
                data-item-payment-interval-count="1">
                ADD TO CART ({product.price}$)
            </Button>
           
           
          
              
            </Container> 
            </Card>
                        </Modal> 
{/*                 <Link to={`/product/${product._id}`}>

                        <h2>{product.name}</h2>
                        </Link> */}
                    
          
                        <h3>{product.name}</h3>
                   
                      
                    <Button size="sm" color="danger" onClick={() => this.openModal(product._id)}>
          Nutrition Info
            </Button>
                        {/* <Button className={this.props.className} className="event  m-1" onClick={() => this.setState({ showProductModal: true })}>{product.name}</Button> */}
                        <Card.Img src={`https://lit-crag-95157.herokuapp.com${product.imageURL}`} alt={product.name} height="330px" className="thumbnail shadow-lg p-3 mb-4 bg-white rounded" />
                      
                        <BuyButton product={product} />
                        <br></br>
                        {/* <Button onClick={() => this.setState({ showModal: true })}>Add an Item(Bike)</Button>
                        <Modal align="center" isOpen={this.state.showModal} fade="false" toggle={() => this.setState({ showModal: false })}>
                        <div style={{ textAlign: "center" }}>  <h2>{product.name}</h2></div>
                        </Modal> */}
                      </div>
                    </Card>


                  );

                })}


              </CardDeck>
            </Container>
         
          </div>
          {/* <Modal show={this.state.handleshowproduct} onHide={this.handlecloseproduct}>
          
          hi</Modal> */}
          {/* <Modal show={this.state.handleShowproduct} onHide={this.handleCloseproduct}>
        <h3>testing</h3>
          </Modal> */}

        </div>
        
      )
    };


    return (<h2 className="ProductList-title">Waiting for API...</h2>);
  }

}

export default ProductList;