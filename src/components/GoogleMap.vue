<template>
  <div class="map"></div>
</template>

<script>
import gmapsInit from '../utils/gmaps.js';

export default {
  async mounted() {
    try {
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$el);

      geocoder.geocode({ address: 'Japan' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }

        map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style scoped>
  .map {
    width: 100vw;
    height: 100vh;
  }

</style>
