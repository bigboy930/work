<template>
  <div class="page-detail clear">
    <header-bar></header-bar>
    <div class="info">
      <p class="category">{{ currentWork.category }}</p>
      <h1 class="title mb-50">{{ currentWork.title }}</h1>
      <p class="description">
        {{ currentWork.description}}
      </p>
    </div>
    <div class="img-area fl-r">
      <template v-for="detail in currentWork.img.detail">
        <img class="img-detail" :class="{ isSingle : isSingle }" :src="require(`../assets/images/${detail}`)" alt="상세 이미지">
      </template>
      <!-- <img class="img-detail" src="../assets/images/detail/idea/detail_idea_07.jpg" style="width:auto; height:100vh;" alt="상세 이미지"> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HeaderBar from '../components/HeaderBar.vue'

export default {
  data(){
    return {

    }
  },
  components: {
    HeaderBar,
  },
  computed:{
    ...mapState(['db']),
    currentWork(){
      const workId = parseInt(this.$route.params.workId);
      const current = this.db.works.filter( work => {
        return workId === work.id
      })
      return current[0]
    },
    isSingle(){
      if(this.currentWork.img.detail.length > 1){
        return false;
      } else {
        return true;
      }
    }
  },
  mounted(){
    
  }
}
</script>

<style>
.page-detail { background-color:#fff;}
.page-detail .info { position:fixed; top:300px; left:100px; text-align:left; z-index:10; width:600px; }
.page-detail .category { font-size:18px; color:#aaa; }
.page-detail .title { font-size:40px; font-family: 'Roboto', sans-serif;color:#333;  }
.page-detail .description { font-size:15px; color:#777; } 
.page-detail .img-area { width:65%; position:relative; }
.page-detail .img-area .img-detail { width:100%; vertical-align:top; }
.page-detail .img-area .img-detail.isSingle { width:auto; height:100vh;  position:absolute; top:0; right:0;}
</style>
