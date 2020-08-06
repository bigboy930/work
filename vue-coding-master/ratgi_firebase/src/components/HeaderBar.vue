<template>
  <div>
    <header class="header">
      <nuxt-link to="/">
        <img class="logo" src="../assets/images/logo.png" alt="logo 이미지" @click="initNav">
      </nuxt-link>

      <ul class="nav">
        <li v-for="nav in navList" :key="nav" :class="{ active: nav === navCurrent }" @click="selectNav(nav)">
          <a v-if="nav === 'blog'" href="https://blog-d24e2.firebaseapp.com/" target="blank">{{ nav }}</a>
          <nuxt-link v-else :to="`/${nav}`">{{ nav }}</nuxt-link>
        </li>
      </ul>
    </header>
  </div>

</template>

<script>
export default {
  name: 'headerBar',
  data(){
    return {
      navList: ['about','work','blog'],
      navCurrent: null,
    }
  },
  methods: {
    initNav(){
      this.navCurrent = null;
    },
    selectNav(nav){
      this.navCurrent = nav;
    }
  }
}
</script>

<style scoped>
.header { position:fixed; top:0; left:0; z-index:100; width:100%;}
.header .logo { width:100px; position:absolute; top:0; left:50px;  }
.header .nav { position:absolute; top:0; right:60px;}
.header .nav li { display:inline-block; font-size:18px;  }
.header .nav li a { display:block; color:#555; margin:40px 40px; transition:margin .2s ease; }
.header .nav li a:hover { margin:40px 45px 40px 35px; transition:all .2s ease; }
.header .nav li.active a { color:#000; }

@media (max-width:1700px){
  .header .logo { width:80px; }
  .header .nav li a { display:block; margin:30px 35px; transition:margin .2s ease; }
  .header .nav li a:hover { margin:30px 38px 30px 32px; transition:all .2s ease; }
}
</style>