import React, { Component } from 'react'
import CheckoutBreadcrumb from './breadcrumb'

export default class CheckoutInfo extends Component {
  render() {
    return(
      <div className="main col-xs-7">
        <div id="checkout-main">
          <div id="checkout-main-header">
            <CheckoutBreadcrumb />
          </div>
          <div id="main-content">
            
          </div>
          <div id="main-footer">
          </div>

        </div>
      </div>
    )
  }
}
