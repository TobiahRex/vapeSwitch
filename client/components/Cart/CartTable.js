import React, { Component } from 'react'

const uuid = require('uuid');

// import CartStore from '../../src/stores/CartStore.js'

function _getComponentState() {
  return {
    // items: CartStore.getItems(),
  }
}

export default class CartTable extends Component {

  constructor(props) {
    super(props);

    this.state = _getComponentState();
    this.generateItems = this.generateItems.bind(this);
    this.subTotal = this.subTotal.bind(this);
  }

  generateItems() {
    if (!this.state.items) return (<tr className="lead">Your Cart is Empty</tr>);
    const items = this.state.items.map(stateItem => {
      const item = stateItem
      const id = uuid();
      item[uuid] = id;
      return (
        <tr key={item.uuid}>
          <td>{item.description}</td>
          <td>{item.quantity}</td>
          <td>{item.price}</td>
          <td>{this.subTotal(item.quantity, item.price)}</td>
        </tr>
      )
    })
    return items;
  }

  subTotal(qty, price) {
    if (!qty || !price) return ('Quantity or Price is Empty.');
    return `$ ${qty * price}`;
  }

  render() {
    let items = this.generateItems();
    return (
      <table className="table table-striped table-hover ">
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Product</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Price</th>
            <th className="text-center">Sub Total</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
    )
  }
}
