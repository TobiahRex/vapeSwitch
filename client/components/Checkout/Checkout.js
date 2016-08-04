import React, { Component } from 'react'
import { Link } from 'react-router'
import CheckoutSummary from './CheckoutSummary'


// import CartTable from '../Cart/'
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
      <div className="wrapper row">
        <div className="main col-xs-7">
          <div id="checkout-main">
            <div id="checkout-main-header">
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
        <CheckoutSummary />
      </div>
    )
  }
}
