<template>
  <div>
    <carousel :per-page="1" :mouse-drag="false" :autoplay="true" :loop="true" :autoplayTimeout="1000" :navigationEnabled="true">
      <slide>
        Slide 1 Content
      </slide>
      <slide>
        Slide 2 Content
      </slide>
      <slide>
        Slide 3 Content
      </slide>
      <slide>
        Slide 4 Content
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  data(){
    return {
      
    }
  },
  components: {
    Carousel,
    Slide
  }
}
</script>

<style>

</style>