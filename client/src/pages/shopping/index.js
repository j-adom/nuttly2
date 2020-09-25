
import React, { Component } from "react";
import API from "../../utils/API";

class Shopping extends Component {
  state = {
    products: [],
  };

  componentDidMount(){
      this.getProducts()
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


  render() {
    return (
        <div>
            {
                this.state.products.map(product=>(
                    <div>
                        {product.name}
                    </div>
                ))
            }
        </div>
    );
 
}
}

export default Shopping;
