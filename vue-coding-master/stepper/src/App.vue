<template>
  <div id="app">
    <form-view></form-view>
  </div>
</template>

<script>
import FormView from './view/FormView.vue'

export default {
  data(){
    return {
    }
  },
  components: {
    FormView
  },
}
</script>

<style>
body {
  padding:0;
  margin:0;
  background-color:#f6f6f6;
}
a {
  color:#34593e;
  text-decoration: none;
}
a.router-link-exact-active { text-decoration:underline;}
a:hover {
  color:cadetblue;
  text-decoration:underline; 
}
ul, li { list-style:none; padding:0;}
button { outline-width:0; background:none; border:0; cursor:pointer; }
textarea { outline-width:0; }
p { margin:0; }
.clear:after { display:block; content:""; clear:both; } 
.fl-l { float:left; } 
.fl-r { float:right; } 

</style>
