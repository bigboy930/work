<template>
  <div class="detail-view">
    <div class="clear">
      <i class="fas fa-arrow-left" @click="goBack"></i>
    </div>
    <div class="top">
      <h1 class="title">{{ post.title }}</h1>
      <p class="ctgr">{{ post.category }}</p>
      <template v-if="isAuthor">
        <div class="control">
          <button class="btn-delete" @click="deletePost">
            <span>삭제</span>
          </button>
          <router-link :to="`/write/${this.$route.params.postId}`">
            <button class="btn-edit">
              <!-- <i class="far fa-edit"></i> -->
              <span>수정</span>
            </button>
          </router-link>
        </div>
      </template>

    </div>
    <img class="cover" :src="post.coverImg">
    <div class="desc" v-html="post.description"></div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { mapState } from 'vuex'

export default {
  data(){
    return {
      post: {},
      postId: this.$route.params.postId,
      isAuthor: false,
    }
  },
  computed: {
    ...mapState(['currentUserUid'])
  },
  methods:{
    deletePost(){
      firebase.database().ref(`posts/${this.postId}`).remove();
      this.$router.push('/')
    },
    goBack(){
      this.$router.go(-1)
    }
  },
  created(){
    const db = firebase.database().ref(`posts/${this.postId}`);
    db.once('value')
      .then(snapshot => {
        let post = snapshot.val();
        this.post = post;
        if(this.currentUserUid === post.authorID){
          this.isAuthor = true;
        }
      })
  },
  mounted(){
    window.scrollTo(0,0);
  }
}
</script>

<style scoped>
.detail-view { width:800px; margin:100px auto; text-align:left;}
.detail-view .btn-edit { font-size:14px; width:70px; line-height:30px; background-color:#666; border-radius:3px;}
.detail-view .btn-delete { font-size:14px; width:70px; line-height:30px; border-radius:3px; background-color:#ddd; box-sizing:border-box; margin-right:7px; }
.detail-view .btn-edit i { margin-right:6px; color:#333; }
.detail-view .btn-edit span { color:#fff; }
.detail-view .top {  margin-bottom:40px; border-bottom:1px solid #ddd; position:relative; }
.detail-view .top .title { margin-bottom:10px;}
.detail-view .top .ctgr { margin-bottom:50px;}
.detail-view .top .control { position:absolute; right:0; bottom:15px; }
.detail-view .cover { width:100%; margin-bottom:50px; }
.detail-view .desc { margin-bottom:80px;}
.fa-arrow-left { font-size:50px; color:#ddd; margin-bottom:40px; cursor:pointer }
</style>
