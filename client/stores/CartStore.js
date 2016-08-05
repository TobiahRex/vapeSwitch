import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _cart = [];

class CartStore extends EventEmitter {

  constructor(props) {
    super(props);
    this._updateLSCart = this._updateLSCart.bind(this);

    AppDispatcher.register(action => {
      switch (action.type) {

        case 'UPDATE_LS_CART':
          this._updateLSCart(action.items);
          this.emit('CHANGE');
          break;

        default :
      }
    });
  }

  _updateLSCart(items) {

    if (!items) console.error('Did not provide required item for UPDATE.');
    _cart = items;

  }

  getCart() {
    return _cart;
  }

}

export default new CartStore();
