<template>
  <div class="h-100">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      fade
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image
      <b-carousel-slide
        class="item bg h-100"
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?random"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?random">
        <h1>Hello world!</h1>
      </b-carousel-slide> -->

      <!-- Slides with image only -->
      <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?random"></b-carousel-slide> --> -->

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img class="d-block img-fluid bg bg-1 w-100">
      </b-carousel-slide>

      <b-carousel-slide>
        <img class="d-block img-fluid bg bg-2 w-100">
      </b-carousel-slide>

      <b-carousel-slide>
        <img class="d-block img-fluid bg bg-3 w-100">
      </b-carousel-slide>
      
      <b-carousel-slide>
        <img class="d-block img-fluid bg bg-4 w-100">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scope>
.carousel, .carousel-inner, .carousel-item, .carousel-caption {
  height: 100%;
  width: 100%;
}

.carousel-caption {
  right: 0%;
  left: 0%;
  bottom: 0%;
  padding: 0;
  z-index: 0;
}

.bg {
  /* The image used */
  

  /* Full height */
  height: 100%; 

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.bg-1 {
  background-image: url("../assets/osake.jpg");
}

.bg-2 {
  background-image: url("../assets/park.jpg");
}

.bg-3 {
  background-image: url("../assets/slots.jpg");
}

.bg-4 {
  background-image: url("../assets/pachinko.jpg");
}
</style>
