<template>
  <section>
    <div class="work">
      <div class="inner-wrap">
        <h1 class="pg-tit mb-30">Work</h1>
        <category 
          :categories="categories" 
          :selectedCategory="selectedCategory"
          @changeCategory="changeCategory">
        </category>
      </div>
      <work-list :worklist="filterList"></work-list>
      <nuxt-child/>
    </div>
  </section>

</template>

<script>
import { mapState } from 'vuex'
import workList from '../../components/workList.vue'
import category from '../../components/category.vue'

export default {
  name: 'work',
  data(){
    return {
      categories: ['Design','Publish','Idea'],
      selectedCategory: 'Design',
    }
  },
  components: {
    workList,
    category
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
    changeCategory(ctgr){
      this.selectedCategory = ctgr
    },
  },
}
</script>

<style scoped>
.work { width:1300px; margin:0 auto; padding-top:140px;}
/* .filter { margin-bottom:25px; }
.filter li { display:inline-block; margin-right:7px; }
.filter li button { font-size:15px; color:#333; padding:6px 18px; border-radius:25px;}
.filter li button:hover { background-color:#eee; transition:all .3s ease; }
.filter li.active button { background-color:#222 !important; color:#fff; } */

.fade-enter-active { transition: all .5s ease;  }
.fade-enter { opacity:0; margin-top:20px; }

@media (max-width:1700px) {
  .work { padding-top:90px;}
}
</style>
