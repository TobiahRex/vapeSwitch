import React, { Component } from 'react'

import CartTable from './CartTable.js'

function _getComponentState() {
  return { items: CartStore.getCart() }
}

export default class Cart extends Component {

  constructor(props) {
    super(props);

    this.state = _getComponentState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    ProductActions.getAllMods();
    ModStore.on('CHANGE', this._onChange);
  }

  componentWillUnmount() {
    ModStore.removeListener('CHANGE', this._onChange);
  }

  _onChange() {
    this.setState(_getComponentState());
  }

  // ModsDisplay will be a DIB render

  render() {
    return (
      <div className="container">
        <h1>Cart</h1>
        <div>
        </div>
        <CartTable cart={this.state.items}/>
      </div>
    )
  }
}
