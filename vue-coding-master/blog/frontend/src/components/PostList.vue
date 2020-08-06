<template>
  <div class="list-wrap">
    <ul v-masonry transition-duration="0.3s" class="post-list" item-selector=".post-thumb">
        <li v-masonry-tile class="post-thumb" v-for="post in postList" :key="post.id">
          <router-link :to="`/post/${post.id}`">
            <div class="inner">
              <img class="img-cover" v-if="post.coverImg" :src="post.coverImg">
              <div class="summary">
                <p class="ctgr">{{ post.category }}</p>
                <h2 class="title">{{ post.title }}</h2>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
  </div>
  
</template>

<script>
import { mapState } from 'vuex'
import Vue from 'vue'
import {VueMasonryPlugin} from 'vue-masonry';

Vue.use(VueMasonryPlugin)

export default {
  data(){
    return {
      
    }
  },
  computed: {
    ...mapState(['postList'])
  },
  created(){
    this.$store.dispatch('fetchList')
  }
}
</script>

<style scoped>
.list-wrap { width:1200px; margin:100px auto; padding:0 10px; }
.post-list { padding-left:0; box-sizing:border-box; }
.post-thumb { width:25%; box-sizing:border-box; padding:10px; }
.post-thumb .inner { background-color:#ddd; border-radius:5px;  box-sizing:border-box; text-align:left; overflow:hidden;}
.post-thumb .inner .summary { padding:15px; }
.post-thumb .inner .ctgr { font-size:15px; margin-bottom:7px; color:#666;}
.post-thumb .inner h2 { margin-bottom:5px; font-size:21px; }
.post-thumb .img-cover { width:100%; vertical-align:top; }
</style>
