import React, { Component } from 'react'
import { Link } from 'react-router'
import CheckoutSummary from './CheckoutSummary'
import CheckoutInfo from './CheckoutInfo'

// TODO Implement Guest checkout option


// TODO Billing Information
// TODO Shipping Information
// TODO Payment Information

// TODO Order Success Page

function getComponentState(){
  return { cart: CartStore.getCart() };
}

export default class Checkout extends Component {
  constructor(props){
    super(props)

    this.state = {
      info: {},
      cart: getComponentState();
    }
    this._onChange() = this._onChange.bind(this);
  }

  componentDidMount(){
    CartStore.on('CHANGE', this._onChange());
    CartActions.getCart();
  }

  _onChange(){
    this.setState(getComponentState());
  }

  render() {
    return (
      <div className="checkout-wrapper row">
        <CheckoutInfo checkoutInfo={this.state.info}/>
        <CheckoutSummary />
      </div>
    )
  }
}
