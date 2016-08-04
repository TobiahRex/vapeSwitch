import React, { Component } from 'react'
import CartStore from '../../stores/CartStore.js'
const uuid = require('uuid');

export default class CartTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items
    }

    this.generateItems = this.generateItems.bind(this);
    this.subTotal = this.subTotal.bind(this);
  }

  generateItems() {
    if (!this.state.items) return (<tr className="lead">Your Cart is Empty</tr>);
    const items = this.state.items.map((stateItem, i) => {
      console.log('stateItem: ', stateItem);
      const item = stateItem;
      return (
        <tr key={uuid()}>
          <td>{i + 1}</td>
          <td>{item.title} {item.model}</td>
          <td>{item.quantity}</td>
          <td>{`\u00a9 ${item.newPrice}`}</td>
          <td>{this.subTotal(item.quantity, item.newPrice)}</td>
        </tr>
      )
    })
    console.log('items: ', items);
    return items;
  }

  subTotal(qty, price) {
    console.log('qty: ', qty, '\nprice: ', price);
    if (!qty || !price) return ('Quantity or Price is Empty.');
    return `$ ${qty * price}`;
  }

  render() {
    let items = this.generateItems();
    console.log('render items: ', items);
    return (
      <table className="table table-striped table-hover ">
        <thead>
          <tr>
            <th className="text-center text-success">#</th>
            <th className="text-center text-success">Product</th>
            <th className="text-center text-success">Quantity</th>
            <th className="text-center text-success">Price</th>
            <th className="text-center text-success">Sub Total</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
    )
  }
}
