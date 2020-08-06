<template>
  <div>
    <header-bar></header-bar>
    <div class="bg-frame">
      <div class="wrapper"></div>
    </div>
    <nuxt/>
  </div>
</template>

<script>
import headerBar from '../components/HeaderBar.vue'

export default {
  components: {
    headerBar,
  }
}
</script>

<style>
.bg-frame { position:fixed; width:100vw; height:100vh; top:0; left:0; z-index:-1; background-color:#f6f6f6; }
.bg-frame .wrapper { height:calc(100vh - 50px); margin:0 50px; background-color:#fff; position:relative;  }
</style>

