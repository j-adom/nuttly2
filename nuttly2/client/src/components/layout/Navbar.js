import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="shadow p-3 mb-5 bg-white rounded-flex p-2">
          <div className="nav-wrapper white">
            
             
             
            {/* <Link 
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="col s7  right waves-effect white black-text"
              
              >
                Log In
              </Link> 
              <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col md-9 center black-text"
            >Nuttly
          
            </Link> */}
              
            
          </div>
          

        </nav>
      </div>
    )
  }
}

export default Navbar;
