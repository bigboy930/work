<template>
  <div class="write-form">
    <router-link v-if="!pageId" to="/">
      <i class="fas fa-arrow-left"></i>
    </router-link>
    <router-link v-else :to="`/post/${pageId}`">
      <i class="fas fa-arrow-left"></i>
    </router-link>

    <input type="text" class="title" name="title" placeholder="title" v-model="title">
    <div class="ctgr-wrap">
      <select name="category" id="post-ctgr" v-model="category">
        <option disabled value="">select category</option>
        <option value="think">think</option>
        <option value="dev">dev</option>
        <option value="design">design</option>
      </select>
      <i class="fas fa-chevron-down"></i>
    </div>

    <input type="text" class="cover-img" name="coverImg" placeholder="cover image url" v-model="coverImg"> 
    <textarea id="post-editor" placeholder="write your think"></textarea>
    <div class="ta-r">
      <button class="btn-submit" v-if="!pageId" @click="writePost">submit</button>
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


export default {
  data(){
    return {
      title: "",
      category: "",
      coverImg : null,
      editor: null,
      pageId: null,
    }
  },
  methods: {
    writePost(){
      const title = this.title;
      const coverImg = this.coverImg;
      const category = this.category;
      const description = this.editor.getContents();
      if(title){
        if(category){
          if(description){
            this.$http.post('/api/post/write', {
              params: { title, category, coverImg, description } 
            })
              .then(result => {
                this.$router.push('/')
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
      const coverImg = this.coverImg;
      const category = this.category;
      const description = this.editor.getContents();
      this.$http.post('/api/post/edit', {
        params: { pageId:this.pageId, title, coverImg, category, description }
      })
        .then(result => {
          this.$router.push(`/post/${this.pageId}`)
        })
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

    this.pageId = this.$route.params.pageId;
    if(this.pageId){
      this.$http.get(`/api/post/${this.pageId}`)
        .then(result => {
          const postInfo = result.data;
          this.title = postInfo.title;
          this.coverImg = postInfo.coverImg;
          this.category = postInfo.category;
          this.description = this.editor.setContents(postInfo.description);
        })
    }
  }
}
</script>

<style scoped>
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