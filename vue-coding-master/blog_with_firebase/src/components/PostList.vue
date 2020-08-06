<template>
  <div class="list-wrap">
    <ul class="btn-ctgr">
      <li v-for="(category, index) in categories" :class="{active:category === selectedCategory}" @click="fatchCategory(category)" :key="index">{{category}}</li>
    </ul>
    <ul v-masonry transition-duration="0.3s" class="post-list" item-selector=".post-thumb">
      <li v-masonry-tile class="post-thumb" v-for="post in filterList" :key="post.id">
        <router-link :to="`/post/${post[0]}`">
          <div class="inner">
            <img class="img-cover" v-if="post[1].coverImg" :src="post[1].coverImg">
            <div class="summary">
              <p class="ctgr">{{ post[1].category }}</p>
              <h2 class="title">{{ post[1].title }}</h2>
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
// import $ from 'jquery'

Vue.use(VueMasonryPlugin)

export default {
  data(){
    return {
      categories: ['All', 'Dev' ,'Publish', 'Design'],
      selectedCategory: 'All',
    }
  },
  computed: {
    ...mapState(['postList']),

    filterList(){
      const filteredList = Object.entries(this.postList);
      if(this.selectedCategory === 'All'){
        return filteredList;
      } else {
        return filteredList.filter((post) => {
          return post[1].category === this.selectedCategory;
        })
      }
    },

  },
  methods: {
    fatchCategory(category){
      this.selectedCategory = category;
      this.itemAlign();
    },
    itemAlign(){
      setTimeout(()=>{
        this.$redrawVueMasonry();
      },200)
    }
  },
  created(){
    this.$store.dispatch('fetchList')
  },
}
</script>

<style scoped>
.btn-ctgr  { text-align:center; margin-bottom:30px; }
.btn-ctgr li { display:inline-block; padding:8px 24px; border:1px solid transparent; border-radius:25px; margin:0 8px; cursor:pointer; }
.btn-ctgr li.active { background-color:#222; color:#fff; }
.btn-ctgr li:hover { border-color:#222; transition: all .5s ease; }
.list-wrap { width:1200px; margin:0 auto; padding:0 10px 100px; }
.post-list { padding-left:0; box-sizing:border-box; }
.post-thumb {  width:25%; box-sizing:border-box; padding:10px;  }
.post-thumb .inner { background-color:#f6f6f6; border-radius:5px;  box-sizing:border-box; text-align:left; overflow:hidden; box-shadow:0 10px 15px rgba(0,0,0,0.08);}
.post-thumb .inner .summary { padding:15px; }
.post-thumb .inner .ctgr { font-size:13px;  color:#999;}
.post-thumb .inner h2 { font-size:21px; }
.post-thumb .img-cover { width:100%; vertical-align:top; }
.post-list li:hover { transform:scale(1.05); transition:all .2s ease; z-index:1000; }
</style>

