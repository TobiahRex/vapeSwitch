import { get, post, ajax } from 'jquery'
import AppDispatcher from './AppDispatcher'
import ServerActions from './actions/ServerActions'


const API = {
  // Local Storage API
  getLSCartItems() {
    let ls = this.getLocalStorage();
    ServerActions.updateLSCart(ls);
  },
  addLSCartItem(item) {
    let ls = this.getLocalStorage();
    ls.push(item);
    this.writeToLocalStorage(ls, (newLs) => {
      ServerActions.updateLSCart(newLs);
    });
  },
  removeLSCartItem(item) {
    this.removeFrLocalStorage(item, (err, newLs) => {
      err ? console.error(err) : ServerActions.updateLSCart(newLs);
    });
  },
  updateLSCartItem(item) {
    let ls = this.getLocalStorage();
    ls = ls.map(lsItem => lsItem === item ? item : lsItem);
    this.writeToLocalStorage(ls, (newLs) => {
      ServerActions.updateLSCart(newLs);
    });
  },

  // Backend API
  getAllMods() {
    console.log('sending request for all mods');
    get('/api/products/mods')
    .done(res => {ServerActions.getAllMods(res)})
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
  getLocalStorage(){
    let ls = [];
    try {
      ls = JSON.parse(localStorage.cart);
      console.log('ls: ', ls);
    } catch(err) {
      console.error('Could not retrieve localStorage: ', err);
      ls = [];
    }
    return ls;
  },
  writeToLocalStorage(data, cb){
    let ls = data;
    localStorage.cart = JSON.stringify(ls);
    let newLs = this.getLocalStorage();
    cb(newLs);
  },
  removeFrLocalStorage(data, cb){
    let ls = this.getLocalStorage();
    if (ls.indexOf(data) < 0) return cb('That item was not found.');

    ls = ls.filter(lsItem => lsItem !== data);
    this.writeToLocalStorage(ls);
    let newLs = this.getLocalStorage();
    cb(null, newLs);
  }
}

export default API
