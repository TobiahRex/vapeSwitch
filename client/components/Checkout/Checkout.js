import React, { Component } from 'react'
import { Link } from 'react-router'
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

        <div className="sidebar col-xs-5">
          <div className="sidebar_header"></div>
          <div className="sidebar_content">
            <div className="order-summary">
              <h2>Order Summary</h2>
              <div className="order-summary-sections">
                <div className="order-summary-products">
                  <div className="order-summary-section-content">
                    <table>
                      <caption>Checkout Cart</caption>
                      <thead>
                        <tr className="visually-hidden">
                          <th className="visually-hidden">Image</th>
                          <th className="visually-hidden">Description</th>
                          <th className="visually-hidden">Quantity</th>
                          <th className="visually-hidden">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="order-summary-product-row">
                          <td className="order-summary-product-image">image here</td>
                          <td className="order-summary-product-description">description</td>
                          <td className="order-summary-product-description">qty</td>
                          <td className="order-summary-product-description">price</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="order-summary-discount">
                  <form className="order-summary-discount-form form-group" action="">
                    <div className="order-summary-discount-input col-xs-6">
                      <input className="form-control" type="text" placeholder="Discount" id="checkout-reduction code"/>                      
                    </div>
                    <div className="order-summary-discount-apply-button col-xs-6">
                      <button className="form-control order-summary-discount-apply btn btn-default">Apply</button>
                    </div>
                  </form>
                </div>
                <div className="order-summary-total"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
