import Vue from 'vue'

export const api = {
  getScores() {
    Vue.http.get('data.json')
  },

  pushScores(scoreData) {
    Vue.http.post('data.json', scoreData)
  }
}