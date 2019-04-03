import { api } from '../../api/scores'

const state = {
  scores: []
}

const mutations = {
  'CREATE_SCORE' (state, score) {
    state.scores.push(score);
  }
}

const actions = {
  createScore({commit}, score) {
    commit('CREATE_SCORE', score);
    api.pushScores(state.scores)
  }
}

const getters = {
  scores: state => {
    state.scores = api.getScores();
    return state.scores;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}