import Vue from 'vue'
import Vuex from 'vuex'

import db from '../data/db.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    db: db
  },
  mutations: {},
  actions: {},
});