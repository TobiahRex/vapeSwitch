import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  updateLSCart(items) {
    AppDispatcher.dispatch({
      items,
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
