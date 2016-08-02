import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _mods = [];

export default class ModStore extends EventEmitter {

  receiveMods(dbMods) {
    _mods = dbMods;
  }

  AppDispatcher.register(action => {

    switch(action.type) {
      case 'RECEIVE_ALL_MODS':
      this.receiveMods(action.mods);
      this.emit('CHANGE');
      break;

      default :
    }

  });

  getallMods() {
    return _mods;
  }
}
