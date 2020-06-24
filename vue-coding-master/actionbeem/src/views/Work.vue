<template>
  <div class="page-works">
    <header-bar></header-bar>
    <h1 class="title ta-l">
      VIRTUAL<br>
      INSANITY
    </h1>
    <div class="work-list-wrap">
      <ul class="filter">
        <li v-for="(category, index) in categories" :class="{ active: selectedCategory === category }" @click="fetchCategory(category)" :key="index">{{ category }}</li>
      </ul>

      <vue-custom-scrollbar class="scroll-area"  :settings="settings">
        <ul class="work-list clear">
          <!-- <transition-group name="work-list"> -->
          <li v-for="(work, index) in fetchWorkList" :style="{ 'background-image' : 'url(' + require('../assets/images/' + work.img.thumb) + ')' , 'background-size' : 'cover'}" :key="index">
            <a v-if="work.linkExternal" :href="work.linkExternal" target="blank">
              <div class="info" :class="work.category" >
                <p class="ctgr">{{ work.category }}</p>
                <p class="tit">{{ work.title }}</p>
              </div>
            </a>
            <router-link v-else :to="`/detail/${work.id}`">
              <div class="info" :class="work.category" >
                <p class="ctgr">{{ work.category }}</p>
                <p class="tit">{{ work.title }}</p>
              </div>
            </router-link>
          </li>
          <!-- </transition-group>  -->
        </ul>
      </vue-custom-scrollbar> 
    </div>
    <ul class="sns-icon clear">
      <li v-for="(icon, index) in snsIcon" :key="index"><img :src="require('../assets/images/icon/icon_' + icon + '.png')" alt="sns 아이콘"></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import vueCustomScrollbar from 'vue-custom-scrollbar'
import HeaderBar from '../components/HeaderBar.vue'

export default {
  components: {
    HeaderBar,
    vueCustomScrollbar
  },
  data(){
    return {
      categories: ['All', 'Publish', 'Design', 'Idea'],
      snsIcon: ['fb', 'kakao', 'insta', 'twt'],
      selectedCategory: 'All',
      settings: {
        maxScrollbarLength: 100
      }
    }
  },
  computed: {
    ...mapState(['db']),
    fetchWorkList(){
      if(this.selectedCategory === 'All'){
        return this.db.works;
      } else {
        const works = this.db.works;
        return works.filter( work => {
          return this.selectedCategory === work.category 
        })
      }
    },
  },
  methods: {
    fetchCategory(category){
      this.selectedCategory = category;
    }
  },
}
</script>

<style>


.page-works h1.title { font-size:90px; line-height:1.1; color:#333; position:fixed; top:200px; left:100px; font-family: 'Roboto', sans-serif;}
.page-works .filter { position:fixed; top:210px; right:610px; display:inline-block; }
.page-works .filter li { display:inline-block; cursor:pointer; margin-right:7px; color:#aaa; padding:2px 15px;}
.page-works .filter li:hover { color:#666;}
.page-works .filter li.active { color:#333; border:1px solid #333;  border-radius:25px; }
.page-works .work-list-wrap { width:400px; margin:0 200px 0 auto;}
.page-works .work-list { display:inline-block; }
.page-works .work-list li { display:inline-block; width:400px; height:240px; background-color:#f6f6f6; vertical-align: top; margin-top:4px; cursor:pointer; }
.page-works .work-list li:first-child { margin-top:0; }
.page-works .work-list .info { height:100%; background-color:rgba(0,0,0,0.2); color:#fff; text-align:left; padding:30px; box-sizing:border-box; opacity:0; transition:opacity .2s ease;}
.page-works .work-list .info:hover { opacity:1; transition:all .2s ease;}
.page-works .work-list .info .ctgr { font-size: 14px; }
.page-works .work-list .info .tit { font-size: 22px; }
.page-works .scroll-area { width: 420px; height: 100vh; }
.sns-icon { position:fixed; left:100px; bottom:70px; }
.sns-icon li { float:left; margin-right:22px; cursor:pointer; opacity:.3; }
.sns-icon li:hover { opacity:1; transition:all .2s ease; }
.sns-icon li img { width:18px; }

/* .work-list-enter-active, .work-list-leave-active { transition: all .3s; }
.work-list-enter, .work-list-leave-to { opacity: 0; transform: translateY(20px); } */

/*
 * Container style
 */
.ps {
  overflow: hidden !important;
  overflow-anchor: none;
  -ms-overflow-style: none;
  touch-action: auto;
  -ms-touch-action: auto;
}

/*
 * Scrollbar rail styles
 */
.ps__rail-y {
  display: none;
  opacity: 0;
  transition: background-color .2s linear, opacity .2s linear;
  -webkit-transition: background-color .2s linear, opacity .2s linear;
  width: 5px;
  /* there must be 'right' or 'left' for ps__rail-y */
  right: 0;
  /* please don't change 'position' */
  position: absolute;
}

.ps--active-x > .ps__rail-x,
.ps--active-y > .ps__rail-y {
  display: block;
  background-color: transparent;
}

.ps:hover > .ps__rail-x,
.ps:hover > .ps__rail-y,
.ps--focus > .ps__rail-x,
.ps--focus > .ps__rail-y,
.ps--scrolling-x > .ps__rail-x,
.ps--scrolling-y > .ps__rail-y {
  background-color:#fff;
  opacity: 1;
}

.ps .ps__rail-x:hover,
.ps .ps__rail-y:hover,
.ps .ps__rail-x:focus,
.ps .ps__rail-y:focus,
.ps .ps__rail-x.ps--clicking,
.ps .ps__rail-y.ps--clicking {
  background-color: #fff;
  opacity: 1;
}

/*
 * Scrollbar thumb styles
 */

.ps__thumb-y {
  background-color: #111;
  border-radius: 0;
  transition: background-color .2s linear, width .2s ease-in-out;
  -webkit-transition: background-color .2s linear, width .2s ease-in-out;
  width: 4px;
  /* there must be 'right' for ps__thumb-y */
  right: 0;
  /* please don't change 'position' */
  position: absolute;
}

.ps__rail-y:hover > .ps__thumb-y,
.ps__rail-y:focus > .ps__thumb-y,
.ps__rail-y.ps--clicking .ps__thumb-y {
  background-color: #111;
  width: 4px;
}

/* MS supports */
@supports (-ms-overflow-style: none) {
  .ps {
    overflow: auto !important;
  }
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .ps {
    overflow: auto !important;
  }
}
</style>
