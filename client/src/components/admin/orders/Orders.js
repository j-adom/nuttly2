import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../../actions/authActions";
import { Navbar, Modal, Button, Form, Card, ListGroup, CardDeck, Row, Col, ButtonGroup, Container, Nav, ButtonToolbar } from 'react-bootstrap';
import logoImage from '../../layout/images/nuttlylogoheader.png';


class Orders extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
    render() {
      const { user } = this.props.auth;
      return (
        <>
       
          <Navbar fixed="top" expand="lg" className="colorEvent justify-content-between shadow p-3 mb-5 bg-white rounded-flex p-2">
      <h3>Welcome: {user.name.split(" ")[0]}</h3>
      <div className="events" align="center">
      
       </div>    
            <div className="containerCount">

            <div  align="center" className="header">

<img src={logoImage}
  width="338"
  height="88"
  className="pr-2"
  alt="">
</img>

</div> 
            
      <div className="header">
        
      </div>
      
      
      
        
    </div> 
 
     

      <ButtonToolbar>
        

        
        <Button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                // marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </Button>       
        
        </ButtonToolbar>


    
     
      
  </Navbar>
  <div className="row">
            <div className="col center-align">
              <h4>
                {" "}
                <span style={{ fontFamily: "monospace" }}>Orders for Delivery</span>
              </h4>
               
                <h2><Link
                to="/dashboard"
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
              Dashboard
              </Link></h2>
              </div>
            </div>
          
          </>
      );
    }
  }
  Orders.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Orders);
  