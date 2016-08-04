import React, { Component } from 'react'
import CartStore from '../../stores/CartStore.js'
const uuid = require('uuid');

export default class CartTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: CartStore.getCart(),
    }
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
    console.log('this.state.items: ', this.state.items);
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
