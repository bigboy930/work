<template>
  <section>
    <div class="main-page">
      <ul class="sns-icon">
        <li v-for="(icon, index) in snsIcons" :key="index">
          <a :href="icon.link" target="blank">
            <img :src="require(`~/assets/images/${icon.src}`)" :alt="icon.art">
          </a>
        </li>
      </ul>
      <div class="bg-txt">
        <p>Creative Works</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'index',
  data(){
    return {
      snsIcons: [
        { src: 'icon_github.png', alt: '깃헙 아이콘', link: 'https://github.com/actionbeem?tab=repositories'  },
        { src: 'icon_fb.png', alt: '페이스북 아이콘', link: '#'  },
        { src: 'icon_insta.png', alt: '인스타그램 아이콘', link: '#'  }
      ]
    }
  },
}
</script>

<style scoped>
.main-page { height:calc(100vh - 50px); margin:0 50px; background:url(../assets/images/main_image.jpg) no-repeat center; background-size:cover; position:relative; }
.main-page .bg-txt { position:absolute; bottom:20px; right:50px; font-size:120px; font-weight:bold; color:#ccc; opacity:0.3; }
.main-page .sns-icon { position:absolute; left:50px; bottom:40px; }
.main-page .sns-icon li { display:inline-block; margin-right:25px; }
.main-page .sns-icon img { opacity:0.2; transition:all .2s ease; }
.main-page .sns-icon img:hover { opacity:0.8; transition:all .2s ease; }

</style>

