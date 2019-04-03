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

export default {
  state,
  mutations,
  actions
}