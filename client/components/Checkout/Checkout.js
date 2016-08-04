import React, { Component } from 'react'
import { Link } from 'react-router'
// TODO Implement Guest checkout option

// TODO Order Progress Bar
// TODO Billing Information
// TODO Shipping Information
// TODO Payment Information
// TODO Order Review
// TODO Order Success Page

export default class Checkout extends Component {
  render() {
    return (
    )
  }
}
<div className="wrapper">
  <div className="main">
    <div id="checkout-main">
      <div id="main-header">
        <ul className="list-unstyled list-inline">
          <li className="breadcrumb__item breadcrumb__item--completed">
            <Link className="breadcrumb__link" to="cart">Cart</Link>
          </li>
          <li className='text-info breadcrumb-arrow'> > </li>
          <li className="breadcrumb__item breadcrumb__item--current">
            Customer information >
          </li>
          <li className='text-info breadcrumb-arrow'> > </li>
          <li className="breadcrumb__item breadcrumb__item--blank">
            Shipping method >
          </li>
          <li className='text-info breadcrumb-arrow'> > </li>
          <li className="breadcrumb__item breadcrumb__item--blank">
            Payment method
          </li>
        </ul>
      </div>
      <div id="main-content">

      </div>
      <div id="main-footer">

      </div>
    </div>
  </div>

  <div className="sidebar">
    <div className="sidebar_header"></div>
    <div className="sidebar_content">
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="order-summary-products"></div>
        <div className="order-summary-discount"></div>
        <div className="order-summary-total"></div>
      </div>
    </div>
  </div>


</div>
