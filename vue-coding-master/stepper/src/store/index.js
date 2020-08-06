import Vue from 'vue'
import Vuex from 'vuex'
import questionData from '../assets/input.json'

Vue.use(Vuex)

export const store = new Vuex.Store ({
  state: {
    questionData: questionData.items,
    stepIndex: 0,
    answerResult: {
      items:[],
    },
  },
  mutations: {
    UP_STEP(state){
      state.stepIndex += 1;
    },
    DOWN_STEP(state){
      state.stepIndex -= 1;
    }
  },
})