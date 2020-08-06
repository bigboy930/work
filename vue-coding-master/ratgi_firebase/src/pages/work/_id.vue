<template>
  <div class="detail">
    <div class="inner" :class="{ vertical : selectedWork.imgVertical }">
      <h1 class="pg-tit">{{ selectedWork.title }}</h1>
      <p class="sub mt-5 mb-30">{{ selectedWork.subTitle }}</p>
      <div class="img-area">
        <img v-for="imgs in selectedWork.detailImg" :key="imgs" :src="require('../../assets/images/detail/' + imgs + '.jpg')">
      </div>
      <p class="desc">{{ selectedWork.description }}</p>
    </div>

    <div class="bottom-cover"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  asyncData({params}) { 
    return { id: params.id }; 
  },
  validate({params}) { 
    return /^\d+$/.test(params.id);
  },
  data(){
    return {
      workID: this.$route.params.id,
    }
  },
  computed: {
    ...mapState(['workList']),
    selectedWork(){
      const work = this.workList.filter(work => {
        return work.id === Number(this.workID)
      })
      return work[0]
    },
  },
}
</script>

<style scoped>
.detail .inner { width:960px; margin:0 auto; padding-top:140px; }
.detail .inner.vertical { width:700px; margin:0 auto; padding-top:90px; }
.detail .inner .sub { font-size:18px; color:#bbb; }
.detail .inner .img-area { margin-top:50px; }
.detail .inner .img-area img { width:100%; }
.detail .inner .img-area img:last-child { margin-bottom:70px; }
.detail .inner .desc { font-size:17px; line-height:1.6; color:#888; margin-bottom:110px; word-break: keep-all; }

@media (max-width:1700px) {
  .work { padding-top:90px;}
}
</style>