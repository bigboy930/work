<template>
  <div>
    <header class="header-bar">
      <img class="logo" src="../assets/images/logo.png" alt="로고">
      <nav class="nav">
        <ul class="clear">
          <li v-for="(menu, index) in navMenu" :key="index">
            <router-link :to="`/${menu}`">{{ menu }}</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data(){
    return {
      navMenu: ['About','Work','Career','Blog']
    }
  }
}
</script>

<style>
.header-bar { position:fixed; top:0; left:0; width:100%; height:60px; z-index:1000; }
.header-bar .logo { width:60px; position:absolute; top:0; left:100px; cursor:pointer; }
.header-bar .nav { position:absolute; top:0; right:200px; }
.header-bar .nav li { float:left; margin-left:50px;  cursor:pointer; }
.header-bar .nav li a { font-size:18px; color:#111; opacity:0; line-height:60px; }
.header-bar:hover { background-color:#000; transition:all .3s ease; }
.header-bar:hover .nav li a { opacity:1; color:#fff; transition:all .3s ease; }
</style>
