<template>
  <div id="app">
    <Header></Header>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style>
* { padding:0; margin:0; }
body { line-height:1.5; }
#app {
  font-family: 'Malgun Gothic', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul, li { list-style:none; }
input, textarea, button, select { outline-width:0; box-sizing:border-box; border:0; }
button { width:100px; text-align:center; font-size:15px; line-height:46px;cursor:pointer; }
a { color:#222; text-decoration: none; }
select { -webkit-appearance: none; -moz-appearance: none; appearance: none; }  select::-ms-expand { display: none; }
.ta-r { text-align:right; }
.ta-l { text-align:left; }
.fl-l { float:left; }
.fl-r { float:right; }
.clear:after { content:""; display:inline-block; clear:both; }
.hide { display:none; }

.slide-fade-enter-active { transition: all .3s ease; }
.slide-fade-leave-active { transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0); }
.slide-fade-enter, .slide-fade-leave-to { transform: translateY(20px); opacity: 0; }
</style>
