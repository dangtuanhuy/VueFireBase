<template>
  <div>
    <b-container class="bv-example-row">
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="1024"
        img-height="480"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=10"></b-carousel-slide>
        <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/id/1042/1024/480"></b-carousel-slide>
        <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
      </b-carousel>
    </b-container>
    <hr>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <h5>
           Bubble
            <code>fluid</code>:
          </h5>
          <b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image"></b-img>
        </b-col>
        <b-col>
          <h5>
            Coffee shop
            <code>fluid</code>:
          </h5>
          <b-img src="https://picsum.photos/300/150/?image=42" rounded="circle" fluid alt="Fluid image"></b-img>
        </b-col>
        <b-col>
          <h5>
            Bridge
            <code>fluid</code>:
          </h5>
          <b-img src="https://picsum.photos/300/150/?image=43" fluid alt="Fluid image"></b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style>
</style>
