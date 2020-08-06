<template>
  <div>
    <ul class="filter">
      <li v-for="ctgr in categories" :key="ctgr" :class="{ active : ctgr === selectedCategory}">
        <button @click="fatchCategory(ctgr)">{{ ctgr }}</button>
      </li>
    </ul> 
  </div>
</template>

<script>
export default {
  name: 'category',
  props: ['categories','selectedCategory'],
  methods:{
    fatchCategory(ctgr){
      this.$emit('changeCategory', ctgr)
    },
  },
}
</script>

<style scoped>
.filter { margin-bottom:25px; }
.filter li { display:inline-block; margin-right:7px; }
.filter li button { font-size:15px; color:#333; padding:6px 18px; border-radius:25px;}
.filter li button:hover { background-color:#eee; transition:all .3s ease; }
.filter li.active button { background-color:#222 !important; color:#fff; }
</style>