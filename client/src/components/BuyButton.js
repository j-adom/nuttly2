//Jordan wrote this
//Need to update with correct api addresses not 'snipcart-strapi.heroku etc
//Also needs subscription related data-items and delivery day logic
//How do we enforce delivery zip codes?
import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
class BuyButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.product._id,
            name: props.product.name,
            price: props.product.price,
            weight: props.product.weight,
            description: props.product.description,
            url: '/api/products/'+props.product.id
        }
    }

    render() {
        return (
            <Button
                className="snipcart-add-item BuyButton"
                data-item-id={this.state._id}
                data-item-name={this.state.name}
                data-item-price={this.state.price}
                data-item-url={this.state.url}
                data-item-description={this.state.description}
                data-item-payment-interval="Week"
                data-item-payment-interval-count="1">
                ADD TO CART ({this.state.price}$)
            </Button>
        );
    }
}

export default BuyButton;