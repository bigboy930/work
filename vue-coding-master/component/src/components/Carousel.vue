<template>
  <div>
    <!-- basic -->
    <section>
      <p class="title">Basic</p>
      <div class="basic wrapper">
        <carousel :data="data" :interval="5000" ref="basic" :paginationPadding="400"></carousel>
      </div>
    </section>

    <!-- direction -->
    <section>
      <p class="title">Directions</p>
      <div class="directions clear row">
        <div class="col-sm">
          <carousel :data="data02" :autoplay="false" :interval="1000"></carousel>
        </div>
        <div class="col-sm mt-3 mt-sm-0">
          <carousel :data="data02" direction="right" :autoplay="false" :interval="1000"></carousel>
        </div>
        <div class="col-sm mt-3 mt-sm-0">
          <carousel :data="data02" direction="up" :autoplay="false" :interval="1000"></carousel>
        </div>
        <div class="col-sm mt-3 mt-sm-0">
          <carousel :data="data02" direction="down" :autoplay="false" :interval="1000"></carousel>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import Vue from 'vue';
import VueCarousel from '@chenfengyuan/vue-carousel';

Vue.use(VueCarousel);

export default {
  data() {
    return {
      currentSlide: 0,
      data: [
        '<div class="example-slide">Slide 1</div>',
        '<div class="example-slide">Slide 2</div>',
        '<div class="example-slide">Slide 3</div>',
      ],
      data02: [
        {
          content: this.content,
        },
        {
          content: this.content,
        },
        {
          content: this.content,
        },
      ],
    };
  },

  methods: {
    content(createElement, data, vm) {
      return createElement('div', {
        class: 'example-slide02',
      }, [`Slide ${vm.$parent.direction}`]);
    },
  },

};
</script>

<style>
section .title {  margin:20px 20px 10px; font-size:18px; }
.basic { padding:20px; border:1px solid #e0e0e0; margin:0 20px 60px; }
.example-slide { align-items: center; background-color: #666; color: #999; display: flex; font-size: 1.5rem; justify-content: center; min-height: 10rem; }

.clear:after { content:""; display:block; clear:both; }
.directions { padding:0 10px; border:1px solid #e0e0e0; margin:0 20px 60px;}
.directions > div { width:25%; float:left; box-sizing:border-box; padding:10px;  }
.example-slide02 { height:200px; background-color:#666; line-height:200px; color:#fff;}
</style>
