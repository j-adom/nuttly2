import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Modal, Button, Form, Card, ListGroup, CardDeck, Row, Col, ButtonGroup, Container, Nav, ButtonToolbar} from 'react-bootstrap';
import ProductList from '../../components/ProductList';
import { Route, Switch } from "react-router";
// import { Link } from 'react-router-dom'

class Landing extends Component {
  

  
  constructor() {
    super();
    this.state = {
      showLoginForm: false,
    showRegistrationModal: false,
      email: "",
      password: "",
      errors: {},
      error: null
    };
  }
  handleCloseLoginForm  = event => {
    this.setState({showLoginForm: false});
//
   };
 
   handleShowLoginForm  = event => {
     this.setState({showLoginForm: true});
    };
 
   handleCloseRegistrationModal  = event => {
    this.setState({showRegistrationModal: false});
   };
 
   handleShowRegistrationModal  = event => {
     this.setState({showRegistrationModal: true, showLoginForm: false});
   };
 
   
   

  


  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    
    const { errors } = this.state;

    return (
      <>
    <Navbar fixed="top" expand="lg" className="colorEvent justify-content-between shadow p-3 mb-5 bg-white rounded-flex p-2">
      
        
        
        
         
          <div className="events">
          
           </div>    
                <div className="containerCount">
                
          <div className="header">
            Nuttly
          </div>
          
          
          
            
           
       
           </div>     
          <ButtonToolbar>
            {/* <Button  className="RegistrationModal" onClick={this.handleShowRegistrationModal}>Registration Modal</Button> */}
            

            
            <Button className="eventButtonLogin" onClick={this.handleShowLoginForm}>Login</Button>
           
            
            </ButtonToolbar>


        
         
          
      </Navbar>
      <br></br>
      <br></br>
      <div className="App">
        <main className="App-content">
          <br></br>
          <Switch>
            <Route path="/" exact component={ProductList} />
            {/* <Route path="/product/:id" component={Product} /> */}
          </Switch>
        </main>
      </div >
 
    <Modal show={this.state.showLoginForm} onHide={this.handleCloseLoginForm}>
    <Modal.Header className="modalHeader" closeButton>
  
            <div style={{ textAlign: "center" }}></div>
      <Modal.Title>  <h4> <b>Login</b> below</h4></Modal.Title>
    </Modal.Header>
    <div className="col md-6" style={{ paddingLeft: "11.250px" }}>
              
          
              <p className="grey-text text-darken-1"
           className="RegistrationModal" onClick={this.handleShowRegistrationModal}>Registration Modal
                {/* Don't have an account? <Link to="/register">Register</Link> */}
             
              </p>
            </div>
    <Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
        <Form className="modalBody">

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control noValidate onSubmit={this.onSubmit}
             
                
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control   noValidate onSubmit={this.onSubmit}   
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
               
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              
        </Form.Group>
        <form noValidate onSubmit={this.onSubmit}>
   
              <Button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </Button>
              {/* </div> */}
            </form>

      

      </Form>
    </Modal.Body>

  
    </Modal>

    <Modal show={this.state.showRegistrationModal} onHide={this.handleCloseRegistrationModal}>
    <Modal.Header className="modalHeader" closeButton>
      <Modal.Title>nuttlyproducts</Modal.Title>
    </Modal.Header>
  
    <Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
      <Card>
        <Card.Body>
          <Card.Title>Registration modal</Card.Title>
            <ListGroup variant="flush">
              
              <ListGroup.Item>
                <b>Description:</b> content
              </ListGroup.Item>
            </ListGroup>
        </Card.Body>
      </Card>
          
    </Modal.Body>
  
    <Modal.Footer className="modalFooter">
      <Button variant="Registrationary" onClick={this.handleCloseRegistrationModal} >Close</Button>
    </Modal.Footer>
    </Modal>
    {/* <CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck> */}
    
    
      </>
    );
  }
}


Landing.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Landing);
