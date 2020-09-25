import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import { Link } from "react-router-dom";
import {Navbar,Modal, Button, Form, Card, ListGroup, Row, Col, ButtonGroup, Container, Nav, ButtonToolbar} from 'react-bootstrap';
import logoImage from '../../layout/images/nuttlylogoheader.png';

class Dashboard extends Component {
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
    <br>
       </br>
<br></br>   
    <br></br>  

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
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">

            <br>
            </br>
            <br></br>
            <br></br>
            <br>
            </br>
            {/* <h4>
              // <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into {" "}
                <span style={{ fontFamily: "monospace" }}>Nuttly</span>
              </p>
            </h4> */}
      
            <Link
                to="/orders"
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
               Orders
              </Link>
          </div>
        </div>
      </div>
      </>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
