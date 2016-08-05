import React, { Component } from 'react'
import { Link } from 'react-router'
import CheckoutSummary from './CheckoutSummary'
import CheckoutInfo from './CheckoutInfo'

// TODO Implement Guest checkout option


// TODO Billing Information
// TODO Shipping Information
// TODO Payment Information

// TODO Order Success Page

export default class Checkout extends Component {
  render() {
    return (
      <div className="checkout-wrapper row">
        <CheckoutInfo />
        <CheckoutSummary />
      </div>
    )
  }
}
