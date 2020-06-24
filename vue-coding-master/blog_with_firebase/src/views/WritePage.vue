<template>
  <div class="write-form">
    <router-link v-if="!postId" to="/">
      <i class="fas fa-arrow-left"></i>
    </router-link>
    <router-link v-else :to="`/post/${postId}`">
      <i class="fas fa-arrow-left"></i>
    </router-link>

    <input type="text" class="title" name="title" placeholder="title" v-model="title">
    <div class="ctgr-wrap">
      <select name="category" id="post-ctgr" v-model="category">
        <option disabled value="">select category</option>
        <option value="Dev">Dev</option>
        <option value="Publish">Publish</option>
        <option value="Design">Design</option>
      </select>
      <i class="fas fa-chevron-down"></i>
    </div>

    <input type="text" class="cover-img" name="coverImg" placeholder="cover image url" v-model="coverImg"> 
    <textarea id="post-editor" placeholder="write your think"></textarea>
    <div class="ta-r">
      <button class="btn-submit" v-if="!postId" @click="writePost">submit</button>
      <button class="btn-edit" v-else @click="editPost">edit</button>
    </div>
  </div>
</template>

<script>
import 'suneditor/dist/css/suneditor.min.css'
import suneditor from 'suneditor'
import {align, font, fontSize, fontColor, hiliteColor,
        horizontalRule, list, table, formatBlock, link, image, video} from 'suneditor/src/plugins'
import lang from 'suneditor/src/lang'
import {en, ko} from 'suneditor/src/lang'
import de from 'suneditor/src/lang/de'

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { mapState } from 'vuex'

import $ from "jquery";

export default {
  data(){
    return {
      title: "",
      category: "",
      coverImg : null,
      editor: null,
      postId: null,
    }
  },
  computed: {
    ...mapState(['currentUserUid'])
  },
  methods: {
    writePost(){
      const title = this.title;
      const category = this.category;
      const coverImg = this.coverImg;
      const email = null;
      const description = this.editor.getContents();
      if(title){
        if(category){
          if(description){            
            const user = firebase.database().ref(`users/${this.currentUserUid}`)
            user.once('value')
              .then(snapshot => {
                console.log('메일 :', snapshot.val().email)
                this.email = snapshot.val().email;
                return this; 
              })
              .then(vm => {
                firebase.database().ref(`posts/`).push({
                  authorID: vm.currentUserUid,
                  authorEmail: vm.email,
                  title,
                  category,
                  coverImg,
                  description 
                });

                vm.$router.push('/')
              })
          } else {
            alert('내용을 입력해주세요.')
          }
        } else {
          alert('카테고리를 선택해주세요.')
        }
      } else {
        alert('제목을 입력해주세요.')
      }
    },
    editPost(){
      const title = this.title;
      const coverImg = this.coverImg ? this.coverImg : "";
      const category = this.category;
      const description = this.editor.getContents();
      firebase.database().ref(`posts/${this.postId}`).update({
        title,
        category,
        coverImg,
        description
      })
      this.$router.push('/')
    },
  },
  mounted(){
    this.editor = suneditor.create('post-editor', {
      plugins: [
        font,
        link,
        image,
        video
      ],
      buttonList: [
        ['bold', 'underline', 'italic'],
        ['link', 'image', 'video']
      ],
      lang: lang['ko']
    });

    this.postId = this.$route.params.postId;
    if(this.postId){
      const db = firebase.database().ref(`posts/${this.postId}`);
      db.once('value')
        .then(snapshot => {
          let post = snapshot.val();
          this.title = post.title;
          this.category = post.category;
          this.coverImg = post.coverImg;
          this.description = this.editor.setContents(post.description);
        })
    }
  }
}
</script>

<style scoped>
@import '../../node_modules/suneditor/dist/css/suneditor.min.css';

.write-form { width:800px; margin:100px auto; box-sizing:border-box; text-align:left;}
.write-form .title,
.write-form .cover-img { width:100%; padding:12px; font-size:15px; background-color:#eee; border:0; border-radius:4px; margin-bottom:30px; }
#post-editor { width:100%; height:300px;}
.write-form .btn-submit { margin-top:50px; background-color:#333; color:#fff; }
.write-form .btn-edit { margin-top:50px; background-color:#333; color:#fff; }
#post-ctgr { width:180px; height:42px; background-color:#eee; border:0; font-size:15px; line-height:36px; padding:0 15px; margin-bottom:30px; border-radius:25px; color:#333; }
.ctgr-wrap { position:relative; display:inline-block; }
.ctgr-wrap .fa-chevron-down { position:absolute; top:16px; right:16px; font-size:13px; }
.fa-arrow-left { font-size:50px; color:#ddd; margin-bottom:40px; cursor:pointer }
.fa-arrow-left:hover { color:#bbb; transition:all .2s ease;}
</style>