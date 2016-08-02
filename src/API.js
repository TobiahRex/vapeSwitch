import { get, post, ajax } from 'jquery'
import AppDispatcher from './AppDispatcher'
import ServerActions from './actions/ServerActions'

const API = {
  // Local Storage API
  getLSItems() {
    ServerActions.getLSCartItems();
  },
  addLSItem() {
    ServerActions.addLSCartItem();
  },
  removeLSItem() {
    ServerActions.removeLSCartItem();
  },
  updateLSItem() {
    ServerActions.updateLSCartItem();
  },

  // Backend API
  getAllMods() {
    get('/api/products/mods')
    .done(res => ServerActions.getAllMods(res))
    .fail(err => console.error(`Get All Mods = 400: ${err}`));
  },
  addNewMod(mod) {
    post('/api/products/mods', mod)
    .done(res => ServerActions.addNewMod(res))
    .fail(err => console.error(`Add new Mod = 400: ${err}`));
  },
  removeMod(id) {
    ajax({
      url: `/api/products/mods/${id}`,
      type: 'DELETE',
    })
    .done(res => ServerActions.removeMod(res))
    .fail(err => console.error(err));
  },
  updateMod(id) {
    ajax({
      url: `/api/products/mods/${id}`,
      type: 'PUT',
    })
    .done(res => ServerActions.updatedMod(res))
    .fail(err => console.error(err));
  },
}
