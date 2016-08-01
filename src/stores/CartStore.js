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
      console.error(err);
    };
  }

  _removeOneLSCart(item) {
    _items = _items.map(item => {
      let index = _items.indexOf(item.uuid);
      localStorage.cartItems = JSON.stringify(_items);
      return _items.splice(index, 1);
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
      case 'GET_CART_ITEMS':
      this.getLSCart();
      break;

      case 'ADD_CART_ITEM':
      this.addLSCart(action.item);
      break;

      case 'REMOVE_CART_ITEM':
      this.removeOneLSCart(action.item);
      break;

      case 'UPDATE_CART':
      this.updateLSCart(action.item);
      break;

      default :
    }
  });

  getLSCart() {
    return _items;
  }

}
