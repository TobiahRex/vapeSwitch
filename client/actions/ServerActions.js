import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  getLSCartItems() {
    AppDispatcher.dispatch({
      type: 'GET_LS_CART_ITEMS',
    });
  },
  addLSCartItem(item) {
    AppDispatcher.dispatch({
      item,
      type: 'ADD_LS_CART_ITEM',
    });
  },
  removeLSCartItem(item) {
    AppDispatcher.dispatch({
      item,
      type: 'REMOVE_LS_CART_ITEM',
    });
  },
  updateLSCartItem(item) {
    AppDispatcher.dispatch({
      item,
      type: 'UPDATE_LS_CART',
    });
  },
  getAllMods(mods) {
    AppDispatcher.dispatch({
      mods,
      type: 'RECEIVE_ALL_MODS',
    });
  },
  addNewMod(mod) {
    AppDispatcher.dispatch({
      mod,
      type: 'RECEIVE_ONE_MOD',
    });
  },
  removeMod(mods) {
    AppDispatcher.dispatch({
      mods,
      type: 'RECEIVE_ALL_MODS',
    });
  },
  updatedMod(mods) {
    AppDispatcher.dispatch({
      mods,
      type: 'RECEIVE_ALL_MODS',
    });
  },
}

export default ServerActions
