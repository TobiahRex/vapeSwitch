import API from '../API'

const CartActions = {
  getLSCartItems() {
    API.getLSCartItems();
  },
  addLSCartItem(item) {
    API.addLSCartItem(item);
  },
  removeLSCartItem() {
    API.removeLSCartItem();
  },
  updateLSCartItem() {
    API.updateLSCartItem();
  },
}

export default CartActions
