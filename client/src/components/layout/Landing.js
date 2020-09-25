import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser, registerUser } from "../../actions/authActions";
import {Link} from "react-router-dom";
import classnames from "classnames";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Modal, Button, Form, Card, ListGroup, CardDeck, Row, Col, ButtonGroup, Container, Nav, ButtonToolbar } from 'react-bootstrap';
import ProductList from '../../components/ProductList';
import { Route, Switch } from "react-router";
import logoImage from './images/nuttlylogoheader.png';
import Product from '../../components/Product';
import "../../App.css"
class Landing extends Component {



  constructor() {
    super();
    this.state = {


      showLoginForm: false,
      showRegistrationModal: false,
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
      error: null
    };
  }
  handleCloseLoginForm = event => {
    this.setState({ showLoginForm: false });
    //
  };

  handleShowLoginForm = event => {
    this.setState({ showLoginForm: true });
  };

  handleCloseRegistrationModal = event => {
    this.setState({ showRegistrationModal: false });
  };

  handleShowRegistrationModal = event => {
    this.setState({ showRegistrationModal: true, showLoginForm: false });
  };

handleShowProduct = event => {
  this.setState({ showProductModal: true});
};
handleCloseProduct = event => {
  this.setState({showProductModal: false});
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
  DemoUserLogin = e => {
    e.preventDefault();
    console.log("demo was clicked")
    const userData = {
      email: "james12345@gmail.com",
      password: "james1234"
    }
    this.props.loginUser(userData);
  }

    onSubmit = e => {
      e.preventDefault();
  console.log("this was clicked")
      const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
      };

      this.props.registerUser(newUser, this.props.history);
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
              <img src={logoImage}
                width="338"
                height="88"
                className="pr-2"
                alt="">
              </img>
            </div>
          </div>
          <ButtonToolbar>
            {/* <Button  className="RegistrationModal" onClick={this.handleShowRegistrationModal}>Registration Modal</Button> */}

            <Button className="eventButtonDelivery m-1" onClick={this.DemoUserLogin}>Demo</Button>
            <Button className="eventButtonLogin m-1" onClick={this.handleShowLoginForm}>Login</Button>

          </ButtonToolbar>
        </Navbar>
        {/* --------------------------------------------------------------------------------------------- */}
        {/* <img src={ Background } />  */}
        {/* <Img src={Background} fluid /> */}

        <div className="App">
          <main className="App-content">
            <br></br>
            {/* <Container> */}
            {/* <CardDeck> */}

            <Switch>
              <Route path="/" exact component={ProductList} />
              {/* <Route path="/product/:id" component={Product} /> */}
            </Switch>
            {/* </CardDeck> */}
            {/* </Container> */}
            <br></br>
            <br></br>
          </main>

        </div >
        

      

        <Modal show={this.state.showLoginForm} onHide={this.handleCloseLoginForm}>
          <Modal.Header className="modalHeader" closeButton>

            <div style={{ textAlign: "center" }}></div>
            <Modal.Title align="center">
              <img src={logoImage}
                width="253"
                height="66"
                className="pr-2"
                alt="">
              </img>    <h4> <b>Login</b> below</h4></Modal.Title>
          </Modal.Header>
          <div className="col md-6" style={{ paddingLeft: "11.250px" }}>



          </div>
          <Modal.Body style={{ 'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto' }}>
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
                <Form.Control noValidate onSubmit={this.onSubmit}
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
              <form  align="center" noValidate onSubmit={this.onSubmit}>

                <Button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable orange accent-3"
                >
                  Login
                </Button>
                <br></br>
                {/* </div> */}
              </form>
<br>
</br>
              <div align="center"> Don't have an account?    
                    <Link size="sm" className=" RegistrationModal" onClick={this.handleShowRegistrationModal}> Click to Register here
                {/* Don't have an account? <Link to="/register">Register</Link> */}
              </Link>
</div>
            </Form>
          </Modal.Body>


        </Modal>

        <Modal show={this.state.showRegistrationModal} onHide={this.handleCloseRegistrationModal}>
          <Modal.Header className="modalHeader" closeButton>
            <Modal.Title><img src={logoImage}
              width="253"
              height="66"
              className="pr-2"
              alt="">
            </img> </Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ 'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto' }}>
            <Card>
              <Card.Body>

                <Form.Group>

                  <form noValidate onSubmit={this.onSubmit}>
                  <label htmlFor="name">Name</label>
                    <div className="input-field col s12">
                      <input
                        onChange={this.onChange}
                        value={this.state.name}
                        error={errors.name}
                        id="name"
                        type="text"
                        className={classnames("", {
                          invalid: errors.name
                        })}
                      />
                      
                      <span className="red-text">{errors.name}</span>
                    </div>
                    <label htmlFor="email">Email</label>
                    <div className="input-field col s12">
                      <input
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="email"
                        type="email"
                        className={classnames("", {
                          invalid: errors.email
                        })}
                      />
                      
                      <span className="red-text">{errors.email}</span>
                    </div>
                    <label htmlFor="password">Password</label>
                    <div className="input-field col s12">
                      <input
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors.password}
                        id="password"
                        type="password"
                        className={classnames("", {
                          invalid: errors.password
                        })}
                      />
                   
                      <span className="red-text">{errors.password}</span>
                    </div>
                    <label htmlFor="password2">Confirm Password</label>
                    <div className="input-field col s12">
                      <input
                        onChange={this.onChange}
                        value={this.state.password2}
                        error={errors.password2}
                        id="password2"
                        type="password"
                        className={classnames("", {
                          invalid: errors.password2
                        })}
                      />
                     
                      <span className="red-text">{errors.password2}</span>
                    </div>
                    <div>   
                    <Link size="sm" className=" RegistrationModal" onClick={this.handleShowRegistrationModal}> Forgot Password or Username? 
                {/* Don't have an account? <Link to="/register">Register</Link> */}
              </Link>
              </div>
                  </form>

                </Form.Group>
              </Card.Body>
            </Card>

          </Modal.Body>

          <Modal.Footer align="center" className="modalFooter">
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                      <Button
                        style={{
                          width: "150px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                          marginTop: "1rem"
                        }}
                        type="submit"
                        className="btn btn-large waves-effect waves-light hoverable orange accent-3"
                      >
                        Register
                </Button>
             
                    </div>
            {/* <Button variant="Registrationary" onClick={this.handleCloseRegistrationModal} >Close</Button> */}
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.showProductModal} onHide={this.handleCloseProduct}>
          <Modal.Header className="modalHeader" closeButton>

            <div style={{ textAlign: "center" }}></div>
            <Modal.Title align="center">
              <img src={logoImage}
                width="253"
                height="66"
                className="pr-2"
                alt="">
              </img>   </Modal.Title>
          </Modal.Header>
 
          <Modal.Body style={{ 'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto' }}>
            
          </Modal.Body>


        </Modal>


      </>
    );
  }
}



Landing.propTypes = {
  // registerUser: PropTypes.func.isRequired,
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
  { loginUser })
  (Landing);


