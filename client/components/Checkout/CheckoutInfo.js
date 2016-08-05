import React, { Component } from 'react'
import { Link } from 'react-router'
import Breadcrumb_cart from './breadcrumb_cart'
import CountrySelector from './countrySelector'
import StateSelector from './StateSelector'

export default class CheckoutInfo extends Component {
  render() {
    return(
      <div className="main col-xs-6">
        <div id="checkout-main">
          <div id="checkout-main-header">
            <Breadcrumb_cart />
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
              <input type="email" className="customer-info customer-info-email form-control" placeholder="Email" required/>
              <h5>Already have an account with us? <span className="text-success" id="custom-info-login-redirect"> Log in</span> </h5>

              <h3 className="customer-info-title">Shipping Address</h3>
              <div className="form-group">
                <input type="text" className="customer-info custom-info-firstname form-control" placeholder="First name" required/>

                <input type="text" className="customer-info custom-info-lastname form-control" placeholder="Last name" required/>

                <input type="text" className="customer-info custom-info-company form-control" placeholder="Company (optional)"/>

                <input type="text" className="customer-info custom-info-address form-control" placeholder="Address" required/>

                <input type="text" className="customer-info custom-info-apt form-control" placeholder="Apt, suite, etc. (optional)"/>

                <input type="text" className="customer-info custom-info-city form-control" placeholder="City" require/>

                <CountrySelector />

                <StateSelector />

                <input type="text" className="customer-info custom-info-zip form-control" placeholder="Zip code" required/>

                <input type="text" className="customer-info customer-info-phone form-control" placeholder="Phone (optional)"/>

                <div className="checkbox-wrapper">
                  <div className="checkbox-input">
                    <input id="saveinfo-checkbox" type="checkbox" className="saveinfo-checkbox"/>
                    <label htmlFor="saveinfo-checkbox" className="checkbox-label">
                      Save this information for next time.
                    </label>
                  </div>
                </div>

                <Link to="shipping">
                  <button className="to-shipping-method-button col-xs-12 btn btn-lg btn-warning">
                    Continue to shipping method
                  </button>
                </Link>

              </div>
            </div>
          </div>
          <div id="main-footer">
          </div>
        </div>
      </div>
    )
  }
}
