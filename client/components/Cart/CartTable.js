import React, { Component } from 'react'
import CartStore from '../../stores/CartStore.js'
import CartActions from '../../actions/CartActions'
import toastr from 'toastr'
const uuid = require('uuid');

export default class CartTable extends Component {

  constructor(props) {
    super(props);

    this.generateItems = this.generateItems.bind(this);
    this.subTotal = this.subTotal.bind(this);
    this.decreaseQty = this.decreaseQty.bind(this);
    this.increaseQty = this.increaseQty.bind(this);
  }

  decreaseQty(item) {
    item.cartQty -= 1;
    if( item.cartQty <= 0){
      toastr.warning(`${item.title} ${item.model} was removed from your cart.`, 'REMOVED');
      CartActions.removeLSCartItem(item);
    } else {
      CartActions.updateLSCartItem(item);
    }
  }

  increaseQty(item) {
    if (item.cartQty) {
      item.cartQty += 1;
    } else {
      item.cartQty = 1;
    }
    CartActions.addLSCartItem(item);
  }

  generateItems() {
    console.log('this.props.items: ', this.props.items);
    if (!this.props.items.length) return;
    const items = this.props.items.map((stateItem, i) => {
      const item = stateItem;
      stateItem.uuid = uuid()
      return (
        <tr key={stateItem._id}>
          <td className="text-center">
            <div id="cart-product" className="row">
              <img id="cart-product-img" className="thumbnail col-xs-4" src={item.images[0] || ''} />
              <span id="cart-product-desc" className="col-xs-8">{item.title} {item.model}</span>
            </div>
          </td>
          <td className="text-center">
            <div id="cart-price">{`\u00a5 ${item.newPrice}`}</div>
          </td>
          <td className="text-center">
            <div id="quantity">
              <span id="cart-quantity">{stateItem.cartQty}</span>
              <div className="btn-group">
                <button onClick={this.decreaseQty.bind(null, item)} href="" className="btn btn-info">-</button>

                <button onClick={this.increaseQty.bind(null, item)} href="" className="btn btn-info">+</button>
              </div>
            </div>
          </td>
          <td className="text-center">
            <div id="cart-subtotal">{this.subTotal(item.quantity, item.newPrice)}</div>
          </td>
        </tr>
      )
    })
    return items;
  }

  subTotal(qty, price) {
    if (!qty || !price) return ('Quantity or Price is Empty.');
    return `\u00a5 ${qty * price}`;
  }

  render() {
    let { items } = this.props;
    let itemCards = this.generateItems();

    console.log("itemCards: ", itemCards);
    return (
      <table className="table table-hover">
        <thead>
          { !itemCards ? '' :
            <tr>
              <th className="text-center text-success"></th>
              <th className="text-center text-success">Price</th>
              <th className="text-center text-success">Quantity</th>
              <th className="text-center text-success">Sub Total</th>
            </tr>
          }
        </thead>
        <tbody>
          {itemCards || <h1>Your Cart Is Empty</h1>}
        </tbody>
      </table>
    )
  }
}
