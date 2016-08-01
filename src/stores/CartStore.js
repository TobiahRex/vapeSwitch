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

  getLSCart() {
    
  }
  removeOneLSCart(item) {
    _items = _items.map(item => {
      const index = _items.indexOf(item.uuid);
      localStorage.cartItems = JSON.stringify(_items);
      return _items.splice(index, 1);
    });
  }
  addLSCart(item) {

  }

  AppDispatcher.register(action => {

    switch(action.type) {
      case 'GET_CART_ITEMS':
      this.getLSCart();
      break;
      case 'ADD_CART_ITEM':
      this.addLSCart(action.item);
      break;
      case 'DELETE_CART_ITEM':
      this.removeOneLSCart(action.item);
      default:
    }

  });



}
