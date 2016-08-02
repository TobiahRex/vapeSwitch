import API from '../API'

const CartActions = {
  getLSCartItems() {
    API.getLSCartItems();
  },
  addLSCartItem() {
    API.addLSCartItem();
  },
  removeLSCartItem() {
    API.removeLSCartItem();
  },
  updateLSCartItem() {
    API.updateLSCartItem();
  },
}

export default CartActions
