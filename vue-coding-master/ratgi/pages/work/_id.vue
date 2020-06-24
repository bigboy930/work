<template>
  <div class="detail">
    <h1 class="pg-tit">{{ selectedWork.title }}</h1>
    <p class="sub mb-30">{{ selectedWork.subTitle }}</p>
    <p class="desc mb-30">{{ selectedWork.description }}</p>
    <div class="img-area">
      <img v-for="imgs in selectedWork.detailImg" :key="imgs" :src="require('../../assets/images/detail/' + imgs + '.jpg')">
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
  computed: {
    ...mapState(['workList']),
    selectedWork(){
      const work = this.workList.filter(work => {
        return work.id === Number(this.workID)
      })
      return work[0]
    },
  },
  data(){
    return {
      workID: this.$route.params.id
    }
  },
  watch: {
    workID(val){
      console.log(val)
    }
  }
}
</script>

<style scoped>
.detail { width:900px; margin:0 auto; padding-top:90px; }
.detail .sub { font-size:18px; color:#bbb; }
.detail .desc { font-size:17px; color:#888; }
.detail .img-area img { width:100%; }
</style>