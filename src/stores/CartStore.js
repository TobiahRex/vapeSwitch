import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _items = [];

class CartStore extends EventEmitter {

  construct(){
    super();

    this.getLSCart = this.getLSCart.bind(this);
    this.removeOneLSCart = this.removeOneLSCart.bind(this);
    this.addLSCart = this.addLSCart.bind(this);
  }

  _getLSCart() {
    try {
      _items = JSON.parse(cartItems);
    } catch(err) {
      _items = [];
      console.error(err);
    };
  }

  _removeOneLSCart(item) {
    _items = _items.map((_item, i) => {
      if (_item.uuid === item.uuid) {
        _items.splice(index, 1);
      }
      localStorage.cartItems = JSON.stringify(_items);
    });
  }

  _addLSCart(item) {
    _items = _items.push(item);
    localStorage.cartItems = JSON.stringify(_items);
  }

  _updateLSCart(edit_item) {
    if (!edit_item) console.error('Did not provide required item for EDIT.');

    _items = _items.map(item => {
      if (item.uuid === edit_item.uuid) {
        item = edit_item;
        return item;
      }
      return item;
    });
  }

  AppDispatcher.register(action => {

    switch(action.type) {
      case 'GET_LS_CART_ITEMS':
      this.getLSCart();
      this.emit('CHANGE');
      break;

      case 'ADD_LS_CART_ITEM':
      this.addLSCart(action.item);
      this.emit('CHANGE');
      break;

      case 'REMOVE_LS_CART_ITEM':
      this.removeOneLSCart(action.item);
      this.emit('CHANGE');
      break;

      case 'UPDATE_LS_CART':
      this.updateLSCart(action.item);
      this.emit('CHANGE');
      break;

      default :
    }
  });

  getLSCart() {
    return _items;
  }

}
