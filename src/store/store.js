import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    scores: []
  },
  mutations: {
    'CREATE_SCORE' (state, scoreObject) {
      state.scores.push(scoreObject);
    }
  }


});