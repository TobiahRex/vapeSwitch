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
      <div id="checkout-main">
        <div id="main-header">

        </div>
        <div id="main-content">

        </div>
        <div id="main-footer">

        </div>
      </div>
    )
  }
}
<ul class="breadcrumb ">
    <li class="breadcrumb__item breadcrumb__item--completed">
      <Link class="breadcrumb__link" to="cart">Cart</Link>
    </li>
    <li class="breadcrumb__item breadcrumb__item--current">
      Customer information
    </li>
    <li class="breadcrumb__item breadcrumb__item--blank">
      Shipping method
    </li>
    <li class="breadcrumb__item breadcrumb__item--blank">
      Payment method
    </li>
</ul>
