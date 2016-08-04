import React, { Component } from 'react'
import CartStore from '../../stores/CartStore.js'
import toastr from 'toastr'
const uuid = require('uuid');

export default class CartTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items
    }

    this.generateItems = this.generateItems.bind(this);
    this.subTotal = this.subTotal.bind(this);
    this.decreaseQty = this.decreaseQty.bind(this);
    this.increaseQty = this.increaseQty.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
  }

  emptyCart(item) {
    
  }


  decreaseQty(item) {
    console.log('item: ', item);
    let items = this.state.items.map(_item => {
      if (_item._id === item._id){
        _item.quantity -= 1;
        if(_item.quantity > 0) {
          return _item;
        } else {
          toastr.info(`${_item.title} ${_item.model} has been removed from your cart.`, 'Removed From Cart');
          return null
        }
      } else {
        return _item;
      }
    });
    this.setState({ items });
  }

  increaseQty(item) {
    console.log('item: ', item);
    let items = this.state.items.map(_item => {
      if (_item._id === item._id){
        _item.quantity += 1;
        return _item;
      } else {
        return _item;
      }
    });
    this.setState({ items });
  }

  generateItems() {
    if (!this.state.items) return (<tr className="lead">Your Cart is Empty</tr>);
    const items = this.state.items.map((stateItem, i) => {
      console.log('stateItem: ', stateItem);
      const item = stateItem;
      return (
        <tr key={uuid()}>
          <td className="text-center"><div id="cart-index">{i + 1}</div></td>
          <td className="text-center">
            <div id="cart-product" className="row">
              <img id="cart-product-img" className="thumbnail col-xs-4" src={item.images[0]} />
              <span id="cart-product-desc" className="col-xs-8">{item.title} {item.model}</span>
            </div>
          </td>
          <td className="text-center">
            <div id="quantity">
              <span id="cart-quantity">{item.quantity}    </span>
              <div className="btn-group">
                <button onClick={this.decreaseQty.bind(null, item)} href="" className="btn btn-info">-</button>

                <button onClick={this.increaseQty.bind(null, item)} href="" className="btn btn-info">+</button>
              </div>
            </div>
          </td>
          <td className="text-center">
            <div id="cart-price">{`\u00a5 ${item.newPrice}`}</div>
          </td>
          <td className="text-center">
            <div id="cart-subtotal">{this.subTotal(item.quantity, item.newPrice)}</div>
          </td>
        </tr>
      )
    })
    console.log('items: ', items);
    return items;
  }

  subTotal(qty, price) {
    console.log('qty: ', qty, '\nprice: ', price);
    if (!qty || !price) return ('Quantity or Price is Empty.');
    return `\u00a5 ${qty * price}`;
  }

  render() {
    let items = this.generateItems();
    console.log('render items: ', items);
    return (
      <table className="table table-hover ">
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
