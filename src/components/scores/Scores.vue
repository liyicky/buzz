<template>
  <div class="h-100 w-100 bg">
    
    <div class="container h-100">
      <div class="row score-panel">
        <div class="col align-self-center score-wrapper">

          <p v-for="score in scores">{{ score }}</p>

        </div>
      </div>
    </div>

  </div>
</template>

<script>

import { api } from '../../api/scores'

export default {
  computed: {
    scores() {
      return this.$store.state.scores;
    }
  },
  created() {
    api.getScores(this.$store);
  }
}
</script>

<style scoped>
  .bg {
    background-image: url("../../assets/board.jpg");
  }

  .score-panel {
    margin: 0;
  }

  .score-wrapper {
    background-color: rgba(0,0,0,0.84);
    height: 80%;
    border-radius: 5px;
  }
</style>
