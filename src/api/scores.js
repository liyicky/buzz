import Vue from 'vue'

export const api = {

  getScores(store) {
    console.log('Fetching Scores')
    Vue.http.get('data.json')
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        console.log(data)
        store.state.scores = data;
      });
  },

  pushScores(scoreData) {
    Vue.http.post('data.json', scoreData)
  }
}