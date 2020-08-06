<template>
  <div class="main-page">
    <h1 class="title">Blog</h1>
    <post-list></post-list>
    <router-link class="btn-write" :to="{ name:'write' , params: { isLogin: currentUserUid } }">write</router-link>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { mapState } from 'vuex'

export default {
  components: {
    PostList,
  },
  computed: {
    ...mapState(['currentUserUid'])
  },
}
</script>



<style scoped>
.main-page { min-height:100vh; background-color:#eee; }
h1.title { font-size:50px; font-weight:normal; margin:0 auto 50px; padding-top:100px; }
.btn-write { position:fixed; right:30px; bottom:30px; width:50px; height:50px; text-align:center; line-height:50px; border-radius:25px; background-color:#333; color:#fff; z-index:10; }
</style>