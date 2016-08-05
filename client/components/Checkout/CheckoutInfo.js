import React, { Component } from 'react'
import CheckoutBreadcrumb from './breadcrumb'

export default class CheckoutInfo extends Component {
  render() {
    return(
      <div className="main col-xs-6">
        <div id="checkout-main">
          <div id="checkout-main-header">
            <CheckoutBreadcrumb />
          </div>
          <div id="main-content">
            <div className="stripe-payment-container">
              <button className="stripe-payment-button btn btn-warning">
                <span className="stripe-payment-text text-default ">Checkout with </span>
                <img src="client/styles/images/stripe_icon.png" alt="stripe" className="stripe-payment-logo"/>
              </button>
            </div>
            <div className="alternative-payment-method">
              <span className="alternative-payment-seperator"> OR </span>
            </div>
            <div className="customer-info-container">
              <h3 className="customer-info-title">Customer Information</h3>
              <input type="text" className="customer-info-email form-control"/>
            </div>
          </div>
          <div id="main-footer">
          </div>

        </div>
      </div>
    )
  }
}
