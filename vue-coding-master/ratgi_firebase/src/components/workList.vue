<template>
  <div>
    <ul class="list clear">
      <transition-group name="fade" mode="out-in">
        <li v-for="work in worklist" :key="work.id" :class="work.category">
          <template v-if="work.externalLink">
            <a :href="work.externalLink" target="blank">
              <div class="thumb">
                <img :src="require('../assets/images/' + work.thumb + '.jpg')" alt="">
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
                <img :src="require('../assets/images/' + work.thumb + '.jpg')" alt="">
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
  </div>
</template>

<script>
export default {
  name: 'worklist',
  props: ['worklist'],
}
</script>

<style scoped>
.list li { width:25%; float:left; padding:0 15px; box-sizing:border-box; margin-bottom:30px;}
.list .thumb { margin-bottom:10px; border-radius:6px; overflow:hidden; }
.list .thumb:hover { box-shadow:0 10px 10px rgba(0,0,0,0.1); transition:all .2s ease; }
.list .thumb img { width:100%; transform:scale(1); transition:all .3s ease;}
.list .thumb:hover img { transform:scale(1.1); transition:all .3s ease; }
.list .tit { font-size:18px; color:#666; margin-bottom:3px; }
.list .sub { font-size:12px; color:#ccc; }
</style>