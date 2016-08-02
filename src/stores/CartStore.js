import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _items = [];

class CartStore extends EventEmitter {

  constructor(props) {
    super(props);

    this.getLSCart = this.getLSCart.bind(this);
    this.removeOneLSCart = this.removeOneLSCart.bind(this);
    this.addLSCart = this.addLSCart.bind(this);

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'GET_LS_CART_ITEMS':
          this._getLSCart();
          this.emit('CHANGE');
          break;

        case 'ADD_LS_CART_ITEM':
          this._addLSCart(action.item);
          this.emit('CHANGE');
          break;

        case 'REMOVE_LS_CART_ITEM':
          this._removeOneLSCart(action.item);
          this.emit('CHANGE');
          break;

        case 'UPDATE_LS_CART':
          this._updateLSCart(action.item);
          this.emit('CHANGE');
          break;

        default :
      }
    });
  }

  _getLSCart() {
    try {
      _items = JSON.parse(localStorage.cartItems);
    } catch (err) {
      _items = [];
      console.error(err);
    }
  }

  _removeOneLSCart(item) {
    _items.forEach((_item, i) => {
      if (_item.uuid === item.uuid) {
        _items.splice(i, 1);
      }
    });
    localStorage.cartItems = JSON.stringify(_items);
  }

  _addLSCart(item) {
    _items = _items.push(item);
    localStorage.cartItems = JSON.stringify(_items);
  }

  _updateLSCart(editItem) {
    if (!editItem) console.error('Did not provide required item for EDIT.');

    _items = _items.map(_item => {
      let item = _item;
      if (item.uuid === editItem.uuid) {
        item = editItem;
        return item;
      }
      return item;
    });
  }

  getLSCart() {
    return _items;
  }

}
