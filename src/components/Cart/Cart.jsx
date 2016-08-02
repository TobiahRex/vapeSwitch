import React, { Component } from 'react'

import CartTable from './CartTable.jsx'

export default class Cart extends Component {
  render() {
    return (
      <div className="container">
        <h1>Cart</h1>
        <CartTable />        
      </div>
    )
  }
}
