import React, { Component } from "react";
import { Link } from "react-router-dom";

class Orders extends Component {
    render() {
      return (
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                {" "}
                <span style={{ fontFamily: "monospace" }}>Orders for Delivery</span>
              </h4>
                <br />
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
                Orders
              </Link></h2>
              </div>
            </div>
          </div>
      );
    }
  }
  
  export default Orders;
  