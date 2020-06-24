<template>
  <section>
    <div class="work">
      <div class="inner-wrap">
        <h1 class="pg-tit mb-30">Work</h1>
        <ul class="filter">
          <li v-for="ctgr in categories" :key="ctgr" :class="{ active : ctgr === selectedCategory}">
            <button @click="fatchCategory(ctgr)">{{ ctgr }}</button>
          </li>
        </ul> 
      </div>
      <ul class="list clear">
        <transition-group name="fade" mode="out-in">
          <li v-for="work in filterList" :key="work.id" :class="work.category">
            <template v-if="work.externalLink">
              <a :href="work.externalLink" target="blank">
                <div class="thumb">
                  <img :src="require('../../assets/images/' + work.thumb + '.jpg')" alt="">
                </div>
                <div>
                  <p class="tit">{{ work.title }}</p>
                  <p class="sub">{{ work.subTitle }}</p>
                </div>
              </a>
            </template>

            <template v-else>
              <nuxt-link :to="`/work/${work.id}`">
                <div class="thumb">
                  <img :src="require('../../assets/images/' + work.thumb + '.jpg')" alt="">
                </div>
                <div>
                  <p class="tit">{{ work.title }}</p>
                  <p class="sub">{{ work.subTitle }}</p>
                </div>
              </nuxt-link>
            </template>
          </li>
        </transition-group>
      </ul>
      <nuxt-child/>
    </div>
  </section>

</template>

<script>
import { mapState } from 'vuex'

export default {
  data(){
    return {
      categories: ['Design','Publish'],
      selectedCategory: 'Design',
    }
  },
  computed: {
    ...mapState(['workList']),

    filterList(){
      return this.workList.filter(work => {
        return work.category === this.selectedCategory;
      })
    },
  },
  methods:{
    fatchCategory(ctgr){
      this.selectedCategory = ctgr
    },
  },
}
</script>

<style scoped>
.work { width:1300px; margin:0 auto; padding-top:90px;}
.work .list li { width:25%; float:left; padding:0 15px; box-sizing:border-box; margin-bottom:30px;}
.work .list .thumb { margin-bottom:10px; border-radius:6px; overflow:hidden; }
.work .list .thumb:hover { box-shadow:0 10px 10px rgba(0,0,0,0.1); transition:all .2s ease; }
.work .list .thumb img { width:100%; transform:scale(1); transition:all .3s ease;}
.work .list .thumb:hover img { transform:scale(1.1); transition:all .3s ease; }
.work .list .tit { font-size:18px; color:#666; margin-bottom:3px; }
.work .list .sub { font-size:12px; color:#ccc; }
.filter { margin-bottom:25px; }
.filter li { display:inline-block; margin-right:7px; }
.filter li button { font-size:15px; color:#333; padding:6px 18px; border-radius:25px;}
.filter li button:hover { background-color:#eee; transition:all .3s ease; }
.filter li.active button { background-color:#222 !important; color:#fff; }

.fade-enter-active { transition: all .5s ease;  }
.fade-enter { opacity:0; margin-top:20px; }

@media (max-width:1700px) {
  /* .work-list { width:1300px; } */
}
</style>
