import Vue from 'vue'

export const api = {

  getScores() {
    console.log('Fetching Scores')
    Vue.http.get('data.json')
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        console.log(data)
        return data;
      });
  },

  pushScores(scoreData) {
    Vue.http.post('data.json', scoreData)
  }
}