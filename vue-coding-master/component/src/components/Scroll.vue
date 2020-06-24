<template>
  <div class="wrapper">
    <ul class="move-section">
      <li v-scroll-to="'#section01'">01</li>
      <li v-scroll-to="'#section04'">04</li>
      <li v-scroll-to="'#section08'">08</li>
      <li v-scroll-to="'#section12'">12</li>
    </ul>

    <div class="sections">
      <section id="section01" style="background-color:#fff">01</section>
      <section style="background-color:#eee">02</section>
      <section style="background-color:#ddd">03</section>
      <section id="section04" style="background-color:#ccc">04</section>
      <section style="background-color:#bbb">05</section>
      <section style="background-color:#aaa">06</section>
      <section style="background-color:#999">07</section>
      <section id="section08" style="background-color:#888">08</section>
      <section style="background-color:#777">09</section>
      <section style="background-color:#666">10</section>
      <section style="background-color:#555">11</section>
      <section id="section12"style="background-color:#444">12</section>
      <section style="background-color:#333">13</section>
      <section style="background-color:#222">14</section>
      <section style="background-color:#111">15</section>
      <section style="background-color:#000">16</section>
    </div>

    <button class="btn-top" @click="moveTop"></button>
  </div>
</template>

<script>
import Vue from 'vue'
var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

export default {
  name: 'Scroll',
  methods: {
    moveTop(){
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  },
}

</script>

<style scoped>
.btn-top { position:fixed; right:40px; bottom:40px; z-index:10; width:60px; height:60px; background-color:#fff; cursor:pointer; }
.btn-top:before { content:""; display:inline-block; width:20px; height:2px; transform:rotate(-45deg); position:absolute; top:28px; left:13px; background-color:#555; } 
.btn-top:after { content:""; display:inline-block; width:20px; height:2px; transform:rotate(45deg); position:absolute; top:28px; left:26px; background-color:#555; } 

.move-section { position:fixed; top:20px; left:20px; z-index:10; }
.move-section li { display:inline-block; width:40px; height:40px; border-radius:50%; line-height:40px; text-align:center; background-color:#555; color:#fff; margin:5px; cursor:pointer; }

.sections section { height:200px; line-height:200px; font-size:20px; text-align:center; }
</style>
