import Vuex from 'vuex'
import workItems from '../assets/db.json'

const store = () => new Vuex.Store({
  state: {
    workList: workItems.items
  }
});

export default store;