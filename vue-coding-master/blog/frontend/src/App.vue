<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
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
body { background-color:#f6f6f6; line-height:1.5; }
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
</style>
