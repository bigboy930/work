<template>
  <div>
    <post-list></post-list>
    <router-link class="btn-write" to="/write">write</router-link>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'

export default {
  components: {
    PostList,
  },
}
</script>



<style scoped>
.btn-write { position:fixed; right:30px; bottom:30px; width:50px; height:50px; text-align:center; line-height:50px; border-radius:25px; background-color:#333; color:#fff; z-index:10; }
</style>
