import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    postList: {},
  },
  mutations: {
    FETCH_LIST(state, list){
      state.postList = list
    }
  },
  actions: {
    fetchList({ commit }){
      axios.get('/api/post/')
        .then(response => {
          commit("FETCH_LIST", response.data)
        })
    }
  },
})